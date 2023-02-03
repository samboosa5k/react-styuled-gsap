import {Layout}  from './layout';

import { DummyList } from '@/modules';

function App() {
    return (
        <Layout.Container>
            <Layout.Sidebar>
                <h4>SIDEBAR</h4>
                <DummyList />
            </Layout.Sidebar>
            <Layout.Content>
                <h5>Content area</h5>
                <DummyList />
                <DummyList />
                <DummyList />
            </Layout.Content>
            <Layout.Header>
                <h2>Header/branding etc</h2>
            </Layout.Header>
            <Layout.Navbar>
                <p>I am the navbar</p>
                <button>I am a buton</button>
            </Layout.Navbar>
        </Layout.Container>
    );
}

export default App;
