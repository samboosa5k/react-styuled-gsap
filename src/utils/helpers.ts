export const isNumber = (arg0: any): arg0 is number =>
    !isNaN(arg0) && typeof arg0 === 'number';
export const isDefined = (
    arg0: any
): arg0 is NonNullable<typeof arg0 | undefined> => typeof arg0 !== 'undefined';

export const prependString = (
    stringTarget: string,
    stringToPrepend: string
) => {
    const isAlreadyPrepended = new RegExp(`/^${stringToPrepend}.+/`).test(
        stringTarget
    );
    return !isAlreadyPrepended
        ? `${stringToPrepend}${stringTarget}`
        : stringTarget;
};

/**
 * @author djD-REK
 * @description Using exponential notation to prevent rounding errors
 * Link:https://gist.github.com/djD-REK/068cba3d430cf7abfddfd32a5d7903c3
 */
export const roundDecimal = (decimal: number) => (floatValue: number) =>
    parseFloat(`${Math.round(Number(`${floatValue}e${decimal}`))}e-${decimal}`);
