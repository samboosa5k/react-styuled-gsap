import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { VerbonApp } from '../apps/VerbonApp';

// const lazyApp =(arg:string) => lazy(() => import(`../apps/${arg}`))
//
// const APP_NAME = 'VerbonApp';
const APP = VerbonApp;


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Suspense fallback={<h1>Loading...</h1>}>
            <APP />
        </Suspense>
    </React.StrictMode>,
);
