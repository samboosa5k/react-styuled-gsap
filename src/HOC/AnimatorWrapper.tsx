import { gsap } from 'gsap';

import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';

/**
 * Please find it in your hearts to overlook the excessive use of
 * nulls & any & undefineds in this file.
 * I'm in the process of cleaning up.
 */

type AnimationFN = (
    elem: HTMLDivElement | HTMLDivElement[],
    tl: gsap.core.Timeline
) => void;

// Parent --> Receives magic data
interface IAnimationProps {
    animationIN?: AnimationFN;
    animationOUT?: AnimationFN;
    data?: { [key: string]: any };
}
// Parent --> Gives cool stuff to Children
interface IAnimatorWrapper extends IAnimationProps {
    children: (
        props: IAnimatorWrapperChildren & IAnimationProps['data']
    ) => ReactNode | null;
}

// Chuldren --> Gets cool stuff from Parent
interface IAnimatorWrapperChildren {
    parentRef?: HTMLDivElement | null;
    childRefs?: HTMLDivElement[] | [] | null;
    addToChildRefs?: (elem: HTMLDivElement, i: number) => void;
    getChildRefs?: () => HTMLDivElement[] | [] | undefined;
}

export const AnimatorWrapper: FC<IAnimatorWrapper> = ({
    animationIN,
    animationOUT,
    data,
    children,
}) => {
    // Refs: Dom Elements
    const parentRef = useRef<IAnimatorWrapperChildren['parentRef']>(undefined);
    const childRefs = useRef<IAnimatorWrapperChildren['childRefs']>([]);

    const addToChildRefs = (elem: HTMLDivElement, i: number) =>
        elem && childRefs?.current
            ? (childRefs.current[i] = elem)
            : (childRefs.current = [elem]);

    const getChildRefs = useCallback(
        () => childRefs?.current || [],
        [childRefs]
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({});
            if (childRefs?.current) {
                tl.from(childRefs.current, 0.5, {
                    ...animationIN, // FIXME: this
                    // naming is garbage
                }).to(childRefs.current, 0.5, {
                    ...animationOUT, // FIXME: this
                    // naming is garbage
                });
            }
        }, [childRefs]);

        return () => {
            ctx.revert();
        };
    }, [data, animationIN, animationOUT]);

    return (
        <>
            {children({
                data,
                parentRef: parentRef?.current,
                childRefs: childRefs?.current,
                addToChildRefs,
                getChildRefs,
            })}
        </>
    );
};
