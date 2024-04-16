import styled, { css } from 'styled-components';
import { ContainerSizes } from '@lidofinance/lido-ui';

const sizes = {
  full: css`
    max-width: 1360px;
  `,
  content: css`
    max-width: 960px;
  `,
  tight: css`
    max-width: 560px;
  `,
};

export const ContentWrapperStyle = styled.div<{ $size: ContainerSizes }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 320px;
  margin: auto;
  ${({ $size }) => sizes[$size]}
`;
