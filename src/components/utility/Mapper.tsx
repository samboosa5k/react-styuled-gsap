import { FC, useId, useMemo } from 'react'
import { GenericGuard, GenericObject } from '../../@types'

export type ModelType = GenericObject

interface MapperProps {
    Comp: (props: ModelType) => JSX.Element
    model: ModelType
    data: Array<ModelType>
}

export const Mapper: FC<MapperProps> = ({ Comp, model, data }: MapperProps) => {
    const uniq = useId()
    const isProperData = useMemo(() => {
        return GenericGuard<ModelType>(model)
    }, [model, data])

    if (!isProperData) {
        return null
    } else {
        return (
            <>
                {data &&
                    data.map((item: ModelType, idx: number) => (
                        <Comp key={`mapped_${idx}_${uniq}`} {...item} />
                    ))}
            </>
        )
    }
}
