import styled from 'styled-components';

import { ContainerProps } from '@layout/types';

const StyledHeader = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    background-color: var(--teal);
`;

export const Header = ({ children }: ContainerProps) => {
    return (
        <StyledHeader className={`app-grid-header`}>{children}</StyledHeader>
    );
};
