import styled from 'styled-components';

import { ContainerProps } from '@/layout/types';

import { GridArea } from './Grid';

const StyledNavbar = styled(GridArea)`
    grid-area: navbar;
`;

export const Navbar = ({ children }: ContainerProps) => {
    return (
        <StyledNavbar as="nav" className={`app-grid-navbar`}>
            {children}
        </StyledNavbar>
    );
};
