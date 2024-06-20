import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Body } from '~/components/commons/body';
import { PageWrapper } from '~/components/commons/page-wrapper';
import { ModalProvider } from '~/context/modal';

import './globals.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Métodos Array Visualizados',
  description: 'Visualização de métodos de arrays em JavaScript.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
      </head>
      <ModalProvider>
        <Body>
          <PageWrapper>{children}</PageWrapper>
        </Body>
      </ModalProvider>
    </html>
  );
}
