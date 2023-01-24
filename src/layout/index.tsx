import GridArea from '@/layout/GridAreas';

import { GridDesktop, GridLayout, GridProps } from './Grid';

interface AppProps extends GridProps {}

export const AppLayout = ({ children }: AppProps) => (
    <GridLayout grid={GridDesktop}>{children}</GridLayout>
);

AppLayout.Header = GridArea;
AppLayout.NavBar = GridArea;
AppLayout.Content = GridArea;
AppLayout.SideBar = GridArea;
AppLayout.Footer = GridArea;

export default AppLayout;
