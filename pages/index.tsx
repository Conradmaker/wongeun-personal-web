import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import MainTitle from 'components/Main/Title';
import Skills from 'components/Main/Skills';
import More from 'components/Main/More';
import Contact from 'components/Main/Contact';
import Profile from 'components/Main/Profile';
import ScrollIndicator from 'components/Layout/ScrollIndicator';
import { ScrollTopBtn } from 'components/Button/RoundBtn';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <ScrollTopBtn />
      <ScrollIndicator />
      <Head>
        <title>ABOUT ME</title>
      </Head>
      <MainTitle />
      <Profile />
      <Skills />
      <More />
      <Contact />
    </Layout>
  );
}
