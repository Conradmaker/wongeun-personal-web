import ScrollDown from 'components/Button/ScrollDown';
import PageTitle from 'components/Typography/PageTitle';
import React from 'react';
import { MainTitleContainer } from './styles';

export default function MainTitle(): JSX.Element {
  return (
    <MainTitleContainer>
      <div className="inner page__section">
        <div>
          <ScrollDown />
        </div>
        <PageTitle width={600} height={380}>
          <p>A Developer</p>
          <h1>
            <em>Y</em>oo
            <br />
            <em>W</em>on
            <em>g</em>eun
          </h1>
          <h2>
            Hello! I am the developer <br /> Wongeun Yoo.
          </h2>
        </PageTitle>
      </div>
    </MainTitleContainer>
  );
}
