import { GridAreaProps, GridItemProps } from '@layout/types';

import styled from 'styled-components';

const GridItem = styled.div<GridItemProps>`
    grid-area: ${({ area }) => area};
    background-color: var(--teal);
`;

export const GridArea = styled(({ children, area }: GridAreaProps) => {
    return (
        <>
            <GridItem area={area}>{children}</GridItem>
        </>
    );
})``;

export default GridArea;
