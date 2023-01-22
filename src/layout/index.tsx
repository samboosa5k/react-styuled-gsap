import styled from 'styled-components';
import { GridBase, GridDesktop, GridMobile } from './Grid';

type GridTypes = typeof GridDesktop | typeof GridMobile;

interface LayoutProps {
    grid: GridTypes;
}
export const GridLayout = styled(GridBase)<LayoutProps>`
    ${(props: LayoutProps) => props?.grid || null}
`;

export { GridLayout as AppLayout };
