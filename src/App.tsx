import { ComponentList, DummyList, listDataArray } from '@/modules';

import { Animator, testAnimation } from './HOC/Animator';
// import { CardFactoryExample } from '@/modules/CardFactoryExample';
import { Layout } from './layout';

function App() {
    return (
        <Layout.Page>
            <Layout.Sidebar>
                <span>Sidebar</span>
                <DummyList />
            </Layout.Sidebar>
            <Layout.Content>
                <h1>Content area</h1>
                <Animator
                    targetClassName="random-class"
                    animationCallback={testAnimation}>
                    <ComponentList dataArray={listDataArray} />
                </Animator>
                <DummyList />
                <DummyList />
                <Animator
                    parent={{ tag: 'div' }}
                    child={{ tag: 'div' }}
                    targetClassName="abc"
                    animationCallback={testAnimation}>
                    <p className="abc">Hello</p>
                    <p className="abc">My name is</p>
                    <p className="abc">Jaspeeeer</p>
                </Animator>
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
