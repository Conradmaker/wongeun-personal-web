import Layout from 'components/Layout/Layout';
import Incomplete from 'components/Result/Incomplete';
import useGsap from 'hooks/useGsap';
import React from 'react';

export default function blog(): JSX.Element {
  const animationRef = useGsap({ duration: 1, options: { opacity: 1 } });
  return (
    <Layout>
      <div className="inner invisible" ref={animationRef}>
        <Incomplete />
      </div>
    </Layout>
  );
}
