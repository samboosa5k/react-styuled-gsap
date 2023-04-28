import styled from 'styled-components';

import { ContainerProps } from './types';

import { GridArea } from './Grid';

const StyledContent = styled(GridArea)`
    grid-area: content;
    background-color: transparent;
`;

export const Content = ({ children }: ContainerProps) => {
    return (
        <StyledContent as="main" className={`app-grid-content`}>
            {children}
        </StyledContent>
    );
};
//