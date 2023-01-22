// import './App.css';
import { DummyList } from '@/modules';

import { AppLayout } from './layout';
import { GridMobile } from './layout/Grid';

function App() {
    return (
        <AppLayout grid={GridMobile}>
            <DummyList />
        </AppLayout>
    );
}

export default App;
