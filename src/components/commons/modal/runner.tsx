/* eslint-disable no-console */
'use client';

import { useCallback, useState } from 'react';

export function Runner({ code = '' }: { code: string | undefined }) {
  const [output, setOutput] = useState<string | undefined>(undefined);

  const runCode = useCallback(() => {
    const logs: Array<string> = [];
    const originalConsoleLog = console.log;

    console.log = function (...args) {
      logs.push(
        `> ${args.map((e) => (Array.isArray(e) ? e.join(', ') : e)).join(' ')}`,
      );
      originalConsoleLog.apply(console, args);
    };

    try {
      eval(code);
      setOutput(logs.join('\n'));
      console.log = originalConsoleLog;
    } catch (error) {
      console.error(error);
      setOutput('Erro ao executar o código.');
    }
  }, [code]);

  return (
    <div className="flex gap-4 h-1/2">
      <button
        className="bg-gray-700 text-white px-4 py-2 h-10 rounded-md mt-4 hover:bg-gray-600"
        onClick={runCode}
      >
        {'Executar  >'}
      </button>
      <div className="flex-1 border-black rounded-md p-4 mt-4 overflow-y-auto bg-gray-100 whitespace-pre-line">
        {output}
      </div>
    </div>
  );
}
