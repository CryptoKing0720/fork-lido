import styled from 'styled-components';

export const NavLinkStyle = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 10px;
  background-color: rgb(0, 163, 255);
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;
  user-select: none;
`;

export const TomatoLinkStyle = styled(NavLinkStyle)`
  color: tomato;
`;
