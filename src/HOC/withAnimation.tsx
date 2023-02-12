import { GenericStringObject } from '@/types/generic';

import { ContainerProps } from '@layout/types';

const transitionAnimation = (
    animateIn: () => void,
    animateOut: () => void
) => ({ animateIn, animateOut });

const animIn = () => {};
const animOut = () => {};
const withTransitionCallback = <P extends GenericStringObject>(props: P) => ({
    ...transitionAnimation(animIn, animOut),
    props,
});
type WithTransitionProps = ContainerProps & GenericStringObject & {};
const withTransition = (props: WithTransitionProps) => () =>
    withTransitionCallback(props);

const SimpleComponent = withTransition(
    ({ children }: ContainerProps) => children
);
// () =>
//     <div>{(transitionAnimation(
//         ()=>console.log('1'),
//         ()=>console.log('2')
//     ))}</div>)

export { transitionAnimation };
