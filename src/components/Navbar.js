import { css, keyframes } from '@emotion/react';
import { Link } from '@reach/router';
import React from 'react';

const spin = keyframes`
    to {
        transform: rotate(360deg); 
    }
`;

export const Navbar = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          display: inline-block; 
          animation: 1s ${spin} linear infinite
          &:hover {
            text-decoration: underline; 
          }
        `}
      >
        🧜🏽‍♀️
      </span>
    </header>
  );
};
