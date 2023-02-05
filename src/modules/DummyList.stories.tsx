import { ComponentMeta } from '@storybook/react';

import { DummyList } from './DummyList';

export default {
    title: 'DummyList',
    component: DummyList,
} as ComponentMeta<typeof DummyList>;

const Template = () => <DummyList />;

export const Primary = Template.bind({});
