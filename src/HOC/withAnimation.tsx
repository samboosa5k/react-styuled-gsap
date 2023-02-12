import { MutableRefObject, useCallback, useRef } from 'react';

const animIn = () => 1;
const animOut = () => 1;

// const TransitionAnimation = (domRefs: HTMLElement[]) => {
//     const [head, ...tail] = domRefs;
//     if (domRefs.length === 0 || typeof head === 'undefined') {
//         return false;
//     }
//     if (domRefs.length === 1) {
//         console.log('LAST ONE', head);
//         return TransitionAnimation([]);
//     } else if (domRefs.length > 1) {
//         console.log(`${domRefs.length} more refs to GO`, head);
//         return TransitionAnimation(tail);
//     }
// };

type TransitionIn = typeof animIn;
type TransitionOut = typeof animOut;

const withTransition =
    <FN extends TransitionIn, FN1 extends TransitionOut>(fn: FN, fn1?: FN1) =>
    (
        component: (
            arg0: () => (() => number) | (() => undefined),
            arg1: MutableRefObject<MutableRefObject<HTMLElement[]> | undefined>
        ) => any
    ) => {
        const refArray = useRef<MutableRefObject<HTMLElement[]>>();

        const doTransition = useCallback(
            () => (fn1 ? () => fn1() : fn ? () => fn() : () => undefined),
            [fn, fn1]
        );

        return component(doTransition, refArray);
    };

const wrapTransitions = withTransition(animIn, animOut);
export const Trans = wrapTransitions((arg) => (
    <div onClick={arg}>'hwello'</div>
));

export { withTransition, wrapTransitions };
