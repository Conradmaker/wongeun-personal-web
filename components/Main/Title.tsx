import PageTitle from 'components/Typography/PageTitle';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MainTitleContainer } from './styles';

export default function MainTitle(): JSX.Element {
  return (
    <MainTitleContainer>
      <div className="inner page__section">
        <div>
          <ul>
            <li>
              <a target="about:blank" href="/resume">
                Portfolio <IoIosArrowForward />
              </a>
            </li>
            <Link href="/blog">
              <li>
                <a href="@">
                  Blog <IoIosArrowForward />
                </a>
              </li>
            </Link>
            <li>
              <a href="#contact">
                Contact <IoIosArrowForward />
              </a>
            </li>
          </ul>
        </div>
        <PageTitle width={600} height={380}>
          <p>A Front-End Developer</p>
          <h1>
            <em>Y</em>oo
            <br />
            <em>W</em>on
            <em>g</em>eun
          </h1>
          <h2>
            Not only Front-End,
            <br />
            But also Back-End, Design
          </h2>
        </PageTitle>
      </div>
    </MainTitleContainer>
  );
}
