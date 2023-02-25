import { useRef } from 'react';

import { X as Divvy, X } from '@/utils/namedJSX';

interface RefArrayItem extends HTMLDivElement {}

export const ComponentList = () => {
    const refArray = useRef<RefArrayItem[]>();
    const labels = ['label1', 'label2'];

    const refCallback = (elemRef: RefArrayItem, refArrayIndex?: number) => {
        if (!refArray?.current) {
            refArray.current = [];
            refArray.current[0] = elemRef;
        } else if (refArray.current && typeof refArrayIndex === 'number') {
            refArray.current[refArrayIndex] = elemRef;
        }
        return elemRef;
    };

    return (
        <Divvy
            as="ul"
            key="divvy-jsx"
            refCallback={(parentRef) => refCallback(parentRef, 0)}>
            {labels.map((labelItem: string, idx: number) => (
                <X
                    as="li"
                    key={`divvy-jsx-child-${idx}`}
                    refCallback={(childRef) => refCallback(childRef, idx + 1)}>
                    {labelItem}
                </X>
            ))}
        </Divvy>
    );
};
