import { MouseEvent, useCallback, useRef } from 'react';

import { X } from '@/utils/namedJSX';

import { NewsCard } from '@/modules/ComponentPage';

// import { Wrapper } from '@/components';

export const ComponentPage = () => {
    const parentRef = useRef<HTMLDivElement>();

    const handleClick = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();
            const { classList } = event.currentTarget;
            return classList.contains('hide')
                ? classList.remove('hide')
                : classList.add('hide');
        },
        [parentRef]
    );

    return (
        <X as="section" refCallback={(r) => (parentRef.current = r)}>
            <NewsCard onMouseDown={handleClick} />
        </X>
    );
};
