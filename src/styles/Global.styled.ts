import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    margin: 0;
    min-width: 360px;
    font-family: "Poppins", sans-serif;
    background-color: ${theme.colors.primary};
    }

`