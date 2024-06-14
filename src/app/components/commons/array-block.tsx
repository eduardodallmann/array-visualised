import { ArrowBreak } from './arrow-break';
import { Circle } from './circle';
import type { CircleType } from './circle.types';

export function ArrayBlock({
  itens,
  showBreak,
}: {
  itens: Array<CircleType>;
  showBreak?: boolean;
}) {
  return (
    <div className="flex items-center lg:gap-2 gap-1 font-bold lg:text-5xl md:text-3xl text-2xl text-white">
      <div>[</div>
      <div className="flex flex-row lg:gap-2 gap-1">
        {itens.map(({ color, id }) => (
          <Circle key={id} color={color} id={id} />
        ))}
      </div>
      <div>]</div>
      {showBreak && <ArrowBreak />}
    </div>
  );
}
