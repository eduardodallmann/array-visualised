import { CategoryDescription } from '../commons/category-description';
import { CategoryTitle } from '../commons/category-title';

export function IterationCategory() {
  return (
    <div>
      <CategoryTitle>Iteration Methods (Métodos de Iteração)</CategoryTitle>
      <CategoryDescription>
        Os métodos de iteração executam uma função fornecida em cada elemento do
        array, retornando valores baseados em cada iteração ou criando novos
        arrays. Eles permitem processar os elementos de um array de maneira
        funcional.
      </CategoryDescription>
    </div>
  );
}
