import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from '@/theme';

export const GlobalStyle = createGlobalStyle<ThemeProps>`
    html {
        //  Global Theme Props
        ${(props: ThemeProps) =>
            `
        //  Borders
        ${(props?.borders && props.borders) || ''}
        
        //  Colors 
        ${(props?.colors && props.colors) || ''}
        
        //  Spacing
        ${(props?.spacing && props.spacing) || ''}
        
        //  Typography 
        ${(props?.typography && props.typography) || ''}
        `}
    }

    // Shameless rip of Bootstrap v5.1.3 variables
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: var(--body-font-family);
        font-size: var(--body-font-size);
        font-weight: var(--body-font-weight);
        line-height: var(--body-line-height);
        text-align: var(--body-text-align);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
            height: 100vh;
    
    }
    #root {
        height: 100%;
    }

    .app-grid-page {
            width:100%;
            height:100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    span {
        margin: var(--font-margin-default)
    }

    li {
        list-style-type: none;
    }
`;
