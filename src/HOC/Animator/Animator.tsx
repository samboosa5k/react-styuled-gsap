import gsap from 'gsap';

import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';

import { prependString } from '@/utils';
import { X as AnimateWrapper } from '@/utils/namedJSX';

interface AnimatorProps {
    tag?: keyof JSX.IntrinsicElements;
    targetClassName: string | string[];
    animationCallback?: (
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
    const animate = useCallback(
        (arg0: AnimatorProps['targetClassName']) =>
            arg0 && animationCallback ? animationCallback(arg0) : null,
        [animationCallback]
    );

    useEffect(() => {
        const classNameWithDot = targetClassName
            ? Array.isArray(targetClassName)
                ? targetClassName.map((name) => prependString(name, '.'))
                : prependString(targetClassName, '.')
            : null;
        const ctx = gsap.context(() => {
            classNameWithDot && animate(classNameWithDot);
        }, [parentRef]);

        return () => ctx.revert();
    }, [targetClassName, animate]);

    return (
        <AnimateWrapper
            as={tag || 'div'}
            refCallback={(cbRef) => (parentRef.current = cbRef)}>
            {/*@ts-ignore*/}
            {children}
        </AnimateWrapper>
    );
};
