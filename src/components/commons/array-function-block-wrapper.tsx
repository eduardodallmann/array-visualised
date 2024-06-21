export function ArrayFunctionBlockWrapper({
  children: [first, second],
}: {
  children: [React.ReactNode, React.ReactNode];
}) {
  return (
    <div className="flex flex-row md:items-center items-start gap-1">
      {first}
      {second}
    </div>
  );
}
