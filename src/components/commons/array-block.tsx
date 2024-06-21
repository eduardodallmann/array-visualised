import { Fragment } from 'react';

import { Circle } from './circle';
import type { FunctionBlockType } from './types';

export function ArrayBlock({
  itens,
  showComma,
}: {
  itens: Array<FunctionBlockType>;
  showComma?: boolean;
}) {
  const grids: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  };

  return (
    <div className="flex items-center lg:gap-2 gap-1 font-bold lg:text-5xl md:text-3xl text-4xl text-white overflow-hidden">
      <div>[</div>
      <div
        className={`grid ${grids[itens.length]} lg:gap-2 gap-1 lg:text-3xl md:text-xl text-2xl`}
      >
        {itens.map(({ color, element, id }, index) => (
          <Fragment key={index}>
            {color ? (
              <div>
                <Circle color={color} id={id} />
                <Comma index={index} />
              </div>
            ) : (
              <div className="text-center">
                {element}
                <Comma index={index} />
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="-mr-[2px]">]</div>
    </div>
  );

  function Comma({ index }: { index: number }) {
    return showComma && index < itens.length - 1 && <>,</>;
  }
}
