export type GenericValue = string | number | symbol;
export type GenericFunction<P> = <P extends unknown>(args?: P) => unknown;
export type GenericObjectKeyValue = NonNullable<
    GenericValue | GenericFunction<unknown>
>;

export type GenericDataObject<K extends GenericValue> = {
    [key in K]: GenericObjectKeyValue | GenericDataObject<GenericValue>;
};

/**
 * GenericGuard --> accepts a basic object as an argument,
 * which it will then compare against a Type/Interface
 * or an inferred data-type for correctness.
 *
 * Useful for validating/type-checking an array of live data
 * without needing complex logic to deal with this.
 *
 * @type {(arg: GenericDataObject<GenericValue>)=>boolean}
 * @param arg - GenericDataObject<GenericValue>
 * @return boolean
 */
function GenericGuard<T extends GenericDataObject<GenericValue>>(
    arg: T
): arg is T {
    return Object.keys(arg as T).every((key) => key in arg);
}

// Example bad data:
const testData = {
    sd: 1,
    2: 'hello',
};

// Inferred data to compare
const compare = {
    adf: 1,
    2: '',
};

// Error: TS2345: Argument of type '{ sd: number; 2: string; }' is not assignable
// to parameter of type '{ adf: number; 2: string; }'.
// Property 'adf' is missing in type '{ sd: number; 2: string; }'
// but required in type '{ adf: number; 2: string; }'.
GenericGuard<typeof compare>(testData);

export { GenericGuard };
