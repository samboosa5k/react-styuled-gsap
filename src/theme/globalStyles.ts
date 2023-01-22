import { ThemeProps } from '@/theme';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<ThemeProps>`
    @font-face {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    // Shameless rip of Bootstrap v5.1.3 variables
    body {

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        --text-color: #232629;
        --background-color: #fcfcfc;
        --background-color-transparent: rgb(252, 252, 252, 0.8);

        font-family: var(--body-font-family);
        font-size: var(--body-font-size);
        font-weight: var(--body-font-weight);
        line-height: var(--body-line-height);
        color: var(--body-color);
        text-align: var(--body-text-align);
        background-color: var(--body-bg);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent
    }
    
    ${(props: ThemeProps) => (props?.borders ? props.borders : '')} 
    ${(props: ThemeProps) => (props?.colors ? props.colors : '')} 
    ${(props: ThemeProps) => (props?.spacing ? props.spacing : '')} 
    ${(props: ThemeProps) => (props?.typography ? props.typography : '')} 
`;