import { FC } from 'react';

import { componentMapper } from '@/utils/componentMapper';

import { Wrapper as ListContainer } from '@/components/utility/Wrapper';

const model = {
    keyString: '',
};

type Model = typeof model;

const data: Model[] = [
    {
        keyString: 'data',
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

const ListItem = (props: Model) => <li>{props.keyString}</li>;

export const DummyList: FC = () => (
    <ListContainer as="ul">
        {componentMapper(ListItem, model, data)}
    </ListContainer>
);
