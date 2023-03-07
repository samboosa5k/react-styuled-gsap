import gsap from 'gsap';

import { FC, ReactNode, useEffect, useRef } from 'react';

import { prependString } from '@/utils';
import { X as AnimateWrapper } from '@/utils/namedJSX';

interface AnimatorProps {
    tag?: keyof JSX.IntrinsicElements;
    parent?: { tag: AnimatorProps['tag']; classNames?: string[] };
    child?: { tag: AnimatorProps['tag']; classNames?: string[] };
    targetClassName: string;
    animationCallback: (
        animateTargetClassName: AnimatorProps['targetClassName']
    ) => void;
    children: ReactNode;
}

export const Animator: FC<AnimatorProps> = ({
    tag,
    targetClassName,
    animationCallback,
    children,
}) => {
    const parentRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const classNameWithDot = prependString(targetClassName, '.');
        const ctx = gsap.context(() => {
            animationCallback(classNameWithDot);
        }, [parentRef]);

        return () => ctx.revert();
    }, [targetClassName, animationCallback]);

    return (
        <AnimateWrapper
            as={tag || 'div'}
            refCallback={(cbRef) => (parentRef.current = cbRef)}>
            {children}
        </AnimateWrapper>
    );
};
