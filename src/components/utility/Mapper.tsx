import { FC, useId, useMemo } from 'react';
import { GenericDataObject, GenericGuard } from '../../@types';

interface MapperProps {
    model: GenericDataObject;
    data: Array<MapperProps['model']>;
    Comp: <T extends MapperProps['model']>(props: T) => JSX.Element;
}

export const Mapper: FC<MapperProps> = ({ Comp, model, data }: MapperProps) => {
    const uniq = useId();
    const isProperData = useMemo(() => {
        return GenericGuard<typeof model>(data[0]);
    }, [model]);

    if (!isProperData) {
        return null;
    } else {
        return (
            <>
                {data &&
                    data.map((item: typeof model, idx: number) => (
                        <Comp key={`mapped_${idx}_${uniq}`} {...item} />
                    ))}
            </>
        );
    }
};
