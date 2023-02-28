import { ComponentList, DummyList, listDataArray } from '@/modules';

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
                <ComponentList dataArray={listDataArray} />
                <DummyList />
                <DummyList />
                {/*<CardFactoryExample />*/}
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
