import { Circle, type Colors } from './circle';

export function ArrayBlock({ itens }: { itens: Array<Colors> }) {
  return (
    <div className="flex items-center gap-2 font-bold text-5xl text-white">
      <div>[</div>
      <div className="flex flex-row gap-2">
        {itens.map((color, index) => (
          <Circle key={index} color={color} />
        ))}
      </div>
      <div>]</div>
    </div>
  );
}
