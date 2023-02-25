import { ReactElement, ReactNode } from 'react';

export type GenericValue = string | number | symbol;
export type GenericChild = ReactNode | ReactElement | JSX.Element | Element;

export type GenericStringObject = {
    [key: string]: GenericValue | GenericChild;
};
export type GenericNumberObject = {
    [key: number]: GenericValue | GenericChild;
};
export type GenericSymbolObject = {
    [key: symbol]: GenericValue | GenericChild;
};

export type GenericFunction = <P extends unknown>(args?: P) => unknown;
export type GenericObjectKeyValue = NonNullable<
    GenericValue | GenericFunction | Array<GenericObjectKeyValue>
>;

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
