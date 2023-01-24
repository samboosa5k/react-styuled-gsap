import { ReactNode } from 'react';

import styled from 'styled-components';

type GridAreaType = {
    area: 'header' | 'content' | 'navbar' | 'content' | 'footer' | 'sidebar';
    children?: ReactNode;
};

const GridAreaElement = styled.div<GridAreaType>`
    grid-area: ${({ area }) => area};
    background-color: var(--teal);
`;

export const GridArea = styled((props: GridAreaType) => {
    return (
        <GridAreaElement area={props.area}>{props.children}</GridAreaElement>
    );
})``;

export default GridArea;
