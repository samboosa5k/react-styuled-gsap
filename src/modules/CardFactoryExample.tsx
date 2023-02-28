import { componentFactory } from '@/utils';

import { newsListData, reduceArray } from '@/modules/reduceArray';

import { Card } from '@/components';

const listDataArray = reduceArray(newsListData, [
    'newsID',
    'newsTitle',
    'newsTitleSlug',
]);

export const CardFactoryExample = () => {
    return <>{componentFactory(Card)(listDataArray)}</>;
};
