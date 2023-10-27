import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { makeData } from '../utils/makeData';
import { QwikTable } from 'qwik-table';

export default component$(() => {
  const data = makeData(5000);
  const headers = Object.keys(data[0]).map((key) => ({ key, label: key }));
  return (
    <div>
      <QwikTable
        header={headers}
        data={makeData(5000) as any[]}
        title="Champions League"
        headerImg="/league.png"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'QWIK TABLE',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
