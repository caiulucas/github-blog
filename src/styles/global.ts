import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
  }
    
  body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme['base-title']};
  }

  a {
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-left: 0.5rem;
      width: 0.75rem;
    }
  }
`;
