import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { FunctionIcon } from '../commons/icons/function-icon';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const resultado = array1.reduceRight((acumulador, valorAtual) =>
  acumulador.concat(valorAtual),
);

console.log(resultado);
// Saída esperada: 4, 5, 2, 3, 0, 1
`;

const array1 = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.green },
];
const array2 = [
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.purple },
];
const reduceRight1: Array<FunctionBlockType> = [
  {
    id: crypto.randomUUID(),
    element: <ArrayBlock itens={array1} />,
  },
  {
    id: crypto.randomUUID(),
    element: <ArrayBlock itens={array2} />,
  },
];
const reduceRightParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: <FunctionIcon /> },
];
const reduceRightResult1 = [array1, array2].reduceRight<
  Array<FunctionBlockType>
>((acc, item) => acc.concat(item), []);

export function ReduceRight() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="ReduceRight: Cria um novo array com os resultados da chamada de uma função para cada elemento do array."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={reduceRight1} />
          <FunctionBlock functionName="reduceRight" itens={reduceRightParam1} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={reduceRightResult1} />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
