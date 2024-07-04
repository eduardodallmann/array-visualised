import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Circle } from '../commons/circle';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array1 = [5, 12, 8, 130, 44];

const encontrado = (element) => element > 10;

console.log(array1.find(encontrado));
// Saída esperada: 12
`;

const find1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
];
const findParam1: Array<FunctionBlockType> = [find1[2]];
const findResult1 = find1.find((e) => e.id === findParam1[0].id);

export function Find() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Find: Retorna o primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, 'undefined' é retornado."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={find1} />
          <FunctionBlock functionName="find" itens={findParam1} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{findResult1?.element}</ResultBlock>
        {findResult1 && findResult1.color && (
          <Circle color={findResult1.color} id={findResult1.id} />
        )}
      </ExampleWrapper>
    </ExampleContainer>
  );
}
