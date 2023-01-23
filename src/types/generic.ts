export type GenericValue = string | number | symbol;

type GenericStringObject = { [key: string]: GenericValue };
type GenericNumberObject = { [key: number]: GenericValue };
type GenericSymbolObject = { [key: number]: GenericValue };

export type GenericFunction = <P extends unknown>(args?: P) => unknown;
export type GenericObjectKeyValue = NonNullable<GenericValue | GenericFunction>;

export type GenericObject =
    | GenericStringObject
    | GenericNumberObject
    | GenericSymbolObject;

export type GenericDataObject<K extends GenericValue> = {
    [key in K]: GenericObjectKeyValue | GenericDataObject<GenericValue>;
};

export type GenericInferred<T> = {
    [K in keyof T]: T[K];
};
