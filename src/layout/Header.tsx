import styled from 'styled-components';

import { ContainerProps } from './types';

import { GridArea } from './Grid';

const StyledHeader = styled(GridArea)`
    grid-area: header;
    display: flex;
    flex-direction: row;
`;

export const Header = ({ children }: ContainerProps) => {
    return (
        <StyledHeader as="header" className={`app-grid-header`}>
            {children}
        </StyledHeader>
    );
};
