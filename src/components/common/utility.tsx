// FUNCTIONAL COMPONENTS
import { Fragment } from 'react';

type ComponentChildFn = () => JSX.Element;
type ComponentWrapperFn = (child?: JSX.Element) => JSX.Element;
export const map =
    (...fns: Array<ComponentChildFn>) =>
    () =>
        (
            <>
                {fns.map((fn, i) => (
                    <Fragment key={`map-component-${i}`}>{fn()}</Fragment>
                ))}
            </>
        );

export const compose = (...fns: Array<ComponentWrapperFn>) =>
    <Fragment key={`compose-component-${Math.random()}`}>{fns.reduceRight(
        (wrapped: JSX.Element, fn: ComponentChildFn | ComponentWrapperFn) =>
            (wrapped && fn(wrapped)) || fn(),
        <></>
    )}</Fragment>;
