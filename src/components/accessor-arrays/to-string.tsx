import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import type { FunctionBlockType } from '../commons/types';

const code = `const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Saída esperada: "1,2,a,1a"
`;

const toString1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: 'A' },
  { id: crypto.randomUUID(), element: 'B' },
  { id: crypto.randomUUID(), element: 'C' },
];
const toStringResult1 = toString1.map((e) => e.element).toString();

export function ToString() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="ToString: Retorna uma string representando o array especificado e seus elementos."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={toString1} showComma />
          <FunctionBlock functionName="toString" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{toStringResult1}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
