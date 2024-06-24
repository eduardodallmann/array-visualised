import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const animais = ['formiga', 'búfalo', 'camelo', 'pato', 'elefante'];

console.log(animais.slice(2));
// Saída esperada: camelo, pato, elefante

console.log(animais.slice(2, 4));
// Saída esperada: camelo, pato

console.log(animais.slice(1, 5));
// Saída esperada: búfalo, camelo, pato, elefante

console.log(animais.slice(-2));
// Saída esperada: pato, elefante

console.log(animais.slice(2, -1));
// Saída esperada: camelo, pato

console.log(animais.slice());
// Saída esperada: formiga, búfalo, camelo, pato, elefante
`;

const slice1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
];
const sliceParam1 = [{ id: crypto.randomUUID(), element: 2 }];
const sliceResult1: Array<FunctionBlockType> = slice1.slice(
  sliceParam1[0].element,
);

const slice2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
];
const sliceParam2 = [
  { id: crypto.randomUUID(), element: 2 },
  { id: crypto.randomUUID(), element: 4 },
];
const sliceResult2: Array<FunctionBlockType> = slice2.slice(
  sliceParam2[0].element,
  sliceParam2[1].element,
);

const slice3: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.blue },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
];
const sliceParam3 = [{ id: crypto.randomUUID(), element: -2 }];
const sliceResult3: Array<FunctionBlockType> = slice3.slice(
  sliceParam3[0].element,
);

export function Slice() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Slice: Retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={slice1} />
          <FunctionBlock functionName="slice" itens={sliceParam1} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={sliceResult1} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={slice2} />
          <FunctionBlock functionName="slice" itens={sliceParam2} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={sliceResult2} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={slice3} />
          <FunctionBlock functionName="slice" itens={sliceParam3} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={sliceResult3} />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
