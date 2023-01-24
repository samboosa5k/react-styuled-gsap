import { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export const GridMobile = css`
    grid-template-areas:
        'header header header navicon'
        'content content content content'
        'content content content content'
        'footer footer footer footer';
`;

export const GridDesktop = css`
    grid-template-areas:
        'header navbar navbar navicon'
        'subnav subnav subnav search'
        'sidebar content content content'
        'sidebar content content content'
        'footer footer footer footer';
`;

export type GridTypes = typeof GridDesktop | typeof GridMobile;

export interface GridProps {
    grid: GridTypes;
    children?: ReactNode;
}

export const GridBase = styled.div<GridProps>`
    position: absolute;
    inset: 0;
    display: grid;
    background-color: var(--gray-dark);
    ${({ grid }) => (grid === GridDesktop ? GridDesktop : GridMobile)}
`;

export const GridLayout = styled((props: GridProps) => (
    <GridBase grid={props.grid}>{props.children}</GridBase>
))``;
