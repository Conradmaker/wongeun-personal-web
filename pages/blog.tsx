import Layout from 'components/Layout/Layout';
import Incomplete from 'components/Result/Incomplete';
import React from 'react';

export default function blog(): JSX.Element {
  return (
    <Layout>
      <div className="inner">
        <Incomplete />
      </div>
    </Layout>
  );
}
