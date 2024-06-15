import { CategoryDescription } from '../commons/category-description';
import { CategoryTitle } from '../commons/category-title';

export function AccessorCategory() {
  return (
    <div>
      <CategoryTitle>Accessor Methods (Métodos de Acesso)</CategoryTitle>
      <CategoryDescription>
        Os métodos de acesso retornam um novo valor ou representação do array
        sem alterar o array original. Eles são usados para extrair informações
        ou criar novos arrays baseados no original.
      </CategoryDescription>
    </div>
  );
}
