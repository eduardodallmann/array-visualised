import type { ReactNode } from 'react';

export type CircleType = { id: string; color: Colors };

export enum Colors {
  red = 'bg-red-500',
  green = 'bg-green-400',
  blue = 'bg-blue-500',
  purple = 'bg-purple-500',
  yellow = 'bg-yellow-500',
  orange = 'bg-orange-500',
}

export type CircleElement = CircleType & {
  element?: never;
};

export type ElementWithType = {
  id: string;
  element: ReactNode;
  color?: never;
};

export type FunctionBlockType = CircleElement | ElementWithType;
