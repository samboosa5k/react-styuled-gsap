import gsap from 'gsap';

import { 
	FC, ReactNode, useCallback, 
useRef } from 'react';

import { X as AnimateWrapper } from '@/utils/namedJSX';

interface IAnimatorBroContext {
    parentRef: MutableRefObject<HTMLDivElement>;
    childRefs: MutableRefObject<HTMLDivDlement[] | []>;
    addToChildRefs: (elem: HTMLDivElement) => void;
    getChildRefs: () => IAnimatorBroContext['childRefs'];
    children?: ReactNode;
}

const AnimatorBroContext: IAnimatorBroContext = {
    parentRef: null;
    childRefs: null;
    addToChildRefs: () => {};
    getChildRefs: () => {};
}

export const useAnimatorBroContext => useContext(AnimatorBroContext);
 
export const Animator: FC<AnimatorProps> = ({
    // animationCallback,
    // children,
}) => {
    const parentRef = useRef<IAnimatorBroContext['parentRef']>();
    const childRefs = useRef<IAnimatorBroContext['childRefs']>();

    const addToChildRefs = useCallback((elem: HTMLDivElement) =>
	elem 
		? childRefs.current = [[...childRefs?.current || [], elem]
		: [elem]
	, []);

    const getChildRefs = useCallback(() => childRefs?.current || [], []);

    return (
        <AnimatorBroContext.Provider
		value={{
			parentRef, childRefs, addToChildRefs, getChildRefs
	>
            
            {children}
        </AnimatorBroContext.Provider>
    );
};
