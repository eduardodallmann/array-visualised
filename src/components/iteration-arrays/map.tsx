import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array1 = [1, 4, 9, 16];

// Passa uma função para map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Saída esperada: 2, 8, 18, 32
`;

const map1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.blue },
];
const mapParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.purple },
];
const mapResult1 = map1.map(() => {
  return mapParam1[0];
});

export function Map() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Map: Cria um novo array com os resultados da chamada de uma função para cada elemento do array."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={map1} />
          <FunctionBlock functionName="map" itens={mapParam1} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={mapResult1} />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
