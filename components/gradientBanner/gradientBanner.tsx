import { FC, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ArrowRight } from '@lidofinance/lido-ui';
import Icon, { Close } from '@/icons';

import { GradientPStyle } from './gradientBannerStyles';

const GradientLink = styled(Link)<{ $color: string }>`
  display: flex;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  background: ${({ $color }) => $color};
  color: rgb(255, 255, 255) !important;

  @media (max-width: 1199px) {
    padding: 10px 10px 10px 20px;
  }

  @media (max-width: 767px) {
    padding: 10px 10px 20px 20px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-grow: 1;
  margin-left: 24px;

  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px;
  }
`;

const StyledH2 = styled.h2`
  margin-right: 5px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;

  @media (max-width: 767px) {
    margin-right: 0px;
  }
`;

const StyledP = styled(GradientPStyle)`
  position: relative;
  font-size: 12px;
  line-height: 20px;
  margin: 0px;
  padding: 0px;
  @media (max-width: 1199px) {
    text-align: left;
  }
`;

const CloseBanner = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  cursor: pointer;
`;

const GradientBanner: FC = () => {
  const [click, setClick] = useState(true);
  const handleClose = (e) => {
    e.preventDefault();
    setClick(!click);
  };
  return click ? (
    <GradientLink
      $color="linear-gradient(
      89.98deg,
      rgb(27, 77, 203) -33.77%,
      rgb(83, 14, 196) 27.13%,
      rgb(65, 174, 253) 78.79%
    )"
      target="_blank"
      rel="noopener"
      href="https://blog.lido.fi/lido-on-scroll/"
      id="marketing-banner"
    >
      <StyledDiv>
        <StyledH2>Lido Meets Scroll: Bridge your wstETH to Scroll 📜.</StyledH2>
        <StyledP>
          Learn more
          <Icon name="arrow-link-v2" height={8} width={14} />
          {/* <ArrowRight height={8} width={14} /> */}
        </StyledP>
      </StyledDiv>
      <CloseBanner aria-label="Close banner" onClick={handleClose}>
        <Close />
      </CloseBanner>
    </GradientLink>
  ) : (
    <></>
  );
};

export default GradientBanner;
