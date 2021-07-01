import React, { useState } from 'react';
import { ScrollTopBtn } from 'components/Button/RoundBtn';
import Layout from 'components/Layout/Layout';
import ScrollIndicator from 'components/Layout/ScrollIndicator';
import EtcList from 'components/Work/EtcList';
import PrimaryWork from 'components/Work/PrimaryWork';
import WorkTitle from 'components/Work/Title';
import useChangeHeader from 'hooks/useChangeHeader';
import styled from 'styled-components';
import IframeModal from 'components/Modal/IframeModal';
import { useToggleModalContext } from 'hooks/ModalStateProvider';
import projectData from 'data/worksData';
import Head from 'next/head';

const WorkContainer = styled.div`
  section:nth-of-type(3) {
    background-color: ${({ theme }) => theme.background.initial};
    .inner {
      .content__header {
        flex-direction: row-reverse;
        .page__title {
          span {
            text-align: end;
          }
        }
      }
      .content__body {
        flex-direction: row-reverse;
        .img__wrapper {
          margin-left: 0px;
          margin-right: 50px;
        }
      }
    }
  }
`;

export default function Work(): JSX.Element {
  const [docModalOpen, setDocModalOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState('');
  const toggleGlobalModal = useToggleModalContext();
  useChangeHeader();

  const onOpenDocModal = (link: string) => {
    setCurrentDoc(link);
    setDocModalOpen(true);
    toggleGlobalModal();
  };

  const onCloseDocModal = () => {
    toggleGlobalModal();
    setDocModalOpen(false);
  };

  return (
    <Layout>
      <Head>
        <title>유원근 | 포트폴리오</title>
      </Head>
      <WorkContainer>
        <ScrollTopBtn />
        <ScrollIndicator />
        <WorkTitle />
        <PrimaryWork openDoc={onOpenDocModal} projectData={projectData.develoPic} />
        <PrimaryWork openDoc={onOpenDocModal} projectData={projectData.wikea} />
        <EtcList openDoc={onOpenDocModal} />
      </WorkContainer>
      {docModalOpen && <IframeModal src={currentDoc} onClose={onCloseDocModal} />}
    </Layout>
  );
}
