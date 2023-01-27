import { GridDesktop, GridMobile } from '@layout/Grid';
import { AppContainerChildType } from '@layout/Layout';

import { ReactNode } from 'react';

type ChildType = ReactNode;
type ContainerProps = {
    children: ChildType;
};

type GridArea =
    | 'header'
    | 'content'
    | 'navbar'
    | 'content'
    | 'footer'
    | 'sidebar';

interface GridItemProps {
    area: GridArea;
}

interface GridAreaProps extends ContainerProps, GridItemProps {}

type GridType = typeof GridDesktop | typeof GridMobile;
interface GridTemplate {
    grid: GridType;
}
interface GridTemplateProps extends ContainerProps, GridTemplate {}

interface AppContainerProps {
    children: AppContainerChildType extends ChildType
        ? AppContainerChildType
        : ChildType;
}

export type {
    ChildType,
    ContainerProps,
    GridArea,
    GridItemProps,
    GridAreaProps,
    GridTemplateProps,
    GridTemplate,
    AppContainerProps,
};
