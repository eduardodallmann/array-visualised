'use client';

import { useEffect, useState } from 'react';

import Editor from '@monaco-editor/react';
import ReactModal from 'react-modal';

import { useModal } from '~/context/modal';

import { CloseModal } from './close';
import { Runner } from './runner';

export function Modal() {
  const { showingModal, code } = useModal();
  const [currentCode, setCurrentCode] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCurrentCode(code);
  }, [code]);

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={showingModal}
      contentLabel="Minimal Modal Example"
      className="absolute top-10 left-10 right-10 bottom-10 bg-white p-4 rounded-md shadow-md"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm"
    >
      <CloseModal />
      <Editor
        height="50%"
        defaultLanguage="javascript"
        defaultValue={currentCode}
        onChange={setCurrentCode}
        options={{
          minimap: { enabled: false },
          scrollbar: {},
        }}
      />
      <Runner code={currentCode} />
    </ReactModal>
  );
}
