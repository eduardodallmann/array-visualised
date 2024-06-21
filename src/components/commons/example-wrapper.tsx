'use client';

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

import { useModal } from '~/context/modal';

import { Arrow } from './icons/arrow';
import { RunIcon } from './icons/run';

export const ItemContext = createContext<{
  item: string;
  setItem: (item: string) => void;
  removeItem: () => void;
}>({
  item: 'default',
  setItem: () => {},
  removeItem: () => {},
});

export function ExampleWrapper({
  explanation,
  code = '',
  children: [left, center, right],
}: {
  explanation?: string;
  code?: string;
  children: [ReactNode, ReactNode] | [ReactNode, ReactNode, ReactNode];
}) {
  const [item, setItem] = useState<string>('');
  const removeItem = () => setItem('');
  const { showCode } = useModal();

  return (
    <ItemContext.Provider value={{ item, setItem, removeItem }}>
      <div className="mb-2">
        {explanation && (
          <div className="flex gap-2 items-center text-white md:text-base text-sm text-justify font-thin mb-1">
            {code && <RunIcon click={() => showCode(code)} />}
            {explanation}
          </div>
        )}
        <div className="flex justify-between md:flex-row flex-col">
          <ExampleItem size="big">{left}</ExampleItem>
          <ExampleItem size="small" className="flex items-center">
            {Boolean(right) ? center : <Arrow />}
          </ExampleItem>
          <ExampleItem className="flex items-center">
            {Boolean(right) ? right : center}
          </ExampleItem>
        </div>
      </div>
    </ItemContext.Provider>
  );
}

function ExampleItem({
  size = 'normal',
  className = '',
  children,
}: PropsWithChildren<{
  size?: 'small' | 'normal' | 'big';
  className?: string;
}>) {
  const flex = {
    small: 'flex-[0.15_0.15_0%]',
    normal: 'md:flex-[0.3_0.3_0%] flex-[0.4_0.4_0%]',
    big: 'md:flex-[0.55_0.55_0%] flex-[0.3_0.3_0%]',
  };

  return (
    <div className={`${flex[size]} min-w-0 box-border ${className}`}>
      {children}
    </div>
  );
}

export const useItem = () => useContext(ItemContext);
