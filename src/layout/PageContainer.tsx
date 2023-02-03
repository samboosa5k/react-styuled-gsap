import { Grid, GridDesktop } from './Grid';
import { ContainerProps } from './types';

const PageContainer = ({ children }: ContainerProps) => {
    return <Grid grid={GridDesktop}>{children}</Grid>;
};

export { PageContainer as AppLayout, PageContainer };
