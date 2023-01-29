import styled from 'styled-components';

import { ContainerProps, GridAreaProps, GridItemProps } from './types';

export const GridArea = styled.div<GridItemProps>`
    grid-area: ${({ area }) => area};
    background-color: var(--teal);
`;

export const InterfaceBlocks = styled(
    ({ area, children, className }: GridAreaProps) => {
        return (
            <GridArea className={className} area={area}>
                {children}
            </GridArea>
        );
    }
)``;

export const Header = ({ children }: ContainerProps) => (
    <InterfaceBlocks className={`app-grid-header`} area={'header'}>
        {children}
    </InterfaceBlocks>
);
export const Navbar = ({ children }: ContainerProps) => (
    <GridArea className={`app-grid-navbar`} area={'navbar'}>
        {children}
    </GridArea>
);
export const Content = ({ children }: ContainerProps) => (
    <GridArea className={`app-grid-content`} area={'content'}>
        {children}
    </GridArea>
);
export const Sidebar = ({ children }: ContainerProps) => (
    <GridArea className={`app-grid-sidebar`} area={'sidebar'}>
        {children}
    </GridArea>
);
