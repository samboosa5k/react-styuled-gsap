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
        'sidebar content content rightbar'
        'sidebar content content rightbar'
        'footer footer footer footer';
    //grid-row-gap: var(--spacing-lg);
    //grid-column-gap: var(--spacing-lg);
    grid-row-gap: 0;
    grid-column-gap: 0;
`;

export const Grid = styled.div<GridTemplateProps>`
    position: relative;
    //inset: 0;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    // grid-auto-rows: minmax(0, 1fr);
    box-sizing: border-box;
    background-color: var(--gray-800);
    ${({ grid }) => (grid === GridDesktop ? GridDesktop : GridMobile)}
`;

export const GridArea = styled.div`
    position: relative;
    padding: var(--spacing-lg);
    background: var(--gray-200);
`;
