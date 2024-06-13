export enum Colors {
  red = 'bg-red-500',
  green = 'bg-green-400',
  blue = 'bg-blue-500',
  purple = 'bg-purple-500',
  //   yellow = 'bg-yellow-500',
  orange = 'bg-orange-500',
}

export function Circle({ color }: { color: Colors }) {
  return <div className={`w-8 h-8 rounded-full ${color}`} />;
}
