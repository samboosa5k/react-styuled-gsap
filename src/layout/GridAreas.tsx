import { ReactNode } from 'react';

import styled from 'styled-components';

export type GridAreas =
    | 'header'
    | 'content'
    | 'navbar'
    | 'content'
    | 'footer'
    | 'sidebar';

export type GridAreaElementType = {
    children?: ReactNode;
    area: GridAreas;
};

const GridAreaElement = styled.div<GridAreaElementType>`
    grid-area: ${({ area }) => area};
    background-color: var(--teal);
`;

export const GridArea = styled(({ children, area }: GridAreaElementType) => {
    return (
        <>
            <GridAreaElement area={area}>{children}</GridAreaElement>
        </>
    );
})``;

export default GridArea;
