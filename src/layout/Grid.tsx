import styled, { css } from 'styled-components';

import { GridTemplateProps } from './types';

export const GridMobile = css`
    grid-template-areas:
        'header header header header'
        'navbar navbar navbar navbar'
        'content content content content'
        'content content content content'
        'footer footer footer footer';
    grid-row-gap: var(--spacing-sm);
    grid-column-gap: var(--spacing-sm);
`;

export const GridDesktop = css`
    grid-template-areas:
        'header navbar navbar navbar'
        'sidebar content content content'
        'sidebar content content content'
        'footer footer footer footer';
    grid-row-gap: var(--spacing-lg);
    grid-column-gap: var(--spacing-lg);
`;

export const Grid = styled.div<GridTemplateProps>`
    position: absolute;
    inset: 0;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: minmax(min-content, max-content);
    box-sizing: border-box;
    background-color: var(--gray-800);
    ${({ grid }) => (grid === GridDesktop ? GridDesktop : GridMobile)}
`;

export const GridArea = styled.div`
    position: relative;
    padding: var(--spacing-lg);
    //outline: dashed 1px var(--orange);
    //outline-offset: calc(var(--spacing-lg) * -1);
    background: var(--gray-200);
`;
