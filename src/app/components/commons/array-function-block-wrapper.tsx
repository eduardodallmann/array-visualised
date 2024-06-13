import type { PropsWithChildren } from 'react';

export function ArrayFunctionBlockWrapper({ children }: PropsWithChildren) {
  return <div className="flex flex-row items-center gap-1">{children}</div>;
}
