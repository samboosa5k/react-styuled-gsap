import { FC, ReactNode, useId, useMemo } from 'react';

import { GenericGuard } from '@/types';
import { GenericStringObject } from '@/types/generic';

/**
 * componentMapper - The one-size-fits "most" list generator:
 *
 * Array of data provided will have "incorrect" data filtered out
 * using a shallow comparison.
 *
 * @param  component  function that returns JSX and will map to the data array
 * @param model  object to which the data list will be compared
 * @param data list which will be fed to the input component
 * @returns { null | JSX.Element }
 */
export const componentMapper = <
    C extends FC<T>,
    T extends GenericStringObject,
    P extends T[]
>(
    component: C,
    model: T,
    data: P
): null | ReactNode => {
    const uniq = useId();
    const filteredData = useMemo(() => {
        return data.reduce((acc: [] | typeof model[], item) => {
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

    // If no data matches model <T>, return null
    if (!filteredData) {
        return null;
    } else {
        return (
            <>
                {filteredData.map((item: typeof model, idx: number) =>
                    component({ key: `mapped_${uniq}_${idx}`, ...item })
                )}
            </>
        );
    }
};
