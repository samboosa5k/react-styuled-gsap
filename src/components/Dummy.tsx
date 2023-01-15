import { FC } from 'react'
import { Mapper } from './utility/Mapper'
import { Wrapper as ListContainer } from './utility'

const model = { keyString: '' }

const data: Array<typeof model> = [
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

const ListItem = (props: typeof model) => <li>{JSON.stringify(props)}</li>

const DummyList: FC = () => (
    <ListContainer as="ul">
        <Mapper MyComp={ListItem} model={model} data={data} />
    </ListContainer>
)
