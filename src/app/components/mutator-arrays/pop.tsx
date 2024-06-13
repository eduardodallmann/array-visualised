import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Colors } from '../commons/circle.types';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';

const pop1 = [
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
      <ExampleWrapper
        explanation="Pop: Remove o último elemento do array e retorna o item removido."
        left={
          <ArrayFunctionBlockWrapper>
            <ArrayBlock itens={pop1} />
            <FunctionBlock functionName="pop" itens={[]} />
          </ArrayFunctionBlockWrapper>
        }
        right={<ArrayBlock itens={popResult1} />}
      />
    </>
  );
}
