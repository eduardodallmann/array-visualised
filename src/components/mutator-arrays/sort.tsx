import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { FunctionIcon } from '../commons/icons/function-icon';
import type { FunctionBlockType } from '../commons/types';

const code = `const meses = ['Março', 'Janeiro', 'Fevereiro', 'Dezembro'];
meses.sort();
console.log(meses);
// Saída esperada: Dezembro, Fevereiro, Janeiro, Março

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Saída esperada: 1, 100000, 21, 30, 4

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => b - a);
console.log(array2);
// Saída esperada: 100000, 30, 21, 4, 1
`;

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
    <ExampleContainer>
      <ExampleWrapper
        explanation="Sort: Ordena os elementos do array automaticamente ou com base em uma função."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={sort1} showComma />
          <FunctionBlock functionName="sort" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={sortResult1} showComma />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={sort2} showComma />
          <FunctionBlock functionName="sort" itens={sortParam2} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={sortResult2} showComma />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
