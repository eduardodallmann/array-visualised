import { Circle } from './circle';
import type { CircleType } from './circle.types';

export function ArrayBlock({ itens }: { itens: Array<CircleType> }) {
  return (
    <div className="flex items-center gap-2 font-bold text-5xl text-white">
      <div>[</div>
      <div className="flex flex-row gap-2">
        {itens.map(({ color, id }, index) => (
          <Circle key={index} color={color} id={id} />
        ))}
      </div>
      <div>]</div>
    </div>
  );
}
