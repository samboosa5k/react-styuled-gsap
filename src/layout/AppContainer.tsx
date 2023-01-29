import { GridDesktop, GridLayout } from './GridLayout';
import { Content, Header, Navbar, Sidebar } from './InterfaceBlocks';
import { ContainerProps } from './types';

export const AppContainer = ({ children }: ContainerProps) => {
    return <GridLayout grid={GridDesktop}>{children}</GridLayout>;
};

AppContainer.Header = Header;
AppContainer.Navbar = Navbar;
AppContainer.Content = Content;
AppContainer.Sidebar = Sidebar;

export default AppContainer;
