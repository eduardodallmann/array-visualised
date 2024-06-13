import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Colors } from '../commons/circle.types';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';

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
        left={
          <ArrayFunctionBlockWrapper>
            <ArrayBlock itens={shift1} />
            <FunctionBlock functionName="shift" itens={[]} />
          </ArrayFunctionBlockWrapper>
        }
        right={<ArrayBlock itens={shiftResult1} />}
      />
    </>
  );
}
