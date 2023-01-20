export type GenericValue = string | number;
export type GenericFunction<P> = <P extends unknown>(args?: P) => unknown;
export type GenericObjectKeyValue = NonNullable<
    GenericValue | GenericFunction<unknown>
>;
export type GenericDataObject = {
    [key: GenericValue]: GenericObjectKeyValue | GenericDataObject;
};

function GenericGuard<T extends object>(arg: T): arg is T {
    return Object.keys(arg as T).every((key) => key in arg);
}

const sdf = {
    adf: 1,
    2: 'hello',
};

const compare = {
    adf: 1,
    2: '',
};
GenericGuard<typeof compare>(sdf);

export { GenericGuard };
