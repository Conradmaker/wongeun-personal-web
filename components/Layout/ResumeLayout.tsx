import ResumeScrollIndicator from 'components/Resume/ResumeScrollIndicator';
import { useModalOpenContext } from 'hooks/ModalStateProvider';
import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { ResumeLayoutContainer } from './styles';

const Global = createGlobalStyle<{ globalModalOpen: boolean }>`
${({ globalModalOpen }) =>
  globalModalOpen &&
  css`
    html {
      overflow: hidden;
    }
  `}
  @media (max-width: 770px) {
    body{
    position:static;
    top: 0;
    left: 0;
    right: 0;
  }
  }
`;

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const globalModalOpen = useModalOpenContext();
  return (
    <>
      <ResumeLayoutContainer>
        {globalModalOpen || <ResumeScrollIndicator />}
        <Global globalModalOpen={globalModalOpen} />
        {children}
      </ResumeLayoutContainer>
    </>
  );
}
