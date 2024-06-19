import { Fragment } from 'react';

import { ArrowBreak } from './arrow-break';
import { Circle } from './circle';
import type { FunctionBlockType } from './types';

export function ArrayBlock({
  itens,
  showBreak,
  showComma,
}: {
  itens: Array<FunctionBlockType>;
  showBreak?: boolean;
  showComma?: boolean;
}) {
  return (
    <div className="flex items-center lg:gap-2 gap-1 font-bold lg:text-5xl md:text-3xl text-2xl text-white">
      <div>[</div>
      <div className="flex flex-row lg:gap-2 gap-1 lg:text-3xl md:text-xl text-lg">
        {itens.map(({ color, element, id }, index) => (
          <Fragment key={index}>
            {color ? <Circle color={color} id={id} /> : element}
            {showComma && index < itens.length - 1 && <>,</>}
          </Fragment>
        ))}
      </div>
      <div>]</div>
      {showBreak && <ArrowBreak />}
    </div>
  );
}
