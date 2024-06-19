import { Fragment } from 'react';

import { Circle } from './circle';
import type { FunctionBlockType } from './types';

export function FunctionBlock({
  functionName,
  itens,
}: {
  functionName: string;
  itens: Array<FunctionBlockType>;
}) {
  return (
    <div className="flex flex-row items-center text-white lg:text-3xl md:text-xl text-lg font-medium md:ml-0 ml-4">
      .{functionName}(
      {itens.map((item, index) => (
        <Fragment key={index}>
          {item.color && <Circle color={item.color} id={item.id} />}
          {item.element}
          {index < itens.length - 1 && ','}
        </Fragment>
      ))}
      )
    </div>
  );
}
