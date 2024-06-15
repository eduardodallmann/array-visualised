import { CopyWithin } from './copy-within';
import { Fill } from './fill';
import { Pop } from './pop';
import { Push } from './push';
import { Reverse } from './reverse';
import { Shift } from './shift';
import { Sort } from './sort';
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
      <Sort />
      <Reverse />
      <Fill />
      <CopyWithin />
    </>
  );
}
