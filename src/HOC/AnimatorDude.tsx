import { gsap } from 'gsap';

import { FC, ReactNode, useEffect, useRef } from 'react';

interface IAnimatorParent {
    parentRef?: HTMLDivElement | null;
    childRefs?: HTMLDivElement[] | [] | null;
    addToChildRefs?: (elem: HTMLDivElement, i: number) => void;
    getChildRefs?: () => HTMLDivElement[] | [] | undefined;
}

interface IAnimatorDude {
    // children: (props: { [key: string]: any }) => ReactNode | null;
    children: (props: IAnimatorParent) => ReactNode | null;
}

export const AnimatorDude: FC<IAnimatorDude> = ({ children }) => {
    const parentRef = useRef<IAnimatorParent['parentRef']>(undefined);
    const childRefs = useRef<IAnimatorParent['childRefs']>([]);

    const addToChildRefs = (elem: HTMLDivElement, i: number) =>
        elem && childRefs?.current
            ? (childRefs.current[i] = elem)
            : (childRefs.current = [elem]);

    const getChildRefs = () => childRefs?.current || [];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({});
            childRefs?.current &&
                tl

                    .to(childRefs.current, {
                        y: '10%',
                        scale: 0.9,
                        opacity: 0,
                        duration: 0.5,
                        delay: 0.5,
                        stagger: {
                            each: 0.1,
                            from: 0,
                            repeat: -1,
                            yoyo: true,
                        },
                    })
                    .yoyo(true);
        }, [childRefs]);
        return () => ctx.revert();
    }, [childRefs]);

    return (
        <>
            {children({
                parentRef: parentRef?.current,
                childRefs: childRefs?.current,
                addToChildRefs,
                getChildRefs,
            })}
        </>
    );
};
