import { ComponentList, DummyList, listDataArray } from '@/modules';

import { Animator, slideInOutAnimation, upDownAnimation } from './HOC';
import { Layout } from './layout';

function App() {
    return (
        <Layout.Page>
            <Layout.Sidebar>
                <span>Sidebar</span>
                <Animator
                    targetClassName="list-item"
                    animationCallback={upDownAnimation}>
                    <DummyList />
                </Animator>
            </Layout.Sidebar>
            <Layout.Content>
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
                <Animator
                    targetClassName="random-class"
                    animationCallback={slideInOutAnimation}>
                    <ComponentList dataArray={listDataArray} />
                </Animator>
                {/*<DummyList />*/}
                {/*<DummyList />*/}
                <DummyList />
            </Layout.Content>
            <Layout.Header>
                <span>Header/branding etc</span>
            </Layout.Header>
            <Layout.Navbar>
                <span>I am the navbar</span>
                <button>I am a buton</button>
            </Layout.Navbar>
        </Layout.Page>
    );
}

export default App;
