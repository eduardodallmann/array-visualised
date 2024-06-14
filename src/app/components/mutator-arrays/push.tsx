import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Arrow } from '../commons/arrow';
import { Colors } from '../commons/circle.types';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';

const push1 = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
];
const pushParam1 = [{ id: crypto.randomUUID(), color: Colors.green }];
const pushResult1 = [...push1];
pushResult1.push(...pushParam1);

const push2 = [...push1];
const pushParam2 = [
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.blue },
];
const pushResult2 = [...push1];
pushResult2.push(...pushParam2);

export function Push() {
  return (
    <>
      <ExampleWrapper explanation="Push: Adiciona um ou mais elementos ao final do array e retorna o novo comprimento.">
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={push1} showBreak />
          <FunctionBlock functionName="push" itens={pushParam1} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={pushResult1} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={push2} showBreak />
          <FunctionBlock functionName="push" itens={pushParam2} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={pushResult2} />
      </ExampleWrapper>
    </>
  );
}
