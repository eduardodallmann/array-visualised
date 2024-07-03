import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Saída esperada: true
`;

const every1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
];
const everyParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.green },
];
const everyResult1 = every1
  .every((item) => item.color === Colors.green)
  .toString();

const every2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.green },
];
const everyParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.green },
];
const concatResult2 = every2
  .every((item) => item.color === Colors.green)
  .toString();

export function Every() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Every: Testa se todos os elementos no array passam no teste implementado pela função fornecida."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={every1} />
          <FunctionBlock functionName="every" itens={everyParam1} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{everyResult1}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={every2} />
          <FunctionBlock functionName="every" itens={everyParam2} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{concatResult2}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
