import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import MainTitle from 'components/Main/Title';
import Skills from 'components/Main/Skills';
import Profile from 'components/Main/Profile';
import ScrollIndicator from 'components/Layout/ScrollIndicator';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <ScrollIndicator />
      <Head>
        <title>ABOUT ME</title>
      </Head>
      <MainTitle />
      <Profile />
      <Skills />
    </Layout>
  );
}
