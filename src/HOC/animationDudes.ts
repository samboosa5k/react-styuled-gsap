export const staggerRefs = () => {
    return {
        x: '100%',
        duration: 0.5,
        stagger: {
            each: 0.1,
            from: 0,
            repeat: -1,
            yoyo: true,
        },
    };
};
export const staggerRefsFade = () => {
    return {
        opacity: 0,
        duration: 0.5,
        stagger: {
            each: 0.1,
            from: 0,
        },
    };
};
