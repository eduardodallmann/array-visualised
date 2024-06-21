import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Colors } from '../commons/types';

const code = `const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Saída esperada: 5

console.log(array1);
// Saída esperada: 4, 5, 1, 2, 3
`;

const unshift1 = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
];
const unshiftParam1 = [{ id: crypto.randomUUID(), color: Colors.green }];
const unshiftResult1 = [...unshift1];
unshiftResult1.unshift(...unshiftParam1);

const unshift2 = [...unshift1];
const unshiftParam2 = [
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.blue },
];
const unshiftResult2 = [...unshift2];
unshiftResult2.unshift(...unshiftParam2);

export function Unshift() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Unshift: Adiciona um ou mais elementos ao início do array e retorna o novo comprimento."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={unshift1} />
          <FunctionBlock functionName="unshift" itens={unshiftParam1} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={unshiftResult1} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={unshift2} />
          <FunctionBlock functionName="unshift" itens={unshiftParam2} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={unshiftResult2} />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
