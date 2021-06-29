import React, { useCallback, useContext, useState, createContext } from 'react';

const ModalOpenContext = createContext<boolean | null>(null);
const SetModalOpenContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null);
const ToggleModalOpenContext = createContext<(() => void) | null>(null);

type ModalStateProviderProps = {
  children: React.ReactNode;
};
export default function GlobalModalStateProvider({
  children,
}: ModalStateProviderProps): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  const onToggleGlobalModal = useCallback(() => {
    setModalOpen(prev => !prev);
  }, []);

  return (
    <ModalOpenContext.Provider value={modalOpen}>
      <SetModalOpenContext.Provider value={setModalOpen}>
        <ToggleModalOpenContext.Provider value={onToggleGlobalModal}>
          {children}
        </ToggleModalOpenContext.Provider>
      </SetModalOpenContext.Provider>
    </ModalOpenContext.Provider>
  );
}

export const useModalOpenContext = (): boolean => {
  const context = useContext(ModalOpenContext);
  if (context === null) throw 'can not find ModalOpen context';
  return context;
};

export const useSetModalOpenContext = (): React.Dispatch<
  React.SetStateAction<boolean>
> => {
  const context = useContext(SetModalOpenContext);
  if (!context) throw 'can not find SetModalOpen context';
  return context;
};

export const useToggleModalContext = (): (() => void) => {
  const context = useContext(ToggleModalOpenContext);
  if (!context) throw 'can not find SetModalOpen context';
  return context;
};
