import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Arrow } from '../commons/icons/arrow';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array1 = [1, 2, 3, 4];

// Preencher com 0 da posição 2 até a posição 4
console.log(array1.fill(0, 2, 4));
// Saída esperada: 1, 2, 0, 0

// Preencher com 5 da posição 1
console.log(array1.fill(5, 1));
// Saída esperada: 1, 5, 5, 5

console.log(array1.fill(6));
// Saída esperada: 6, 6, 6, 6
`;

const fill1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
];
const fillParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.yellow },
];
const fillResult1: Array<FunctionBlockType> = [...fill1];
fillResult1.fill(fillParam1[0]);

const fill2 = [...fill1];
const fillParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.yellow },
  { id: crypto.randomUUID(), element: '1' },
];
const fillResult2: Array<FunctionBlockType> = [...fill2];
fillResult2.fill(fillParam2[0], 1);

const fill3 = [...fill1];
const fillParam3: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.yellow },
  { id: crypto.randomUUID(), element: '2' },
  { id: crypto.randomUUID(), element: '4' },
];
const fillResult3: Array<FunctionBlockType> = [...fill3];
fillResult3.fill(fillParam3[0], 2, 4);

export function Fill() {
  return (
    <>
      <ExampleWrapper
        explanation="Fill: Preenche todos os elementos do array a partir do índice de início até o índice de fim com um valor estático."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={fill1} showBreak />
          <FunctionBlock functionName="fill" itens={fillParam1} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={fillResult1} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={fill2} showBreak />
          <FunctionBlock functionName="fill" itens={fillParam2} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={fillResult2} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={fill3} showBreak />
          <FunctionBlock functionName="fill" itens={fillParam3} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={fillResult3} />
      </ExampleWrapper>
    </>
  );
}
