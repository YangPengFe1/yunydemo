使用useReducer+useContext模拟一个redux
背景介绍
在使用React开发项目的时候，通常对于一些全局数据我们都会选择使用redux来进行管理，但是在有些场景却不一定非要使用redux，比如下面的几个场景

部分复杂页面状态需要进行祖孙传递
项目很小，至少很少量的全局数据需要维护
对于这两个 场景就可以使用useReducer + useContext来模拟一个redux来进行状态管理

封装一个useReducer+useContext组件
import React, {
  Dispatch, 
  useReducer, 
  createContext, 
  useContext, 
  useEffect, 
  Reducer, 
} from 'react'; 

export interface ReducerContextResult<T, A> {
  useStore: () => T; 
  useDispatch: () => Dispatch<A>; 
  StoreProvider: React. FC<any>; 
}

function createReducerContext<T, A>(
  initState: T, 
  reducer: Reducer<T, A>, 
  initData?: (state: T, dispatch: Dispatch<A>) => void, 
): ReducerContextResult<T, A> {
  const StateContext = createContext(initState); 
  const DispatchContext = createContext({} as Dispatch<A>); 

  function useStore(): T {

    return useContext(StateContext);

  }

  function useDispatch(): Dispatch<A> {

    return useContext(DispatchContext);

  }

  function StoreProvider({ children }: { children: React. ReactNode }) {

    const [state, dispatch] = useReducer<Reducer<T, A>>(reducer, initState);

    useEffect(() => {
      /*eslint-disable*/
      initData && initData(initState, dispatch);
    }, []);
    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );

  }
  return {

    useStore,
    useDispatch,
    StoreProvider,

  }; 
}

export default createReducerContext; 
复制代码
如上代码，我们封装了一个通用的createReducerContext, 接下来看一下如何使用这个组件呢

使用封装的组件
初始化context
// 声明一个action_type
export enum ACTION_TYPE {
  INIT = 'init', 
  UPDATE = 'update'
  // 添加其他TYPE
}

export interface IUser{
  name: string; 
  sex: number; 
}

export interface IState {
  userInfo: IUser[]; 
  // 其他state
}

export default IAction{
  type: ACTION_TYPE; 
  data: any; 
}

const initState: IState {
  userInfo: []; 
}

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {

    case ACTION_TYPE.INIT:
      return { ...action.data };
    default:
      return state;

  }
}

const contextResult: ReducerContextResult<IState, IAction> = createReducerContext<
  IState, 
  IAction

> (initState, reducer, (state: IState, dispatch: Dispatch<IAction>) => {

	// 在这里可以初始化数据
	loadData().then(data => {
    dispatch({
       type: ACTION_TYPE.INIT,
       data
    })

  })
}); 

export const { useStore, useDispatch, StoreProvider } = contextResult; 

复制代码
在容器页面使用StoreProvider

import {StoreProvider} from './context'

export default function() { 
  return <StoreProvider>
  	<!--容器内容-->
  </StoreProvider>
}
复制代码
在子组件使用useStore和useDispatch

import {useStore, useDispatch, ACTION_TYPE} from './context'

const UserList = (props) => {
  // 数据
  const {data} = useStore()
  // 通过dispatch 更新数据
  const dispatch = useDispatch()
  
  // 使用dispatch更新数据
  function updateData(result) {

    dispatch({
      type: ACTION_TYPE.UPDATE,
      data: result
    })

  }
}
