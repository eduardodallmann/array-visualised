'use client';

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

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
  children: [left, center, right],
}: {
  explanation?: string;
  children: [ReactNode, ReactNode, ReactNode];
}) {
  const [item, setItem] = useState<string>('');
  const removeItem = () => setItem('');

  return (
    <ItemContext.Provider value={{ item, setItem, removeItem }}>
      <div className="mb-2">
        {explanation && (
          <div className="text-white md:text-base text-sm text-justify font-thin mb-1">
            {explanation}
          </div>
        )}
        <div className="flex justify-between">
          <ExampleItem size="big">{left}</ExampleItem>
          <ExampleItem size="small" className="flex items-center">
            {center}
          </ExampleItem>
          <ExampleItem className="flex items-center">{right}</ExampleItem>
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
    small: 'flex-[0.1_0.1_0%]',
    normal: 'md:flex-[0.3_0.3_0%] flex-[0.4_0.4_0%]',
    big: 'md:flex-[0.6_0.6_0%] flex-[0.3_0.3_0%]',
  };

  return (
    <div className={`${flex[size]} min-w-0 box-border ${className}`}>
      {children}
    </div>
  );
}

export const useItem = () => useContext(ItemContext);
