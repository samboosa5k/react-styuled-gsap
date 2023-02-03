import styled from 'styled-components';

import { ContainerProps } from '@layout/types';

const StyledNavbar = styled.header`
    grid-area: navbar;
    background-color: var(--teal);
`;

export const Navbar = ({ children }: ContainerProps) => {
    return (
        <StyledNavbar className={`app-grid-navbar`}>{children}</StyledNavbar>
    );
};
