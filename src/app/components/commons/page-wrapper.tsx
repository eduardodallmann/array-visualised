import type { PropsWithChildren } from 'react';

export function PageWrapper({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto flex flex-col gap-4">{children}</div>
  );
}
