import styled from 'styled-components';

import { ContainerProps } from '@/layout/types';

import { GridArea } from './Grid';

const StyledSidebar = styled(GridArea)`
    grid-area: sidebar;
`;

export const Sidebar = ({ children }: ContainerProps) => {
    return (
        <StyledSidebar as="aside" className={`app-grid-sidebar`}>
            {children}
        </StyledSidebar>
    );
};
