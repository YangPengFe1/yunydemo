/**
 * throttle function
 * @param func 
 * @param interval 
 * @returns 
 */
export const throttle: (func: Function, interval: number) => Function = (
  func: Function,
  interval: number
) => {
  let timer: any = null;
  return (...arg: any) => {
    if (!timer) {
      timer = setTimeout(() => {
        func(...arg);
        timer = null;
      }, interval);
    }
  };
};
