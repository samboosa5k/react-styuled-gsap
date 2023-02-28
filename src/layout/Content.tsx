import styled from 'styled-components';

import { ContainerProps } from '@/layout/types';

import { GridArea } from './Grid';

const StyledContent = styled(GridArea)`
    grid-area: content;
`;

export const Content = ({ children }: ContainerProps) => {
    return (
        <StyledContent as="main" className={`app-grid-content`}>
            {children}
        </StyledContent>
    );
};
