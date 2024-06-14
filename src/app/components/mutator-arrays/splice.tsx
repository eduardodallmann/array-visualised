import { ArrayBlock } from '../commons/array-block';
import { ArrayFunctionBlockWrapper } from '../commons/array-function-block-wrapper';
import { Arrow } from '../commons/arrow';
import { Colors, type CircleType } from '../commons/circle.types';
import { ExampleWrapper } from '../commons/example-wrapper';
import {
  circleGuard,
  FunctionBlock,
  type FunctionBlockType,
} from '../commons/function-block';

const splice1: Array<CircleType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.red },
  { id: crypto.randomUUID(), color: Colors.green },
];
const newItem1 = { id: crypto.randomUUID(), color: Colors.blue };
const spliceParam1: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '1' },
  { id: crypto.randomUUID(), element: '0' },
  newItem1,
];
const spliceResult1: Array<FunctionBlockType> = [...splice1];
spliceResult1.splice(1, 0, newItem1);

const splice2 = [...splice1];
const newItem2a = { id: crypto.randomUUID(), color: Colors.blue };
const newItem2b = { id: crypto.randomUUID(), color: Colors.purple };
const spliceParam2: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '2' },
  { id: crypto.randomUUID(), element: '0' },
  newItem2a,
  newItem2b,
];
const spliceResult2: Array<FunctionBlockType> = [...splice1];
spliceResult2.splice(2, 0, ...spliceParam2);

const splice3: Array<CircleType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.red },
  { id: crypto.randomUUID(), color: Colors.green },
];
const spliceParam3: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '1' },
  { id: crypto.randomUUID(), element: '1' },
];
const spliceResult3: Array<FunctionBlockType> = [...splice3];
spliceResult3.splice(1, 1);

const splice4: Array<CircleType> = [
  { id: crypto.randomUUID(), color: Colors.orange },
  { id: crypto.randomUUID(), color: Colors.red },
  { id: crypto.randomUUID(), color: Colors.green },
  { id: crypto.randomUUID(), color: Colors.yellow },
];
const newItem4 = { id: crypto.randomUUID(), color: Colors.blue };
const spliceParam4: Array<FunctionBlockType> = [
  { id: crypto.randomUUID(), element: '1' },
  { id: crypto.randomUUID(), element: '1' },
  newItem4,
];
const spliceResult4: Array<FunctionBlockType> = [...splice4];
spliceResult4.splice(1, 1, newItem4);

export function Splice() {
  return (
    <>
      <ExampleWrapper explanation="Splice: Adiciona ou remove elementos de um array. O primeiro parâmetro é o índice no qual começar a alterar o array. (opcional) O segundo parâmetro indica o número de elementos do array a serem removidos a partir do índice. (opcional) Os próximos parâmetros serão inseridos no array. E retorna um array com os itens excluídos.">
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={splice1} showBreak />
          <FunctionBlock functionName="splice" itens={spliceParam1} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={spliceResult1.filter(circleGuard)} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={splice2} showBreak />
          <FunctionBlock functionName="splice" itens={spliceParam2} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={spliceResult2.filter(circleGuard)} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={splice3} showBreak />
          <FunctionBlock functionName="splice" itens={spliceParam3} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={spliceResult3.filter(circleGuard)} />
      </ExampleWrapper>

      <ExampleWrapper>
        <ArrayFunctionBlockWrapper>
          <ArrayBlock itens={splice4} showBreak />
          <FunctionBlock functionName="splice" itens={spliceParam4} />
        </ArrayFunctionBlockWrapper>
        <Arrow />
        <ArrayBlock itens={spliceResult4.filter(circleGuard)} />
      </ExampleWrapper>
    </>
  );
}
