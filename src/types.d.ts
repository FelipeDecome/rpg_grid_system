export interface IElementPosition {
  x: number;
  y: number;
}

export type TObserver = (position: IElementPosition) => void;
