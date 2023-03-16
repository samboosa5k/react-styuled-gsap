import { Animator } from '@/HOC';
import { gsap } from 'gsap';

import { useLayoutEffect, useState, useTransition } from 'react';

import { Page0Foreword, Page1React, WrapperExample } from '@/modules';
import { Page2Styled } from '@/modules/Presentation';

import { Wrapper } from '@/components';

/**
 * Animation object because running out of time
 */
const trans = {
    opacity: 0,
    scale: 0.9,
    stagger: 0.1,
    ease: 'power2.inOut',
};

const fadeFrom = (classNames: string | string[]) =>
    gsap.from(classNames, 0.5, { ...trans });
const fadeTo = (classNames: string | string[]) =>
    gsap.to(classNames, 0.5, { ...trans });

const pageSwitch = (page: number) => {
    switch (page) {
        case 1:
            return <Page0Foreword />;
        case 2:
            return <Page1React />;
        case 3:
            return <Page2Styled />;
        case 4:
            return <WrapperExample />;
        default:
            return null;
    }
};

export const Presentation = () => {
    const [isPending, startTransition] = useTransition();
    const [pagination, setPagination] = useState<{ tab: number; page: number }>(
        {
            tab: 1,
            page: 1,
        }
    );

    useLayoutEffect(() => {
        // const switchPage = (page: number) => {
        //     startTransition(() => {
        //         setPagination({ ...pagination, page });
        //     });
        // };

        // THIS SEEMS TO HAVE MADE THE FLICKERING A LITTLE BIT LESS HEE HEE
        pagination.tab !== pagination.page
            ? setTimeout(() => {
                  requestAnimationFrame(() =>
                      startTransition(() => {
                          setPagination({
                              ...pagination,
                              page: pagination.tab,
                          });
                      })
                  );
              }, 500)
            : () => {};
    }, [pagination]);

    const switchTab = (tab: number) => {
        startTransition(() => {
            setPagination({ ...pagination, tab });
        });
    };

    return (
        <>
            <button
                onClick={() =>
                    startTransition(() => {
                        switchTab(pagination.page - 1);
                    })
                }>
                Page --
            </button>
            <button
                onClick={() =>
                    startTransition(() => {
                        switchTab(pagination.page + 1);
                    })
                }>
                Page ++
            </button>{' '}
            <Animator
                targetClassName={['wrapper', 'counter', 'title', 'page']}
                animationCallback={
                    pagination.tab === pagination.page ? fadeFrom : fadeTo
                }>
                <Wrapper className="wrapper">
                    <h1 className="counter">
                        Tab:{pagination.tab}, Page: {pagination.page}
                    </h1>
                    <>
                        {isPending ? (
                            <div>loading...</div>
                        ) : (
                            pageSwitch(pagination.page)
                        )}
                    </>
                </Wrapper>
            </Animator>
        </>
    );
};
