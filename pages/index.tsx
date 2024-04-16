import { FC, FormEventHandler, useEffect } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import {
  useContractSWR,
  useSTETHContractRPC,
  useLidoSWR,
} from '@lido-sdk/react';
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';

import Wallet from 'components/wallet';
import Layout from 'components/layout';
import Faq from 'components/faq';
import { standardFetcher } from 'utils';
import { FAQItem, getFaqList } from 'utils/faqList';
import GradientBanner from 'components/gradientBanner';
import ComingSoon from '@/components/comingSoon';
import Networks from '@/components/networks';
import HowItWorks from '@/components/howItWorks';
import LidoDAO from '@/components/lidoDAO';
import NotificationBot from '@/components/notificationBot';
import Ecosystem from '@/components/ecosystem';
import Audits from '@/components/audits';
import Validators from '@/components/validators';
import BlogPosts from '@/components/blogPosts';
import Community from '@/components/community';
import Subscribe from '@/components/subscribe';

interface HomeProps {
  faqList: FAQItem[];
}

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

const Home: FC<HomeProps> = ({ faqList }) => {
  useEffect(() => {
    const matomoSomeEvent: MatomoEventType = [
      'Lido_Frontend_Template',
      'Mount index component',
      'mount_index_component',
    ];

    trackEvent(...matomoSomeEvent);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event,
  ) => {
    event.preventDefault();
    alert('Submitted');
  };

  const contractRpc = useSTETHContractRPC();
  const tokenName = useContractSWR({
    contract: contractRpc,
    method: 'name',
  });

  const { data } = useLidoSWR<number>('/api/oneinch-rate', standardFetcher);
  const oneInchRate = data ? (100 - (1 / data) * 100).toFixed(2) : 1;

  return (
    <>
      <GradientBanner />
      <Layout>
        <Head>
          <title>Lido - Liquid Staking for Digital Tokens</title>
        </Head>
        <ComingSoon />
        <Networks />
        <HowItWorks />
        <LidoDAO />
        <NotificationBot />
        <Ecosystem />
        <Audits />
        <Validators />
        <BlogPosts />
        <Community />
        <Subscribe />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    faqList: await getFaqList(['lido-frontend-template']),
  },
});
