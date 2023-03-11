import { Animator, slideInOutAnimation, staggerAnimation } from '@/HOC';

import { ComponentList, DummyList, List, listDataArray } from '@/modules';

export const Home = () => {
    return (
        <>
            <h1>Content area</h1>
            <Animator
                targetClassName="abc"
                animationCallback={slideInOutAnimation}>
                <>
                    <p className="abc">Hello</p>
                    <p className="abc">My name is</p>
                    <p className="abc">Jaspeeeer</p>
                </>
            </Animator>
            {/*
                    JASPER's WATERFALL EFFECT
                */}
            {/*<Animator*/}
            {/*    targetClassName={[*/}
            {/*        'target-1',*/}
            {/*        'target-2',*/}
            {/*        'target-3',*/}
            {/*        'target-4',*/}
            {/*        'target-5',*/}
            {/*    ]}*/}
            {/*    animationCallback={timelineAnimation}>*/}
            {/*    <>*/}
            {/*        <p className="target-1">Hello</p>*/}
            {/*        <p className="target-2">My name is</p>*/}
            {/*        <p className="target-3">Jaspeeeer</p>*/}
            {/*        <p className="target-4">Jaspeeeer</p>*/}
            {/*        <p className="target-5">Jaspeeeer</p>*/}
            {/*    </>*/}
            {/*</Animator>*/}
            {/*
                    VERY SIMPLE STAGGER
                */}
            {/*<Animator*/}
            {/*    targetClassName="random-class"*/}
            {/*    animationCallback={slideInOutAnimation}>*/}
            {/*    <ComponentList*/}
            {/*        dataArray={[*/}
            {/*            listDataArray[0],*/}
            {/*            listDataArray[2],*/}
            {/*            listDataArray[3],*/}
            {/*        ]}*/}
            {/*    />*/}
            {/*</Animator>*/}
            <Animator
                targetClassName="random-class"
                animationCallback={staggerAnimation}>
                <ComponentList
                    dataArray={listDataArray.filter((_, idx) => idx < 5)}
                />
            </Animator>
            <Animator
                targetClassName="random-class"
                animationCallback={staggerAnimation}>
                <List dataArray={listDataArray.filter((_, idx) => idx > 5)} />
            </Animator>
            {/*<DummyList />*/}
            {/*<DummyList />*/}
            <DummyList />
        </>
    );
};
