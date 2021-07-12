import React from 'react';
import { WorkTitleSection } from './styles';
import PageTitle from 'components/Typography/PageTitle';
import ScrollDown from 'components/Button/ScrollDown';

export default function WorkTitle(): JSX.Element {
  return (
    <WorkTitleSection>
      <div className="inner page__section">
        <PageTitle width={600} height={200}>
          <p>Wongeun</p>
          <h1>
            <em>P</em>ortfolio
          </h1>
          <h2>
            Introducing my projects!
            <br />
            Thank you
          </h2>
        </PageTitle>
        <ScrollDown />
      </div>
    </WorkTitleSection>
  );
}
