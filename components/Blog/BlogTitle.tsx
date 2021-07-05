import React from 'react';
import PageTitle from 'components/Typography/PageTitle';
import { BlogTitleContainer } from './styles';

export default function BlogTitle(): JSX.Element {
  return (
    <BlogTitleContainer>
      <div className="inner page__section">
        <PageTitle height={180}>
          <p>Records make me grow</p>
          <h1>
            <em>C</em>onrad.
            <em>M</em>aker
          </h1>
        </PageTitle>
      </div>
    </BlogTitleContainer>
  );
}
