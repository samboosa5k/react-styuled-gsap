import { useId, useMemo } from 'react';

import { GenericObject } from '@/types/generic';

import {
    /*allDataValid,*/
    GenericGuard,
} from '../../types';

/**
 * MapperProps --> Interface to deal with the reusable <Mapper>
 * component. TS will show errors when an item in the array of data does not
 * match the structure of the "model" required by the component-prop.
 */
interface MapperProps {
    model: GenericObject;
    data: Array<MapperProps['model']>;
    Comp: <T extends any>(props: T) => JSX.Element;
}

/**
 * Mapper - The one-size-fits "most" list generator:
 * When React & Typescript work together to make magic happen
 * @param Comp
 * @param model
 * @param data
 * @constructor
 */
export const Mapper = ({ Comp, model, data }: MapperProps) => {
    const uniq = useId();
    // const isProperData = useMemo(() => {
    //     return allDataValid(model, data)
    // }, [data, model]);

    const filteredData = useMemo(() => {
        return data.reduce((acc: [] | typeof model[], item) => {
            console.log('generic guard --> typeof model', typeof model);
            console.log(
                'generic guard --> is item',
                GenericGuard<typeof model>(item)
            );
            if (!GenericGuard<typeof model>(item)) {
                return acc;
            } else {
                return [...acc, item];
            }
        }, []);
    }, [data, model]);

    if (!filteredData) {
        return null;
    } else {
        return (
            <>
                {filteredData.map((item: typeof model, idx: number) => (
                    <Comp key={`mapped_${idx}_${uniq}`} {...item} />
                ))}
            </>
        );
    }
};
