export interface IElementPositionOnScreen {
  y: number;
  x: number;
}

export interface IElementPositionOnCanvas {
  row: number;
  col: number;
}

export type TObserver = () => void;

export type TMouseObserver = (position: IElementPositionOnScreen) => void;
