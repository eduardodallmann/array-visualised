import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleContainer } from '../commons/example-container';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const palavras = ['spray', 'elite', 'exuberante', 'destruição', 'presente'];

const resultado = palavras.filter((palavra) => palavra.length > 6);

console.log(resultado);
// Saída esperada: exuberante, destruição, presente
`;

const filter1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.orange },
];
const filterParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.green },
];
const filterResult1 = filter1.filter((item) => item.color === Colors.green);

export function Filter() {
  return (
    <ExampleContainer>
      <ExampleWrapper
        explanation="Filter: Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={filter1} />
          <FunctionBlock functionName="filter" itens={filterParam1} />
        </ArrayFunctionBlockWrapper>
        <ArrayBlock itens={filterResult1} />
      </ExampleWrapper>
    </ExampleContainer>
  );
}
