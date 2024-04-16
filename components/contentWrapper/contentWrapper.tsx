import { ForwardedRef, forwardRef } from 'react';
import { ContainerProps } from '@lidofinance/lido-ui';
import { ContentWrapperStyle } from './contentWrapperStyles';

export const ContentWrapper = forwardRef(
  (
    { size = 'full', ...rest }: ContainerProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return <ContentWrapperStyle $size={size} ref={ref} {...rest} />;
  },
);

ContentWrapper.displayName = 'ContentWrapper';
