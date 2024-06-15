import { Entries } from './entries';
import { Every } from './every';
import { Filter } from './filter';
import { Find } from './find';
import { FindIndex } from './find-index';
import { ForEach } from './for-each';
import { Keys } from './keys';
import { Map } from './map';
import { Reduce } from './reduce';
import { ReduceRight } from './reduce-right';
import { Some } from './some';
import { Values } from './values';

export function IterationArrays() {
  return (
    <>
      <ForEach />
      <Map />
      <Filter />
      <Reduce />
      <ReduceRight />
      <Some />
      <Every />
      <Find />
      <FindIndex />
      <Keys />
      <Values />
      <Entries />
    </>
  );
}
