import { ForwardedRef, forwardRef } from 'react';
import { MainMenuItemProps } from '@lidofinance/lido-ui';
import { NavLinkStyle } from './navLinkStyles';

export const NavLink = forwardRef(
  (
    { icon, children, active, ...restProps }: MainMenuItemProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <TomatoLinkStyle ref={ref} active={Boolean(active)} {...restProps}>
        {icon}
        <span>{children}</span>
      </TomatoLinkStyle>
    );
  },
);

NavLink.displayName = 'NavLink';
