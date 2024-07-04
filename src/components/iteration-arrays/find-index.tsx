import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array1 = [5, 12, 8, 130, 44];

const ehNumeroGrande = (element) => element > 13;

console.log(array1.findIndex(ehNumeroGrande));
// Saída esperada: 3
`;

const findIndex1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
];
const findIndexParam1: Array<FunctionBlockType> = [findIndex1[2]];
const findIndexResult1 = findIndex1.findIndex(
  (e) => e.id === findIndexParam1[0].id,
);

export function FindIndex() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="FindIndex: Retorna o índice do primeiro elemento no array que satisfaz a função de teste fornecida. Caso contrário, -1 é retornado."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={findIndex1} />
          <FunctionBlock functionName="indexOf" itens={findIndexParam1} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{findIndexResult1}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
