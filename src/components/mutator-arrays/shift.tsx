import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Arrow } from '../commons/icons/arrow';
import { Colors } from '../commons/types';

const code = `const array1 = [1, 2, 3];

const primeiroElemento = array1.shift();

console.log(array1);
// Saída esperada: 2, 3

console.log(primeiroElemento);
// Saída esperada: 1
`;

const shift1 = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
  { id: crypto.randomUUID(), color: Colors.green },
];
const shiftResult1 = [...shift1];
shiftResult1.shift();

export function Shift() {
  return (
    <>
      <ExampleWrapper
        explanation="Shift: Remove o primeiro elemento do array e retorna o item removido."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={shift1} showBreak />
          <FunctionBlock functionName="shift" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={shiftResult1} />
      </ExampleWrapper>
    </>
  );
}
