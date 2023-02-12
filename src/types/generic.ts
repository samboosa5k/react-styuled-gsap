import { ReactElement, ReactNode } from 'react';

export type GenericValue = string | number | symbol;
export type GenericChild = ReactNode | ReactElement | JSX.Element | Element;

export type GenericStringObject = { [key: string]: GenericValue };
export type GenericNumberObject = { [key: number]: GenericValue };
export type GenericSymbolObject = { [key: symbol]: GenericValue };
export type GenericChildObject = { [key: symbol]: GenericChild };

export type GenericFunction = <P extends unknown>(args?: P) => unknown;
export type GenericObjectKeyValue = NonNullable<GenericValue | GenericFunction>;

export type GenericObject =
    | GenericStringObject
    | GenericNumberObject
    | GenericSymbolObject
    | GenericChildObject;

export type GenericDataObject<K extends GenericValue> = {
    [key in K]: GenericObjectKeyValue | GenericDataObject<GenericValue>;
};

export type GenericInferred<T> = {
    [K in keyof T]: T[K];
};
