import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import type { FunctionBlockType } from '../commons/types';

const code = `const elementos = ['Fogo', 'Ar', 'Água'];

console.log(elementos.join());
// Saída esperada: "Fogo,Ar,Água"

console.log(elementos.join(''));
// Saída esperada: "FogoArÁgua"

console.log(elementos.join('-'));
// Saída esperada: "Fogo-Ar-Água"
`;

const join1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: 'A' },
  { id: crypto.randomUUID(), element: 'B' },
  { id: crypto.randomUUID(), element: 'C' },
];
const joinResult1 = join1.map((e) => e.element).join();

const join2: Array<FunctionBlockType> = [...join1];
const joinParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: "''" },
];
const concatResult2 = join2.map((e) => e.element).join('');

const join3: Array<FunctionBlockType> = [...join1];
const joinParam3: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '-' },
];
const concatResult3 = join3.map((e) => e.element).join('-');

export function Join() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Join: Junta todos os elementos de um array em uma string e retorna esta string."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={join1} showComma />
          <FunctionBlock functionName="join" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{joinResult1}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={join2} />
          <FunctionBlock functionName="join" itens={joinParam2} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{concatResult2}</ResultBlock>
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={join3} />
          <FunctionBlock functionName="join" itens={joinParam3} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{concatResult3}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
