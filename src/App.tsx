// import './App.css';
import { DummyList } from '@/modules';

import UI, { AppContainer } from './layout';

function App() {
    return (
        <AppContainer>
            <UI.Sidebar>
                <h1>SIDEBAR</h1>
            </UI.Sidebar>
            <UI.Content>
                <DummyList />
                <DummyList />
                <DummyList />
                <DummyList />
            </UI.Content>
            <UI.Header>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
                <h2>HEADER H2</h2>
            </UI.Header>
        </AppContainer>
    );
}

export default App;
