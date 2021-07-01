import React from 'react';
import { WorkTitleSection } from './styles';
import PageTitle from 'components/Typography/PageTitle';

function ThumbnailItem(): JSX.Element {
  return (
    <li>
      <img
        src="https://image.freepik.com/free-vector/work-time-concept-website-template-landing-homepage-design-with-isometric-style-illustration_82472-636.jpg"
        alt=""
      />
      <a href="#developic">
        <span>Developic</span>
      </a>
    </li>
  );
}

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
            Hello! I am the developer <br /> Wongeun Yoo.
          </h2>
        </PageTitle>
        {/* <ul className="thumnail__list">
          <ThumbnailItem />
          <ThumbnailItem />
          <ThumbnailItem />
          <ThumbnailItem />
        </ul> */}
      </div>
    </WorkTitleSection>
  );
}
