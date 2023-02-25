import { gsap } from 'gsap';

/**
 * This file should mark the start my gsap
 * journey with the motivation of eventually
 * integrating some of these techniques and animations
 * at __Tech.
 *
 * Lets see what comes out of this.
 */
const to = gsap.to;
const from = gsap.from;

type MoveX = { x: number };
type MoveY = { y: number };
type MoveXY = MoveX | MoveY | (MoveX & MoveY);

type AnimationSequence = (arg: MoveXY[]) => void;

const animation: AnimationSequence = (sequence: MoveXY[]) => {
    const [begin, ...end] = sequence;

    if (typeof begin === 'undefined') {
        console.log('animation end');
        return animation;
    }

    console.log(begin); // TODO: pass in gsap.to() or gsap.from()
    return animation(end);
};

export { to, from };
