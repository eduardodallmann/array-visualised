import type { PropsWithChildren } from 'react';

export function CategoryDescription({ children }: PropsWithChildren) {
  return <p className="text-white text-lg font-light">{children}</p>;
}
