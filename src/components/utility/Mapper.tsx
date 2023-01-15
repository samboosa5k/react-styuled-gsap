import { FC, FunctionComponent, ReactElement, useId, useMemo } from 'react'

type MyComp = <T>(props: T) => JSX.Element | null
interface MyCompParams extends Parameters<MyComp> {}
interface MapperProps {
    MyComp: MyComp
    model: MyCompParams
    data: Array<MyCompParams>
}

export const Mapper: FC<MapperProps> = ({
    MyComp,
    model,
    data,
}: MapperProps) => {
    const uniq = useId()
    const isProperData = useMemo(() => {
        return data.every((item: MyCompParams) => item as typeof model)
    }, [model, data])

    if (!isProperData) {
        return null
    } else {
        return (
            <>
                {data.map((item: typeof model, idx: number) => (
                    <MyComp key={`mapped_${idx}_${uniq}`} {...item} />
                ))}
            </>
        )
    }
}
