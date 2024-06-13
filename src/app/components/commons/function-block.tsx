import { Circle, type Colors } from './circle';

export function FunctionBlock({
  functionName,
  itens,
}: {
  functionName: string;
  itens: Array<Colors>;
}) {
  return (
    <div className=" flex flex-row items-center text-white text-3xl font-medium">
      .{functionName}(
      {itens.map((color, index) => (
        <>
          <Circle key={index} color={color} />
          {index < itens.length - 1 && ', '}
        </>
      ))}
      )
    </div>
  );
}
