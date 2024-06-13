import type { Metadata } from 'next';

import './globals.css';

import type { PropsWithChildren } from 'react';

import { PageWrapper } from './components/commons/page-wrapper';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
      </head>
      <body className="bg-slate-900 m-20">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
