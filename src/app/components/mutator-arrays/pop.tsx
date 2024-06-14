import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Arrow } from '../commons/arrow';
import { Colors, type CircleType } from '../commons/circle.types';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';

const pop1: Array<CircleType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
  { id: crypto.randomUUID(), color: Colors.green },
];
const popResult1 = [...pop1];
popResult1.pop();

export function Pop() {
  return (
    <>
      <ExampleWrapper explanation="Pop: Remove o último elemento do array e retorna o item removido.">
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={pop1} showBreak />
          <FunctionBlock functionName="pop" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={popResult1} />
      </ExampleWrapper>
    </>
  );
}
