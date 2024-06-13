import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Colors } from '../commons/circle';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';

const pop1 = [Colors.orange, Colors.purple, Colors.red, Colors.green];
const popResult1 = [...pop1];
popResult1.pop();

export function Pop() {
  return (
    <>
      <ExampleWrapper
        explanation="Pop: Remove o último elemento do array e o retorna."
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
