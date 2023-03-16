export const staggerRefs = () => {
    return {
        scale: 0.5,
        duration: 0.2,
        stagger: {
            each: 0.1,
            from: 0,
            // repeat: -1,
            // yoyo: true,
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
