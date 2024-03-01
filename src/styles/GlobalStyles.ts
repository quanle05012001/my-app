import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif; // Replace
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    }

    *, *::before, *::after {
    box-sizing: border-box;
    }
`;

export default GlobalStyles;
