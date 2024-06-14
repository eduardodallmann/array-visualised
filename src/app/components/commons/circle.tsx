'use client';

import type { CircleType } from './circle.types';
import { useItem } from './example-wrapper';

export function Circle({ id, color }: CircleType) {
  const { item, setItem, removeItem } = useItem();

  return (
    <div
      className={`lg:w-8 lg:h-8 md:h-6 md:w-6 h-5 w-5 rounded-full ${color} ${item === id ? 'animate-pulse' : ''}`}
      onMouseEnter={() => setItem(id)}
      onMouseLeave={removeItem}
    />
  );
}
