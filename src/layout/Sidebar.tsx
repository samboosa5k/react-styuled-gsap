import styled from 'styled-components';

import { ContainerProps } from '@layout/types';

const StyledSidebar = styled.aside`
    grid-area: sidebar;
    background-color: var(--teal);
`;

export const Sidebar = ({ children }: ContainerProps) => {
    return (
        <StyledSidebar className={`app-grid-sidebar`}>{children}</StyledSidebar>
    );
};
