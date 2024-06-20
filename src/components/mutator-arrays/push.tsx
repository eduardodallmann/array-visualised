import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Arrow } from '../commons/icons/arrow';
import { Colors, type FunctionBlockType } from '../commons/types';

const push1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.orange },
];
const pushParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.green },
];
const pushResult1: Array<FunctionBlockType> = [...push1];
pushResult1.push(...pushParam1);

const push2 = [...push1];
const pushParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.blue },
];
const pushResult2: Array<FunctionBlockType> = [...push1];
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
