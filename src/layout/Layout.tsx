import { ContainerProps } from '@layout/types';

import { GridDesktop, GridLayout } from './Grid';
import { Content, Header, Navbar, Sidebar } from './GridItem';

export const AppContainer = ({ children }: ContainerProps) => {
    return <GridLayout grid={GridDesktop}>{children}</GridLayout>;
};

AppContainer.Header = Header;
AppContainer.Navbar = Navbar;
AppContainer.Content = Content;
AppContainer.Sidebar = Sidebar;

export default AppContainer;
