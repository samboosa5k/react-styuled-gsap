import { GridTemplate, GridTemplateProps } from '@layout/types';

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

export const GridBase = styled.div<GridTemplate>`
    position: absolute;
    inset: 0;
    display: grid;
    background-color: var(--gray-dark);
    ${({ grid }) => (grid === GridDesktop ? GridDesktop : GridMobile)}
`;

export const GridLayout = styled((props: GridTemplateProps) => (
    <GridBase grid={props.grid}>{props.children}</GridBase>
))``;
