import { gsap } from 'gsap';

import { MutableRefObject, ReactNode, RefObject } from 'react';

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

const refPassthrough = (
    target: MutableRefObject<ReactNode> | RefObject<ReactNode>
) => {
    return target.current;
};

export { to, from, refPassthrough };
