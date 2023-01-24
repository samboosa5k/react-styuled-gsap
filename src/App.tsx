// import './App.css';
import { GridMobile } from '@/layout/Grid';

import { DummyList } from '@/modules';

import UI, { AppLayout } from './layout';

function App() {
    return (
        <AppLayout grid={GridMobile}>
            <UI.Content area="content">
                <DummyList />
            </UI.Content>
        </AppLayout>
    );
}

export default App;
