import styled from 'styled-components';

import { ContainerProps } from '@layout/types';

const StyledContent = styled.main`
    grid-area: content;
    background-color: var(--gray-200);
`;

export const Content = ({ children }: ContainerProps) => {
    return (
        <StyledContent className={`app-grid-content`}>{children}</StyledContent>
    );
};
