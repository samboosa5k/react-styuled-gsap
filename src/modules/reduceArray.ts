import newsListJson from './newslist.json';

type JsonType = { [key: string]: any };
export const reduceArray = (arg0: JsonType[], keys: string[]) =>
    arg0.reduce(
        (acc: JsonType[], item: { [key: string]: any }) => [
            ...acc,
            keys.reduce(
                (acc2: JsonType, key: string) => ({
                    ...acc2,
                    [key]: key in item ? item[key] : '',
                }),
                {}
            ),
        ],
        []
    );

export const newsListData = newsListJson.data;

export const listDataArray = reduceArray(newsListData, [
    'newsID',
    'newsTitle',
    'newsTitleSlug',
]);
