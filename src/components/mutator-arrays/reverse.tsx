import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Arrow } from '../commons/icons/arrow';
import { Colors, type FunctionBlockType } from '../commons/types';

const reverse1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
];
const reverseResult1: Array<FunctionBlockType> = [...reverse1];
reverseResult1.reverse();

export function Reverse() {
  return (
    <>
      <ExampleWrapper explanation="Reverse: Inverte a ordem dos elementos no array.">
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={reverse1} showBreak />
          <FunctionBlock functionName="reverse" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={reverseResult1} />
      </ExampleWrapper>
    </>
  );
}
