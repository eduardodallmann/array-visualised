import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const animais = ['formiga', 'búfalo', 'camelo', 'pato', 'búfalo'];

console.log(animais.indexOf('búfalo'));
// Saída esperada: 1

// Comece a partir do índice 2
console.log(animais.indexOf('búfalo', 2));
// Saída esperada: 4

console.log(animais.indexOf('girafa'));
// Saída esperada: -1
`;

const indexOf1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
];
const indexOfParam1: Array<FunctionBlockType> = [indexOf1[1]];
const indexOfResult1 = indexOf1.indexOf(indexOfParam1[0]);

const indexOf2: Array<FunctionBlockType> = [...indexOf1, indexOf1[0]];
const indexOfParam2: Array<FunctionBlockType> = [
  indexOf2[3],
  { id: crypto.randomUUID(), element: 2 },
];
const indexOfResult2 = indexOf2.indexOf(indexOfParam2[0], 2);

const indexOf3: Array<FunctionBlockType> = [...indexOf1];
const indexOfParam3: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.yellow },
];
const indexOfResult3 = indexOf3.indexOf(indexOfParam3[0]);

export function IndexOf() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="IndexOf: Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={indexOf1} />
          <FunctionBlock functionName="indexOf" itens={indexOfParam1} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{indexOfResult1}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={indexOf2} />
          <FunctionBlock functionName="indexOf" itens={indexOfParam2} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{indexOfResult2}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={indexOf3} />
          <FunctionBlock functionName="indexOf" itens={indexOfParam3} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{indexOfResult3}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
