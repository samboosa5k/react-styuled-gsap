import gsap from 'gsap';

import { FC, ReactNode, useEffect, useRef } from 'react';

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

export const testAnimation = (targetClassName: string) => {
    console.log('targetClassname', targetClassName);
    gsap.from(targetClassName, 0.5, {
        x: '100%',
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
        repeat: -1,
    }).yoyo(true);
};

const prependString = (stringTarget: string, stringToPrepend: string) => {
    const isAlreadyPrepended = new RegExp(`/^${stringToPrepend}.+/`).test(
        stringTarget
    );
    return !isAlreadyPrepended
        ? `${stringToPrepend}${stringTarget}`
        : stringTarget;
};

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
