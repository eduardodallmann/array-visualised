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
    <div className=" flex flex-row items-center text-white text-3xl font-medium">
      .{functionName}(
      {itens.map(({ color, id }, index) => (
        <>
          <Circle key={index} color={color} id={id} />
          {index < itens.length - 1 && ', '}
        </>
      ))}
      )
    </div>
  );
}
