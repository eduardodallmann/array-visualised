'use client';

import type { PropsWithChildren } from 'react';

import { useModal } from '~/context/modal';

export function Body({ children }: PropsWithChildren) {
  const { showingModal } = useModal();

  return (
    <body className={`bg-slate-900 ${showingModal ? 'overflow-y-hidden' : ''}`}>
      {children}
    </body>
  );
}
