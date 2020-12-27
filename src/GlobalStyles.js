// Imports
import { createGlobalStyle } from "styled-components";

// These are the inherited values for light/dark theme.
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .Card-container {
    background-color: ${({theme}) => theme.body};
    transition: all 0.50s linear;
  }
  .Card-container h2 {
    color: ${({ theme }) => theme.text};
  }
  `
