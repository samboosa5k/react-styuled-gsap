import { createElement, ReactNode, useRef } from 'react';

interface XElementParams {
    as: keyof JSX.IntrinsicElements;
    refCallback: <T extends HTMLDivElement>(item: T) => void;
    children?: ReactNode;
}

export const X = (props: XElementParams) => {
    const { children, as, refCallback, ...otherProps } = props;
    const xRef = useRef();

    const returnRef = (refItem: typeof xRef) => {
        refItem?.current && refCallback(refItem.current);
        return refItem;
    };
    return createElement(as, { ref: returnRef(xRef), ...otherProps }, children);
};
