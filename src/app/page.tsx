import { MutatorCategory } from './components/categories/mutator';
import { PageTitle } from './components/commons/page-title';
import { MutatorArrays } from './components/mutator-arrays';

export default function Home() {
  return (
    <>
      <PageTitle />
      <MutatorCategory />
      <MutatorArrays />
    </>
  );
}
