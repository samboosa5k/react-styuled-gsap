export type GenericValue = string | number
export type GenericObject = { [key: string]: GenericValue | GenericObject }

function GenericGuard<T extends GenericObject>(arg: T): arg is T {
    return Object.keys(arg).every((key: keyof T) => arg[key] !== undefined)
}

export { GenericGuard }
