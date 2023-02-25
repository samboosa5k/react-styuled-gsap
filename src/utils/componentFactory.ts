import { ComponentPropsWithRef, FC } from 'react';

import { GenericStringObject } from '@/types/generic';

type P = GenericStringObject & ComponentPropsWithRef<any>;
type D = P[];
type C = FC<P>;

export const componentFactory = (comp: C) => (data: D) =>
    data.map((dataItem: P) => comp(dataItem));
