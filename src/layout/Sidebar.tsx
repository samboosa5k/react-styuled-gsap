import styled from 'styled-components';

import { ContainerProps } from '@/layout/types';

import { GridArea } from './Grid';

const StyledSidebar = styled(GridArea)`
    grid-area: sidebar;
    visibility: hidden;
`;

const StyledRightBar = styled(StyledSidebar)`
    grid-area: rightbar;
`;

export const Sidebar = ({ children }: ContainerProps) => {
    return (
        <StyledSidebar as="aside" className={`app-grid-sidebar`}>
            {children}
        </StyledSidebar>
    );
};

export const RightBar = ({ children }: ContainerProps) => {
    return (
        <StyledRightBar as="div" className={`app-grid-rightbar`}>
            {children}
        </StyledRightBar>
    );
};
