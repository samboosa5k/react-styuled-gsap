import { ComponentProps, FC, useId, useMemo } from 'react'

export type MyModel<K extends string> = {
    [key in K]: MyModel<K>
}
declare const model: { [Key in string]: string | typeof model }
export type ModelType = typeof model
declare function fcReact(props: ModelType): JSX.Element
type FCX<P extends ModelType> = typeof fcReact extends FC<P>
    ? (props: P) => JSX.Element
    : null

interface MapperProps {
    MyComp: typeof fcReact
    model: ModelType
    data: Array<ModelType>
}

export const Mapper: FC<MapperProps> = ({
    MyComp,
    model,
    data,
}: MapperProps) => {
    const uniq = useId()
    const isProperData = useMemo(() => {
        return model && data
            ? data.every((item: ModelType) => item as ModelType)
            : false
    }, [model, data])

    if (!isProperData) {
        return null
    } else {
        return (
            <>
                {data &&
                    data.map((item: typeof model, idx: number) => (
                        <MyComp key={`mapped_${idx}_${uniq}`} {...item} />
                    ))}
            </>
        )
    }
}
