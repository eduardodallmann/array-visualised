import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { ResultBlock } from '../commons/result-block';
import type { FunctionBlockType } from '../commons/types';

const code = `const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('pt-BR', { timeZone: 'UTC' });

console.log(localeString);
// Saída esperada: "1,a,21/12/1997, 14:12:00",
// Isso assume o fuso horário UTC - seus resultados podem variar
`;

const toString1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '1' },
  { id: crypto.randomUUID(), element: 'a' },
  { id: crypto.randomUUID(), element: 'new Date()' },
];
const toStringResult1 = [1, 'a', new Date()].toLocaleString();

// TODO
export function ToLocaleString() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="ToLocaleString: Retorna uma string representando os elementos do array, convertidos em strings usando seus próprios métodos 'toLocaleString'."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={toString1} showComma />
          <FunctionBlock functionName="toLocaleString" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <ResultBlock>{toStringResult1}</ResultBlock>
      </ExampleWrapper>
    </ExampleContainer>
  );
}
