import gsap from 'gsap';

import { FC, useEffect, useId, useRef } from 'react';

import { X as Divvy, X } from '@/utils/namedJSX';

import { Card } from '@/components';

interface RefArrayItem extends HTMLDivElement {}

interface ComponentListProps {
    dataArray: any[];
}

export const ComponentList: FC<ComponentListProps> = ({ dataArray }) => {
    const uniqueId = useId();
    const refArray = useRef<RefArrayItem[]>([]);

    const refCallback = (elemRef: RefArrayItem, refArrayIndex: number) => {
        // refArray.current[refArrayIndex] = elemRef;
        console.log(refArrayIndex);
        refArray.current.push(elemRef);
        return elemRef;
    };

    useEffect(() => {
        if (refArray.current.length > 0) {
            gsap.from(refArray.current, 0.2, {
                x: -100,
                opacity: 0.5,
                scale: 0.9,
                stagger: 0.1,
            });
        }
    }, [refArray.current, dataArray]);

    return (
        <Divvy
            as="ul"
            key={`${uniqueId}-parent-X`}
            refCallback={(ref) => refCallback(ref, 0) && ref}>
            {dataArray?.length
                ? dataArray?.map((labelItem: any, idx: number) => (
                      <X
                          as="li"
                          key={`${uniqueId}-child-${idx}-X`}
                          refCallback={(childRef) =>
                              // refCallback(childRef, idx + 1)
                              (refArray.current[idx + 1] = childRef)
                          }>
                          <Card {...labelItem} />
                      </X>
                  ))
                : null}
        </Divvy>
    );
};
