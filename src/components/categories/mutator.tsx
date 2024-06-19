import { CategoryDescription } from '../commons/category-description';
import { CategoryTitle } from '../commons/category-title';

export function MutatorCategory() {
  return (
    <div>
      <CategoryTitle>Mutator Methods (Métodos de Mutação)</CategoryTitle>
      <CategoryDescription>
        Os métodos de mutação são aqueles que alteram o próprio array no qual
        são chamados. Eles modificam o conteúdo do array, seja adicionando,
        removendo ou rearranjando elementos.
      </CategoryDescription>
    </div>
  );
}
