'use client';

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';

export const ModalContext = createContext<{
  code: string;
  showingModal: boolean;
  handleCloseModal: () => void;
  showCode: (code: string) => void;
}>({
  code: '',
  showingModal: false,
  handleCloseModal: () => {},
  showCode: () => {},
});

export function ModalProvider({ children }: PropsWithChildren) {
  const [code, setCode] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const showCode = (code: string) => {
    setCode(code);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ showingModal: showModal, code, showCode, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
