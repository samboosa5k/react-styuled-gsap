import { GenericObject, GenericStringObject } from './generic';

/**
 * GenericGuard --> accepts a basic object as an argument,
 * which it will then compare against an inferred input data-type
 * for correct keys.
 *
 * Useful for validating/type-checking an array of live data
 * without needing complex logic to deal with this.
 *
 * @type {(arg:  GenericObject)=>boolean}
 * @return boolean
 */
export function GenericGuard<T extends GenericStringObject>(arg: GenericObject): arg is T {
    return Object.keys(arg).every(
        (key): boolean => typeof (arg as T)[key] !== 'undefined'
    );
}

type ArrayPredicateFN = typeof checkEvery | typeof checkSome;

const checkEvery = (data: GenericObject[]) => data.every;
const checkSome = (data: GenericObject[]) => data.some;

const checkDataTypeGuard = (predicateFN: ArrayPredicateFN) => {
    return (guardFN: typeof GenericGuard) => {
        return (props: GenericObject, data: GenericObject[]) => {
            return predicateFN(data)((item) => guardFN<typeof props>(item));
        };
    };
};

export const allDataValid = checkDataTypeGuard(checkEvery)(GenericGuard);
export const someDataValid = checkDataTypeGuard(checkSome)(GenericGuard);

// Example bad data:
// const testData = {
//     sd: 1,
//     2: 'hello',
// };

// Inferred data to compare
// const compare = {
//     adf: 1,
//     2: '',
// };

// Error: TS2345: Argument of type '{ sd: number; 2: string; }' is not assignable
// to parameter of type '{ adf: number; 2: string; }'.
// Property 'adf' is missing in type '{ sd: number; 2: string; }'
// but required in type '{ adf: number; 2: string; }'.

// GenericGuard<typeof compare>(testData);
