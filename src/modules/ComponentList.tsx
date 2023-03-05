//@ts-nocheck
import { FC, MutableRefObject, useEffect, useId, useRef } from 'react';

import { X as Divvy, X } from '@/utils/namedJSX';

import { Card } from '@/components';

interface RefArrayItem extends HTMLDivElement {}

interface ComponentListProps {
    dataArray: any[];
}

export const ComponentList: FC<ComponentListProps> = ({ dataArray }) => {
    const uniqueId = useId();
    const parentRef = useRef<RefArrayItem>();
    const refArray = useRef<RefArrayItem[]>([]);

    const refCallback = (refElem: MutableRefObject<any>, refIndex: number) => {
        refArray.current[refIndex] = refElem;
        return refElem;
    };

    //
    return (
        <>
            <Divvy
                as="ul"
                key={`${uniqueId}-parent-X`}
                refCallback={() => parentRef}>
                {dataArray?.length &&
                    refCallback &&
                    dataArray.map((labelItem: any, idx: number) => (
                        <X
                            as="li"
                            key={`${uniqueId}-child-${idx}-X`}
                            refCallback={(childRef) =>
                                refCallback(childRef, idx)
                            }>
                            <Card {...labelItem} />
                        </X>
                    ))}
            </Divvy>
        </>
    );
};
