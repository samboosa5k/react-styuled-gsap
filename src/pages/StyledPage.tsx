import { Animator, slideInOutAnimation } from '@/HOC';

import { List, listDataArray } from '@/modules';

export const StyledPage = () => {
    return (
        <>
            <Animator
                targetClassName="abc"
                animationCallback={slideInOutAnimation}>
                <List dataArray={listDataArray.filter((_, idx) => idx > 5)} />{' '}
            </Animator>
        </>
    );
};
