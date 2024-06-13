import type { PropsWithChildren, ReactNode } from 'react';

import { Arrow } from './arrow';

export function ExampleWrapper({
  explanation,
  left,
  center = <Arrow />,
  right,
}: PropsWithChildren<{
  explanation?: string;
  left: ReactNode;
  center?: ReactNode;
  right: ReactNode;
}>) {
  return (
    <div className="mb-2">
      {explanation && (
        <div className="text-white text-base font-thin mb-1">{explanation}</div>
      )}
      <div className="flex justify-between">
        <ExampleItem size="big">{left}</ExampleItem>
        <ExampleItem size="small">{center}</ExampleItem>
        <ExampleItem>{right}</ExampleItem>
      </div>
    </div>
  );
}

function ExampleItem({
  size = 'normal',
  children,
}: PropsWithChildren<{ size?: 'small' | 'normal' | 'big' }>) {
  const flex = {
    small: 'flex-[0.1_0.1_0%]',
    normal: 'flex-[0.3_0.3_0%]',
    big: 'flex-[0.6_0.6_0%]',
  };

  return <div className={`${flex[size]} min-w-0 box-border`}>{children}</div>;
}
