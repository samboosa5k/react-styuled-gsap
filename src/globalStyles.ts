import { createGlobalStyle } from 'styled-components'
import { colors, spacing, typography, borders } from './styles'

export const GlobalStyle = createGlobalStyle`
    ${spacing}
    ${borders}
    ${colors}
    ${typography}

    @font-face {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    // Shameless rip of Bootstrap v5.1.3 variables
    // ( Used by www.kde.org )
    body {
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
`

export default GlobalStyle
