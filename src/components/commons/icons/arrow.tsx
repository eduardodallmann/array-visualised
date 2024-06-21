export function Arrow() {
  return (
    <>
      <div className="hidden md:flex text-slate-500 lg:text-lg text-base my-1">
        Resultado
        <DirectionArrow className="transform -rotate-90 lg:h-6 lg:w-6 md:h-5 md:w-5" />
      </div>
      <div className="md:hidden flex text-slate-500 text-sm my-1">
        <DirectionArrow />
        Resultado
        <DirectionArrow />
      </div>
    </>
  );
}

function DirectionArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`h-4 w-4 mt-[2px] ${className}`}>
      <g>
        <path
          d="M22.285,15.349L16,21.544l-6.285-6.196c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   l6.999,6.899c0.379,0.375,1.048,0.377,1.429,0l6.999-6.9c0.394-0.39,0.394-1.024,0-1.414   C23.319,14.958,22.679,14.958,22.285,15.349z"
          className="fill-slate-500"
        />
        <path
          d="M15.286,16.662c0.379,0.375,1.048,0.377,1.429,0l6.999-6.899c0.394-0.391,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0L16,14.544L9.715,8.349c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   L15.286,16.662z"
          className="fill-slate-500"
        />
      </g>
    </svg>
  );
}
