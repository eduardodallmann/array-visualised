import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Saída esperada: a, b, c, d, e, f
`;

const concat1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
];
const concatArrayParam1 = [
  { id: crypto.randomUUID(), color: Colors.red },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.yellow },
];
const concatParam1: Array<FunctionBlockType> = [
  {
    id: crypto.randomUUID(),
    element: <ArrayBlock itens={concatArrayParam1} />,
  },
];
const concatResult1: Array<FunctionBlockType> =
  concat1.concat(concatArrayParam1);

export function Concat() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Concat: Retorna um novo array contendo todos os arrays ou valores passados como argumento."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={concat1} />
          <FunctionBlock functionName="concat" itens={concatParam1} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={concatResult1} />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
