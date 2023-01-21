import { useId, useMemo } from 'react';
import { GenericDataObject, GenericGuard, GenericValue } from '../../@types';

/**
 * MapperProps --> Interface to deal with the reusable <Mapper>
 * component. TS will show errors when an item in the array of data does not
 * match the structure of the "model" required by the component-prop.
 */
interface MapperProps {
    model: GenericDataObject<GenericValue>;
    data: Array<MapperProps['model']>;
    Comp: <T extends MapperProps['model']>(props: T) => JSX.Element;
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
    const isProperData = useMemo(() => {
        return GenericGuard<typeof model>(data[0]);
    }, [model]);

    if (!isProperData) {
        return null;
    } else {
        return (
            <>
                {data &&
                    data.map((item: MapperProps['model'], idx: number) => (
                        <Comp key={`mapped_${idx}_${uniq}`} {...item} />
                    ))}
            </>
        );
    }
};
