import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import useGsap from 'hooks/useGsap';
import { ScrollTopBtn } from 'components/Button/RoundBtn';
import { useToggleModalContext } from 'hooks/ModalStateProvider';
import BlogTitle from 'components/Blog/BlogTitle';
import BlogList from 'components/Blog/BlogList';
import IframeModal from 'components/Modal/IframeModal';
import SearchBox from 'components/Blog/SearchBox';

export default function blog(): JSX.Element {
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState('');
  const toggleGlobalModal = useToggleModalContext();
  const animationRef = useGsap({ duration: 1, options: { opacity: 1 } });

  const openPostModal = useCallback((src: string) => {
    setCurrentPost(src);
    setPostModalOpen(true);
    toggleGlobalModal();
  }, []);

  const onClosePostModal = useCallback(() => {
    setPostModalOpen(false);
    toggleGlobalModal();
  }, []);

  return (
    <Layout>
      <ScrollTopBtn />
      <Head>
        <title>Conrad.maker</title>
      </Head>
      <div ref={animationRef} className="invisible">
        <BlogTitle />
        <SearchBox />
        <BlogList openPost={openPostModal} />
      </div>
      {postModalOpen && <IframeModal src={currentPost} onClose={onClosePostModal} />}
    </Layout>
  );
}
