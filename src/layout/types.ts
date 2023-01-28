import { GridDesktop, GridMobile } from '@layout/Grid';

import { ReactNode } from 'react';

type ChildType = ReactNode;
type ContainerProps = {
    children: ChildType;
};

type GridAreaType =
    | 'header'
    | 'content'
    | 'navbar'
    | 'content'
    | 'footer'
    | 'sidebar';

interface GridItemProps {
    area: GridAreaType;
}

interface GridAreaProps extends ContainerProps, GridItemProps {
    className?: string;
}

type GridType = typeof GridDesktop | typeof GridMobile;
interface GridTemplate {
    grid: GridType;
}
interface GridTemplateProps extends ContainerProps, GridTemplate {}

export type {
    ChildType,
    ContainerProps,
    GridAreaType,
    GridItemProps,
    GridAreaProps,
    GridTemplateProps,
    GridTemplate,
};
