import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array = [1, 2, 3, 4, 5];

// Verifica se um elemento é par
const par = (element) => element % 2 === 0;

console.log(array.some(par));
// Saída esperada: true
`;

const some1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
];
const somaParam1: Array<FunctionBlockType> = [some1[2]];
const someResult1 = some1
  .some((item) => item.color === Colors.green)
  .toString();

const some2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.purple },
];
const someParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.green },
];
const someResult2 = some2
  .some((item) => item.color === Colors.green)
  .toString();

export function Some() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Some: Testa se ao menos um dos elementos no array passa no teste implementado pela função fornecida."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={some1} />
          <FunctionBlock functionName="some" itens={somaParam1} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{someResult1}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={some2} />
          <FunctionBlock functionName="some" itens={someParam2} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{someResult2}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
