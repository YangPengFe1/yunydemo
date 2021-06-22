export interface MenubarItem {
  title: string;
  link: string;
  children?: [];
}

export interface IPropsMenubarItemState {
  item: MenubarItem;
  current: number;
  index: number;
  onclick: (index: number) => void;
}

export interface IPropsMenubar {
  background?: string;
  data: [];
}
