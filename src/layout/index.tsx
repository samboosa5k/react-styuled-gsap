import { ReactNode } from 'react';

import { GridArea, GridAreaElementType } from '@/layout/GridAreas';

import { GridDesktop, GridLayout } from './Grid';

interface AppProps {
    children?: ReactNode;
}

// Parent Wrapper
export const AppContainer = ({ children }: AppProps) => {
    return <GridLayout grid={GridDesktop}>{children}</GridLayout>;
};

// UI grid elements
const UIBlock = ({ area, children }: GridAreaElementType) => {
    return <GridArea area={area}>{children}</GridArea>;
};

// Child props
const Header = (props: AppProps) => UIBlock({ area: 'header', ...props });

const Navbar = (props: AppProps) => UIBlock({ area: 'navbar', ...props });

const Content = (props: AppProps) => UIBlock({ area: 'content', ...props });

const Sidebar = (props: AppProps) => UIBlock({ area: 'sidebar', ...props });

AppContainer.Header = Header;
AppContainer.Navbar = Navbar;
AppContainer.Content = Content;
AppContainer.Sidebar = Sidebar;

export default AppContainer;
