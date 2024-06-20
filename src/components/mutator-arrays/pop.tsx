import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { ExampleWrapper } from '../commons/example-wrapper';
import { FunctionBlock } from '../commons/function-block';
import { Arrow } from '../commons/icons/arrow';
import { Colors, type FunctionBlockType } from '../commons/types';

const code = `const plantas = ['brócolis', 'couve-flor', 'repolho', 'couve', 'tomate'];

console.log(plantas.pop());
// Saída esperada: tomate

console.log(plantas);
// Saída esperada: brócolis, couve-flor, repolho, couve

plantas.pop();

console.log(plantas);
// Saída esperada: brócolis, couve-flor, repolho
`;

const pop1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.purple },
  { id: crypto.randomUUID(), color: Colors.red },
  { id: crypto.randomUUID(), color: Colors.green },
];
const popResult1 = [...pop1];
popResult1.pop();

export function Pop() {
  return (
    <>
      <ExampleWrapper
        explanation="Pop: Remove o último elemento do array e retorna o item removido."
        code={code}
      >
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={pop1} showBreak />
          <FunctionBlock functionName="pop" itens={[]} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={popResult1} />
      </ExampleWrapper>
    </>
  );
}
