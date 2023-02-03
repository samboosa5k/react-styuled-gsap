import styled, { css } from 'styled-components';

import { GridTemplate, GridTemplateProps } from './types';

export const GridMobile = css`
    grid-template-areas:
        'header header header navicon'
        'content content content content'
        'content content content content'
        'footer footer footer footer';
`;

export const GridDesktop = css`
    grid-template-areas:
        'header navbar navbar navbar'
        'subnav subnav subnav search'
        'sidebar content content content'
        'sidebar content content content'
        'footer footer footer footer';
`;

const GridBase = styled.div<GridTemplate>`
    position: absolute;
    inset: 0;
    display: grid;
    background-color: var(--gray-dark);
    ${({ grid }) => (grid === GridDesktop ? GridDesktop : GridMobile)}
`;

export const Grid = styled((props: GridTemplateProps) => (
    <GridBase grid={props.grid}>{props.children}</GridBase>
))``;
