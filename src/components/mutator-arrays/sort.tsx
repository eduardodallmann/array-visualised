import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Arrow } from '../commons/arrow';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { FunctionIcon } from '../commons/function-icon';
import type { FunctionBlockType } from '../commons/types';

const sort1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: 2 },
  { id: crypto.randomUUID(), element: 1 },
  { id: crypto.randomUUID(), element: 4 },
  { id: crypto.randomUUID(), element: 3 },
];
const sortResult1: Array<FunctionBlockType> = [...sort1];
sortResult1.sort(
  (a: FunctionBlockType, b: FunctionBlockType) =>
    Number(a.element) - Number(b.element),
);

const sort2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: 2 },
  { id: crypto.randomUUID(), element: 1 },
  { id: crypto.randomUUID(), element: 4 },
  { id: crypto.randomUUID(), element: 3 },
];
const sortParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: <FunctionIcon /> },
];
const sortResult2: Array<FunctionBlockType> = [...sort2];
sortResult2.sort(
  (a: FunctionBlockType, b: FunctionBlockType) =>
    Number(b.element) - Number(a.element),
);

export function Sort() {
  return (
    <>
      <ExampleWrapper explanation="Sort: Ordena os elementos do array automaticamente ou com base em uma função.">
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={sort1} showBreak showComma />
          <FunctionBlock functionName="sort" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={sortResult1} showComma />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={sort2} showBreak showComma />
          <FunctionBlock functionName="sort" itens={sortParam2} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={sortResult2} showComma />
      </ExampleWrapper>
    </>
  );
}
