import { GenericInferred, GenericObject } from '@/types/generic';
import { Wrapper as ListContainer } from '@components/utility';
import { Mapper } from '@components/utility/Mapper';

import { FC } from 'react';


const model = {
    keyString: '',
} ;

type Model = GenericObject & GenericInferred<typeof model | GenericObject>

const data: Model[] = [
    {
        keyStr2ing: undefined
    },
    {
        keyString: 'keyString_2',
    },
    {
        keyString: 'keyString_3',
    },
    {
        keyString: 'keyString_4',
    },
];

const ListItem = (props: Model) => <li>{JSON.stringify(props)}</li>;

export const DummyList: FC = () => (
    <ListContainer as="ul">
        <Mapper Comp={ListItem} model={model} data={data} />
    </ListContainer>
);
