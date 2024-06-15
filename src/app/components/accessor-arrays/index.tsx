import { Concat } from './concat';
import { IndexOf } from './index-of';
import { Join } from './join';
import { LastIndexOf } from './last-index-of';
import { Slice } from './slice';
import { ToLocaleString } from './to-locale-string';
import { ToString } from './to-string';

export function AccessorArrays() {
  return (
    <>
      <Concat />
      <Slice />
      <IndexOf />
      <LastIndexOf />
      <Join />
      <ToString />
      <ToLocaleString />
    </>
  );
}
