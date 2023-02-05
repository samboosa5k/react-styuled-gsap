import { css } from 'styled-components';

export const spacing = css`
    --spacing-sm: 0.2em;
    --spacing-md: 0.3em;
    --spacing-lg: 0.4em;
    --spacing-xl: 0.5em;
    --spacing-2xl: 1em;
`;

export const borders = css`
    --round-sm: 0.2em;
    --round-md: 0.3em;
    --round-lg: 0.4em;
    --round-xl: 0.5em;
    --round-2xl: 1em;
`;

// Shameless rip of Bootstrap v5.1.3 variables
// ( Used by www.kde.org )
/**
 * var
 */
export const colors = css`
    --blue: #0d6efd;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #d63384;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #198754;
    --teal: #20c997;
    --cyan: #0dcaf0;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
    --primary: #54a3d8;
    --secondary: #6c757d;
    --success: #198754;
    --info: #0dcaf0;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #212529;
    --primary-rgb: 84, 163, 216;
    --secondary-rgb: 108, 117, 125;
    --success-rgb: 25, 135, 84;
    --info-rgb: 13, 202, 240;
    --warning-rgb: 255, 193, 7;
    --danger-rgb: 220, 53, 69;
    --light-rgb: 248, 249, 250;
    --dark-rgb: 33, 37, 41;
    --white-rgb: 255, 255, 255;
    --black-rgb: 0, 0, 0;
    --body-color-rgb: 35, 38, 41;
    --body-bg-rgb: 252, 252, 252;
    --gradient: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0)
    );
    --body-color: #232629;
    --body-bg: #fcfcfc;
`;

export const typography = css`
    --font-family-sans-serif: 'Noto Sans', -apple-system, BlinkMacSystemFont,
        'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
        'Courier New', monospace;
    --body-font-family: var(--font-family-sans-serif);
    --body-font-size: 1rem;
    --body-font-weight: 400;
    --body-line-height: 1.5;

    // TODO: this needs to be organized properly
    --font-size-h1: 3em;
    --font-size-h2: 2.5em;
    --font-size-h3: 2em;
    --font-size-h4: 1.5em;
    --font-size-h5: 1.25em;

    --font-margin-default: 0 0;
`;
