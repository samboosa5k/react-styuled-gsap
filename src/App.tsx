// import './App.css';
import { AppLayout } from './layout';
import { GridMobile } from './layout/Grid';

function App() {
    return (
        <AppLayout grid={GridMobile}>
            <div>hello</div>
        </AppLayout>
    );
}

export default App;
