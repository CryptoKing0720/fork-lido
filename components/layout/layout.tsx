import { FC, PropsWithChildren } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import { LayoutMainStyle, LayoutDivStyle } from './layoutStyles';
import { LayoutProps } from './types';

const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { children } = props;

  return (
    <LayoutMainStyle as={`main`} size="full">
      <LayoutDivStyle>
        <Header />
        {children}
        <Footer />
      </LayoutDivStyle>
    </LayoutMainStyle>
  );
};

export default Layout;
