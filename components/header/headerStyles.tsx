import styled from 'styled-components';
import { Button, MainMenu, MainMenuItem } from '@lidofinance/lido-ui';
import { ContentWrapper } from '../contentWrapper';

export const HeaderStyle = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: transparent;
  z-index: 9999;
`;

export const HeaderActionsStyle = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const HeaderNavStyle = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 1279px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const HeaderMenuStyle = styled.div`
  @media (max-width: 1279px) {
    position: fixed;
    width: 100vw;
    inset: 80px 0px 0px;
    padding: 0px 32px;
    background-color: rgb(239, 242, 246);
    transform: translateY(calc(-100% - 80px));
    overflow: auto;
  }
  @media (max-width: 767px) {
    padding: 0px 20px;
  }
`;

export const HeaderImageStyle = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const HeaderButtonStyle = styled(Button)`
  display: none;
  width: 100%;
  background-color: rgb(20, 23, 26);
  @media (max-width: 1279px) {
    display: flex;
  }
  :hover {
    background-color: rgb(18, 37, 49);
  }
`;

export const HeaderLogoStyle = styled.div`
  width: 146px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
