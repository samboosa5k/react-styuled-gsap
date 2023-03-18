import {
    Grid,
    GridDesktop,
    /* GridDesktop */
    // GridMobile,
} from './Grid';
import { ContainerProps } from './types';

export const Page = ({ children }: ContainerProps) => {
    return (
        <Grid className="app-grid-page" grid={GridDesktop}>
            {children}
        </Grid>
    );
};
