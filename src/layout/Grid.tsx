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

export const GridBase = styled.div`
    position: absolute;
    inset: 0;
    display: grid;
`;
