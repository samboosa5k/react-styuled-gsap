// import gsap from 'gsap';
import { FC, memo, useId, useRef } from 'react';

import { X as Child, X as Parent } from '@/utils/namedJSX';

import { Card } from '@/components';

interface ComponentListProps {
    dataArray: { [key: string]: unknown }[];
}

export const List: FC<ComponentListProps> = memo(function ListMemo({
    dataArray,
}: ComponentListProps) {
    const uniqueId = useId();
    return (
        <>
            {dataArray?.length &&
                dataArray.map(
                    (labelItem: { [key: string]: unknown }, idx: number) => (
                        <Child
                            as="li"
                            className={'random-class'}
                            key={`${uniqueId}-child-${idx}-X`}>
                            <Card {...labelItem} />
                        </Child>
                    )
                )}
        </>
    );
});

export const ComponentList: FC<ComponentListProps> = ({
    dataArray,
}): JSX.Element | null => {
    const parentRef = useRef<HTMLDivElement>();

    return (
        <Parent as="ul" refCallback={(pRef) => (parentRef.current = pRef)}>
            <List dataArray={dataArray} />
        </Parent>
    );
};
