import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const animais = ['Dodo', 'Tigre', 'Pinguim', 'Dodo'];

console.log(animais.lastIndexOf('Dodo'));
// Saída esperada: 3

console.log(animais.lastIndexOf('Tigre'));
// Saída esperada: 1
`;

const repeatedItem = { id: crypto.randomUUID(), color: Colors.orange };
const lastIndexOf1: Array<FunctionBlockType> = [
  repeatedItem,
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  repeatedItem,
];
const lastIndexOfParam1: Array<FunctionBlockType> = [repeatedItem];
const lastIndexOfResult1 = lastIndexOf1.lastIndexOf(repeatedItem);

const lastIndexOf2: Array<FunctionBlockType> = [...lastIndexOf1];
const lastIndexOfParam2: Array<FunctionBlockType> = [
  lastIndexOf2[3],
  { id: crypto.randomUUID(), element: 2 },
];
const lastIndexOfResult2 = lastIndexOf2.lastIndexOf(lastIndexOfParam2[0], 2);

const lastIndexOf3: Array<FunctionBlockType> = [...lastIndexOf1];
const lastIndexOfParam3: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.yellow },
];
const lastIndexOfResult3 = lastIndexOf3.lastIndexOf(lastIndexOfParam3[0]);

export function LastIndexOf() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="LastIndexOf: Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente. (opcional) O segundo parâmetro indica o índice no qual a pesquisa será iniciada de trás para frente."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={lastIndexOf1} />
          <FunctionBlock functionName="lastIndexOf" itens={lastIndexOfParam1} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{lastIndexOfResult1}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={lastIndexOf2} />
          <FunctionBlock functionName="lastIndexOf" itens={lastIndexOfParam2} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{lastIndexOfResult2}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={lastIndexOf3} />
          <FunctionBlock functionName="lastIndexOf" itens={lastIndexOfParam3} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{lastIndexOfResult3}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
