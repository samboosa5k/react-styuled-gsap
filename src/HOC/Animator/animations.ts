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
export const timelineAnimation = (targetClassNameSequence: string[]) => {
    const tl = gsap.timeline({
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.05,
        repeatRefresh: true,
    });
    const sinePoints = sineWavePoints(targetClassNameSequence.length);
    return targetClassNameSequence.reduce(
        (ttl = tl, classString, i: number) =>
            addTimeline(ttl, classString, (i + 1) * (sinePoints[i] * 100)),
        tl
    );
};
