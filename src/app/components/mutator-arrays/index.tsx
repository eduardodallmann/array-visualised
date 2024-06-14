import { Pop } from './pop';
import { Push } from './push';
import { Shift } from './shift';
import { Splice } from './splice';
import { Unshift } from './unshift';

export function MutatorArrays() {
  return (
    <>
      <Push />
      <Pop />
      <Shift />
      <Unshift />
      <Splice />
    </>
  );
}
