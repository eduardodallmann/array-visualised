import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Arrow } from '../commons/arrow';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const copyWithin1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
];
const copyWithinParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '0' },
  { id: crypto.randomUUID(), element: '3' },
  { id: crypto.randomUUID(), element: '4' },
];
const copyWithinResult1: Array<FunctionBlockType> = [...copyWithin1];
copyWithinResult1.copyWithin(0, 3, 4);

const copyWithin2 = [...copyWithin1];
const pushParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '1' },
  { id: crypto.randomUUID(), element: '3' },
];
const copyWithinResult2: Array<FunctionBlockType> = [...copyWithin1];
copyWithinResult2.copyWithin(1, 3);

export function CopyWithin() {
  return (
    <>
      <ExampleWrapper explanation="CopyWithin: Copia uma sequência de elementos do array para outra posição dentro do mesmo array.">
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={copyWithin1} showBreak />
          <FunctionBlock functionName="copyWithin" itens={copyWithinParam1} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={copyWithinResult1} />
      </ExampleWrapper>
      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={copyWithin2} showBreak />
          <FunctionBlock functionName="copyWithin" itens={pushParam2} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={copyWithinResult2} />
      </ExampleWrapper>
    </>
  );
}
