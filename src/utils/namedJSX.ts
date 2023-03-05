import { createElement, MutableRefObject, ReactNode, useRef } from 'react';

interface XElementParams {
    as: keyof JSX.IntrinsicElements;
    refCallback: <T extends HTMLDivElement>(
        item: T | any
    ) => MutableRefObject<any>;
    children?: ReactNode;
}

export const X = (props: XElementParams) => {
    const { children, as, refCallback, ...otherProps } = props;
    const xRef = useRef();

    // const returnRef = () => {
    //     //@ts-ignore
    //     xRef.current && refCallback(xRef);
    //     return xRef;
    // };
    refCallback(xRef);
    return createElement(as, { ref: xRef, ...otherProps }, children);
};
