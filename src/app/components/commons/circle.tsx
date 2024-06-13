'use client';

import type { CircleType } from './circle.types';
import { useItem } from './example-wrapper';

export function Circle({ id, color }: CircleType) {
  const { item, setItem, removeItem } = useItem();

  return (
    <div
      className={`w-8 h-8 rounded-full ${color} ${item === id ? 'animate-pulse' : ''}`}
      onMouseEnter={() => setItem(id)}
      onMouseLeave={removeItem}
    />
  );
}
