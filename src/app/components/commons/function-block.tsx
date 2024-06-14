import { Fragment } from 'react';

import { Circle } from './circle';
import type { CircleType } from './circle.types';

export function FunctionBlock({
  functionName,
  itens,
}: {
  functionName: string;
  itens: Array<CircleType>;
}) {
  return (
    <div className="flex flex-row items-center text-white lg:text-3xl md:text-xl text-lg font-medium md:ml-0 ml-4">
      .{functionName}(
      {itens.map(({ color, id }, index) => (
        <Fragment key={id}>
          <Circle color={color} id={id} />
          {index < itens.length - 1 && ','}
        </Fragment>
      ))}
      )
    </div>
  );
}
