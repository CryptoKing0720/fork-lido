import React from 'react';
import styled from 'styled-components';
import { memo } from 'react';

const StyledClose = styled.svg`
  flex-shrink: 0;
`;

export const Close = React.forwardRef(function Close() {
  return (
    <StyledClose
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L1 9"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1L9 9"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledClose>
  );
});

const Icon = memo((props) => {
  const { className = '', name, height = 44, width = 88 } = props;
  return (
    <svg className={`${className}`} height={height} width={width}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
});

export default Icon;
