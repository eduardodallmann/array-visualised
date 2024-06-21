export function Hr({
  className = '',
  type = 'primary',
}: {
  className?: string;
  type?: 'primary' | 'secondary';
}) {
  return (
    <hr
      className={`${className} ${type === 'primary' ? 'my-3 border-slate-500' : 'my-3 border-dashed border-slate-700'}`}
    />
  );
}
