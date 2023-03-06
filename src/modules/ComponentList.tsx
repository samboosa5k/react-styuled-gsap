// import gsap from 'gsap';
import { FC, useId, useRef } from 'react';

import { X as Child, X as Parent } from '@/utils/namedJSX';

import { Card } from '@/components';

interface ComponentListProps {
    dataArray: any[];
}

export const ComponentList: FC<ComponentListProps> = ({
    dataArray,
}): JSX.Element | null => {
    const uniqueId = useId();
    const parentRef = useRef<HTMLDivElement>();

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.from('.random-class', 0.5, {
    //             x: '100%',
    //             scaleY: 0,
    //             opacity: 0,
    //             display: 'none',
    //             stagger: 0.1,
    //             delay: 0.2,
    //         });
    //     }, [parentRef]);
    //     return () => {
    //         ctx.revert();
    //     };
    // }, []);

    return (
        <Parent as="ul" refCallback={(pRef) => (parentRef.current = pRef)}>
            {dataArray?.length &&
                dataArray.map((labelItem: any, idx: number) => (
                    <Child
                        as="li"
                        className={'random-class'}
                        key={`${uniqueId}-child-${idx}-X`}>
                        <Card {...labelItem} />
                    </Child>
                ))}
        </Parent>
    );
};
