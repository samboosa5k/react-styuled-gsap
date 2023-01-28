import { DummyList } from '@/modules';

import { AppContainer } from './layout/Layout';

function App() {
    return (
        <AppContainer>
            <AppContainer.Sidebar>
                <h1>SIDEBAR</h1>
            </AppContainer.Sidebar>
            <AppContainer.Content>
                <DummyList />
                <DummyList />
                <DummyList />
                <DummyList />
            </AppContainer.Content>
            <AppContainer.Header>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
            </AppContainer.Header>
        </AppContainer>
    );
}

export default App;
