import type { PropsWithChildren } from 'react';

export function PageWrapper({ children }: PropsWithChildren) {
  return (
    <div className="container lg:p-20 md:p-10 p-5 mx-auto flex flex-col gap-4 min-w-[450px]">
      {children}
    </div>
  );
}
