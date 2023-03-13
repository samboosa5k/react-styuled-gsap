import { AnimatorDude } from '@/HOC';

import { List, listDataArray } from '@/modules';

export const HOCPage = () => {
    return (
        <AnimatorDude
        // animationCallback={slideInOutAnimation}
        >
            {/*<List dataArray={listDataArray.filter((_, idx) => idx > 5)} />{' '}*/}
            {({
                // parentRef,
                // childRefs,
                addToChildRefs,
                // getChildRefs
            }) => (
                <List
                    refCallback={addToChildRefs}
                    dataArray={listDataArray.filter((_, idx) => idx > 5)}
                />
            )}
        </AnimatorDude>
    );
};
