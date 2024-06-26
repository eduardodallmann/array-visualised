'use client';

import { useModal } from '~/context/modal';

export function CloseModal() {
  const { handleCloseModal } = useModal();

  return (
    <button
      className="absolute z-10 -right-3 -top-3 w-7 h-7 rounded-full border-white border-2 bg-white shadow-md flex justify-center items-center"
      onClick={handleCloseModal}
    >
      <svg viewBox="0 0 24 24" width="18px" height="18px">
        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
      </svg>
    </button>
  );
}
