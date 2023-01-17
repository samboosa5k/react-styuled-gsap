import styled, { css, StyledComponent } from 'styled-components';

type LayoutElementType = StyledComponent<
    'div',
    any,
    { id: 'page-parent-layout' },
    'id'
>;

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

type LayoutProps = typeof GridDesktop | typeof GridMobile;
export const Layout: LayoutElementType = styled.div.attrs(() => ({
    id: 'page-parent-layout',
}))`
    position: absolute;
    inset: 0;
    display: grid;
`;

export const GridLayout = styled(Layout)<LayoutProps>`
    ${(props: LayoutProps) => props}
`;

export default GridLayout;
