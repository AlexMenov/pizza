import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

const mainStyle = css`
  font-family: 'Noto Sans', Arial, sans-serif;
  color: #3B434E;
  font-weight: 500;
`;

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    ${mainStyle};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 500;
  }
  img {
    background-color: inherit;
  }

  .done {
    opacity: 1;
  }

  .process {
      img {
        animation: animateOpacity 0.8s ease-in-out infinite alternate;
    }
  }

  @keyframes animateOpacity {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

  .undone {
    opacity: 0.3;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }  
`;

