/**
 * Animations and such
 */
import gsap from 'gsap';

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
