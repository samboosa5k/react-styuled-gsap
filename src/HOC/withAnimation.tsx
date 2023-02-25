import { FC, MutableRefObject, useCallback, useRef } from 'react';

import { GenericObjectKeyValue, GenericStringObject } from '@/types/generic';

const animIn = () => undefined;
const animOut = animIn;

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

interface CurryProps {
    refArray: MutableRefObject<HTMLElement[] | []>;
    doTransition?: () => undefined;
}

interface CombinedProps {
    [key: string]:
        | CurryProps[keyof CurryProps]
        | GenericObjectKeyValue
        | GenericStringObject;
}

const withTransition = (fn: TransitionIn, fn1?: TransitionOut) => {
    const refArray = useRef<HTMLElement[] | []>([]);

    const doTransition = useCallback(() => undefined, [fn, fn1]);

    return (
        props: GenericStringObject,
        component: FC<CombinedProps>
    ): JSX.Element | null =>
        component({ ...props, doTransition, refArray }) || null;
};

const wrapTransitions = withTransition(animIn, animOut)(
    { text: '' },
    (props) => {
        return (
            <span
                onClick={() => props.doTransition}
                id={props?.text?.toString() || 'id'}>
                ehmpty
            </span>
        );
    }
);

export { withTransition, wrapTransitions };
