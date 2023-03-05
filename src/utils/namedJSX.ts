import {
    createElement,
    DetailedHTMLProps,
    ReactNode,
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

    useEffect(() => {
        if (refCallback && xRef.current) refCallback(xRef.current);
    }, [refCallback]);
    return createElement(as, { ref: xRef, ...otherProps }, children);
};
