import type { PropsWithChildren } from 'react';

export function CategoryTitle({ children }: PropsWithChildren) {
  return <h2 className="text-xl font-medium text-white mb-2">{children}</h2>;
}
