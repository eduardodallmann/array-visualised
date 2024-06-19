import { CategoryDescription } from '../commons/category-description';
import { CategoryTitle } from '../commons/category-title';

export function OthersCategory() {
  return (
    <div>
      <CategoryTitle>Outros Métodos</CategoryTitle>
      <CategoryDescription>
        Estes métodos não se encaixam diretamente nas categorias anteriores
        porque eles oferecem funcionalidades auxiliares ou adicionais que não se
        focam diretamente em mutar, acessar ou iterar os elementos do array.
      </CategoryDescription>
    </div>
  );
}
