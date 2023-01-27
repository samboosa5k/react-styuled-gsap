import { AppContainerProps, ContainerProps } from '@layout/types';

import { GridArea } from '@/layout/GridAreas';

import { GridDesktop, GridLayout } from './Grid';

export const Header = ({ children }: ContainerProps) => (
    <GridArea area={'header'}>{children}</GridArea>
);
export const Navbar = ({ children }: ContainerProps) => (
    <GridArea area={'header'}>{children}</GridArea>
);
export const Content = ({ children }: ContainerProps) => (
    <GridArea area={'header'}>{children}</GridArea>
);
export const Sidebar = ({ children }: ContainerProps) => (
    <GridArea area={'header'}>{children}</GridArea>
);

export type AppContainerChildType =
    | typeof Header
    | typeof Navbar
    | typeof Content
    | typeof Sidebar;

export const AppContainer = ({ children }: AppContainerProps) => {
    return <GridLayout grid={GridDesktop}>{children}</GridLayout>;
};

AppContainer.Header = Header;
AppContainer.Navbar = Navbar;
AppContainer.Content = Content;
AppContainer.Sidebar = Sidebar;

export default AppContainer;
