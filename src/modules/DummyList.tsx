import { FC } from 'react';

import { GenericDataObject } from '@types';

import { Wrapper as ListContainer } from '@components/utility';
import { Mapper } from '@components/utility/Mapper';

interface Model extends GenericDataObject<'keyString'> {}

declare const model: Model;

const data: Model[] = [
    {
        keyString: 'keyString_1',
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
