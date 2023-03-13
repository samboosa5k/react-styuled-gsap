// import gsap from 'gsap';
import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useContext,
    useRef,
} from 'react';

// import { X as AnimateWrapper } from '@/utils/namedJSX';

export interface IAnimatorBroContext {
    parentRef?: HTMLDivElement | null;
    childRefs?: HTMLDivElement[] | [] | null;
    addToChildRefs?: (elem: HTMLDivElement) => void;
    getChildRefs?: () => HTMLDivElement[] | [] | undefined;
}

const AnimatorBroContext = createContext<IAnimatorBroContext>({});

export const useAnimatorBroContext = () => useContext(AnimatorBroContext);

export const AnimatorBroProvider: FC<{ children: ReactNode }> = ({
    // animationCallback,
    children,
}) => {
    const parentRef = useRef<IAnimatorBroContext['parentRef']>(undefined);
    const childRefs = useRef<IAnimatorBroContext['childRefs']>([]);

    const addToChildRefs = useCallback(
        (elem: HTMLDivElement) =>
            elem && childRefs?.current
                ? (childRefs.current = [...(childRefs?.current || []), elem])
                : [elem],
        []
    );

    const getChildRefs = useCallback(() => childRefs?.current || [], []);

    return (
        <AnimatorBroContext.Provider
            value={{
                parentRef: parentRef?.current,
                childRefs: childRefs?.current,
                addToChildRefs,
                getChildRefs,
            }}>
            {children}
        </AnimatorBroContext.Provider>
    );
};
