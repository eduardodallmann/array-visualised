import type { PropsWithChildren } from 'react';

export function ResultBlock({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center lg:gap-2 gap-1 font-bold lg:text-4xl md:text-3xl text-4xl text-white overflow-hidden">
      {children}
    </div>
  );
}
