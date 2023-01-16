import { createElement, FC } from "react";

type GenericValue = string | number;
type GenericObject = { [key: string]: GenericValue | GenericObject }
type GenericKeys = keyof GenericObject
type GenericKeysArray = Array<GenericKeys>

function GenericGuard<T extends GenericObject>(arg: T): arg is T {
    return Object.keys(arg).every((key:keyof T) => arg[key] !== undefined)
}

export interface GenericProps extends GenericObject {
    text: string,
    value: number
    component: (props: Omit<GenericProps, 'component'>)=>JSX.Element
}



const ReactFC: FC<GenericProps> = (props: GenericProps)=> {
    return GenericGuard<GenericProps>(props)
        ? createElement('div', props)
        : null
}

export { }