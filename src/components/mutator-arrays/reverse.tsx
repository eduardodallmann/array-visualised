import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const array1 = ['um', 'dois', 'três'];
console.log('array1:', array1);
// Saída esperada: array1: um, dois, três

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Saída esperada: reversed: três, dois, um

// Cuidado: reverse é destrutivo -- ele muda o array original.
console.log('array1:', array1);
// Saída esperada: array1: três, dois, um
`;

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
    <ExampleContainer>
      <ExampleWrapper
        explanation="Reverse: Inverte a ordem dos elementos no array."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={reverse1} />
          <FunctionBlock functionName="reverse" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={reverseResult1} />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
