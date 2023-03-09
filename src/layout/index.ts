import { Content as CC } from './Content';
import { Header as HH } from './Header';
import { Navbar as NN } from './Navbar';
import { Page as PP } from './Page';
import { RightBar as RB, Sidebar as SS } from './Sidebar';

export namespace Layout {
    export const Page: typeof PP = PP;
    export const Header: typeof HH = HH;
    export const Content: typeof CC = CC;
    export const Sidebar: typeof SS = SS;
    export const RightBar: typeof RB = RB;
    export const Navbar: typeof NN = NN;
}

export default Layout;
