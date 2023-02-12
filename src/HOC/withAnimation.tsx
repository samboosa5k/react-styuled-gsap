import { FC, ReactNode } from 'react';

import { GenericObject, GenericStringObject } from '@/types/generic';

import { ContainerProps } from '@layout/types';

const transitionAnimation = (
    animateIn: () => void,
    animateOut: () => void
) => ({ animateIn, animateOut });

const animIn = () => {};
const animOut = () => {};
const withTransitionCallback = <P extends GenericObject>(props: P) => ({
    ...transitionAnimation(animIn, animOut),
    ...props,
});

type R = ReturnType<typeof withTransitionCallback>;
type TransitionHOC = ContainerProps & GenericObject;
const withTransition = (props: TransitionHOC) => {
    return (_props: R = withTransitionCallback(props)) => <>{_props}</>;
};
//  (
//     <>
//         hello
//     </>
// )

// }

interface SimpleComponentProps {
    text: 'hello' | 'lorem' | 'children';
    children: ReactNode;
}

const simpleProps: TransitionHOC = {
    text: 'hello',
    children: <h1>jell</h1>,
};
const SimpleComponent = withTransition(simpleProps);
// () =>
//     <div>{(transitionAnimation(
//         ()=>console.log('1'),
//         ()=>console.log('2')
//     ))}</div>)

export { transitionAnimation };
