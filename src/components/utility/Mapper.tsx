import { ComponentProps, FC, useId, useMemo } from 'react'

interface MapperProps {
    MyComp: (props: ComponentProps<any>) => JSX.Element
    model: ComponentProps<any>
    data: Array<ComponentProps<any>>
}

export const Mapper: FC<MapperProps> = ({
    MyComp,
    model,
    data,
}: MapperProps) => {
    const uniq = useId()
    const isProperData = useMemo(() => {
        return model && data
            ? data.every((item: typeof model) => item as typeof model)
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
