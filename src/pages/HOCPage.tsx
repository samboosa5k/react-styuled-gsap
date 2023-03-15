import { AnimatorDude, staggerRefs, staggerRefsFade } from '@/HOC';

import { useMemo, useState } from 'react';

import { List, listDataArray } from '@/modules';

const INCREMENT = 5;

export const HOCPage = () => {
    const [range, setRange] = useState({
        start: 0,
        end: INCREMENT,
    });
    const [animOut, setAnimOut] =
        useState<typeof staggerRefsFade | typeof staggerRefs>();

    // TODO: dry this out, it is too wet.
    const handleIncrement = () => {
        setAnimOut(staggerRefsFade);
        setRange({
            start:
                range.start + INCREMENT < listDataArray.length - INCREMENT
                    ? range.start + INCREMENT
                    : listDataArray.length - INCREMENT,
            end:
                range.end + INCREMENT < listDataArray.length
                    ? range.end + INCREMENT
                    : listDataArray.length,
        });
    };

    // TODO: dry this out, it is too wet.
    const handleDecrement = () => {
        // setAnimOut(staggerRefsFade);
        setRange({
            start: range.start - INCREMENT > 0 ? range.start - INCREMENT : 0,
            end:
                range.end - INCREMENT > INCREMENT
                    ? range.end - INCREMENT
                    : INCREMENT,
        });
    };

    const dataFilter = useMemo(
        () =>
            listDataArray.filter(
                (_, idx) => idx >= range.start && idx < range.end
            ),
        [range]
    );

    // What would Jesus do if he saw this code?
    return (
        <AnimatorDude
            animationIN={animOut}
            animationOUT={staggerRefs}
            data={dataFilter}>
            {({
                // parentRef,
                // childRefs,
                addToChildRefs,
                data,
                // getChildRefs
            }) => (
                <>
                    <p>
                        <button onClick={handleDecrement}>Decrease</button>
                        <button onClick={handleIncrement}>Increase</button>
                    </p>
                    <List refCallback={addToChildRefs} dataArray={data} />
                </>
            )}
        </AnimatorDude>
    );
};
