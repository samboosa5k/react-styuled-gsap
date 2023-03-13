/**
 * Animations and such
 */
import { gsap } from 'gsap';

import { sineWavePoints } from '@/utils';

export const slideInOutAnimation = (targetClassName: string) => {
    console.log('targetClassname', targetClassName);
    gsap.from(targetClassName, 0.5, {
        x: '20%',
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
        repeat: -1,
    }).yoyo(true);
};

export const upDownAnimation = (targetClassName: string) => {
    console.log('targetClassname', targetClassName);
    gsap.from(targetClassName, 0.25, {
        y: '100%',
        opacity: 0,
        stagger: 0.1,
        delay: 0.05,
        repeat: -1,
    }).yoyo(true);
};

const addTimeline = (tl: gsap.core.Timeline, classString: string, x: number) =>
    tl.from(classString, 0.4, { x, ease: 'power3' }).to(classString, {
        x,
        opacity: 0,
        scale: 1.5,
        repeat: -1,
    });

export const staggerAnimation = (targetClassNames: string | string[]) => {
    const tl = gsap.timeline();
    return tl.to(targetClassNames, 0.5, {
        x: '100%',
        duration: 0.5,
        stagger: {
            each: 0.1,
            from: 0,
            repeat: -1,
            yoyo: true,
        },
    });
};

export const timelineAnimation = (targetClassNameSequence: string[]) => {
    const sinePoints = sineWavePoints(targetClassNameSequence.length);
    return targetClassNameSequence.reduce(
        (tl, classString, i: number) =>
            addTimeline(tl, classString, (i + 1) * (sinePoints[i] * 100)),
        gsap.timeline()
    );
};
