// import gsap from 'gsap';
import { FC, memo, useCallback, useId, useRef } from 'react';

import { X as Child, X as Parent } from '@/utils/namedJSX';

import { Card } from '@/components';

interface ComponentListProps {
    dataArray: { [key: string]: unknown }[];
}

interface ListProps extends ComponentListProps {
    refCallback?: (el: HTMLDivElement) => void;
}
export const List: FC<ListProps> = memo(function ListMemo({
    dataArray,
    refCallback,
}) {
    const uniqueId = useId();
    return (
        <>
            {dataArray?.length &&
                dataArray.map(
                    (labelItem: { [key: string]: unknown }, idx: number) => (
                        <Child
                            as="li"
                            className={'random-class'}
                            refCallback={(ref) =>
                                refCallback && refCallback(ref)
                            }
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
    const childrenRefs = useRef<HTMLDivElement[]>([]);

    const addToRefs = useCallback((el: HTMLDivElement) => {
        if (el && !childrenRefs.current.includes(el)) {
            childrenRefs.current.push(el);
        }
    }, []);

    return (
        <Parent as="ul" refCallback={(pRef) => (parentRef.current = pRef)}>
            <List dataArray={dataArray} refCallback={addToRefs} />
        </Parent>
    );
};
