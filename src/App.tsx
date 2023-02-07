import { DummyList } from '@/modules';
import { DummyTable } from '@/modules/DummyTable';

import { TableBlock } from './components/blocks/Table';
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
                <TableBlock />
                <DummyList />
                <DummyList />
                <DummyTable />
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
