import ResumeLayout from 'components/Layout/ResumeLayout';
import Profile from 'components/Resume/Profile';
import Skills from 'components/Resume/Skills';
import Summary from 'components/Resume/Summary';
import Title from 'components/Resume/Title';
import Works from 'components/Resume/Works';
import Head from 'next/head';
import React from 'react';

export default function resume(): JSX.Element {
  return (
    <ResumeLayout>
      <Head>
        <title>Wongeun Yoo</title>
      </Head>
      <Title />
      <Profile />
      <Skills />
      <Summary />
      <Works />
    </ResumeLayout>
  );
}
