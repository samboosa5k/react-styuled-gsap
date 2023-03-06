import {
    createElement,
    DetailedHTMLProps,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
} from 'react';

interface XElementParams extends DetailedHTMLProps<any, any> {
    as: keyof JSX.IntrinsicElements;
    refCallback?: <T extends HTMLDivElement>(item: T) => void;
    children?: ReactNode;
}

export const X = (props: XElementParams) => {
    const { children, as, refCallback, ...otherProps } = props;
    const xRef = useRef<HTMLDivElement>();

    const callbackRef = useCallback(
        () =>
            refCallback && xRef.current ? refCallback(xRef.current) : () => {},
        [refCallback]
    );

    useEffect(() => {
        callbackRef();
    }, [callbackRef]);

    return createElement(as, { ref: xRef, ...otherProps }, children);
};
