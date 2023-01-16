import React from 'react'

import { ComponentMeta } from '@storybook/react'

import { DummyList } from './Dummy'

export default {
    title: 'DummyList',
    component: DummyList,
} as ComponentMeta<typeof DummyList>

const Template = () => <DummyList />

export const Primary = Template.bind({})
