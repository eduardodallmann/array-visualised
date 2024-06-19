import { AccessorArrays } from '~/components/accessor-arrays';
import { AccessorCategory } from '~/components/categories/accessor';
import { IterationCategory } from '~/components/categories/iteration';
import { MutatorCategory } from '~/components/categories/mutator';
import { OthersCategory } from '~/components/categories/others';
import { PageTitle } from '~/components/commons/page-title';
import { IterationArrays } from '~/components/iteration-arrays';
import { MutatorArrays } from '~/components/mutator-arrays';
import { OthersArrays } from '~/components/others-arrays';

export default function Home() {
  return (
    <>
      <PageTitle />
      <MutatorCategory />
      <MutatorArrays />

      <AccessorCategory />
      <AccessorArrays />

      <IterationCategory />
      <IterationArrays />

      <OthersCategory />
      <OthersArrays />
    </>
  );
}
