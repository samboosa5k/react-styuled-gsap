import { useEffect } from 'react';

import { pointsExample } from '@/utils/common';

import { DummyList } from '@/modules';

import { Layout } from './layout';

function App() {
    useEffect(() => {
        console.log('points', { points: pointsExample() });
    }, []);
    return (
        <Layout.Page>
            <Layout.Sidebar>
                <span>Sidebar</span>
                <DummyList />
            </Layout.Sidebar>
            <Layout.Content>
                <h1>Content area</h1>
                <DummyList />
                <DummyList />
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
