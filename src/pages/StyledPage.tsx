import {
    AnimatorBroProvider, // slideInOutAnimation
} from '@/HOC';

import { List, listDataArray } from '@/modules';

export const StyledPage = () => {
    return (
        <AnimatorBroProvider
        // animationCallback={slideInOutAnimation}
        >
            <List dataArray={listDataArray.filter((_, idx) => idx > 5)} />{' '}
        </AnimatorBroProvider>
    );
};
