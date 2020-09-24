export interface IElementPosition {
  y?: number;
  x?: number;
  row?: number;
  col?: number;
}

export type TObserver = (position: IElementPosition) => void;
