import { FC } from 'react'
import { Wrapper as ListContainer } from './utility'
import { Mapper, ModelType, MyModel } from './utility/Mapper'

const model = { keyString: '' }

const data: Array<MyModel<typeof model>> = [
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
]

const ListItem = (props: MyModel<typeof model>) => <li>{JSON.stringify(props)}</li>

export const DummyList: FC = () => (
    <ListContainer as="ul">
        <Mapper MyComp={ListItem} model={model} data={data} />
    </ListContainer>
)
