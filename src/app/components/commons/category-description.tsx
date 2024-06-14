import type { PropsWithChildren } from 'react';

export function CategoryDescription({ children }: PropsWithChildren) {
  return (
    <p className="text-white md:text-lg text-base font-light text-justify">
      {children}
    </p>
  );
}
