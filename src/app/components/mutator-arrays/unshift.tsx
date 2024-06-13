import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Colors } from '../commons/circle';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';

const unshift1 = [Colors.orange, Colors.orange, Colors.orange, Colors.orange];
const unshiftParam1 = [Colors.green];
const unshiftResult1 = [...unshift1];
unshiftResult1.unshift(...unshiftParam1);

const unshift2 = [...unshift1];
const unshiftParam2 = [Colors.green, Colors.blue];
const unshiftResult2 = [...unshift2];
unshiftResult2.unshift(...unshiftParam2);

export function Unshift() {
  return (
    <>
      <ExampleWrapper
        explanation="Unshift: Adiciona um ou mais elementos ao início do array e retorna o novo comprimento."
        left={
          <ArrayFunctionBlockWrapper>
            <ArrayBlock itens={unshift1} />
            <FunctionBlock functionName="unshift" itens={unshiftParam1} />
          </ArrayFunctionBlockWrapper>
        }
        right={<ArrayBlock itens={unshiftResult1} />}
      />

      <ExampleWrapper
        left={
          <ArrayFunctionBlockWrapper>
            <ArrayBlock itens={unshift2} />
            <FunctionBlock functionName="unshift" itens={unshiftParam2} />
          </ArrayFunctionBlockWrapper>
        }
        right={<ArrayBlock itens={unshiftResult2} />}
      />
    </>
  );
}
