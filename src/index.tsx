import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { borders, colors, GlobalStyle, spacing, typography } from './theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyle
            colors={colors}
            borders={borders}
            spacing={spacing}
            typography={typography}
        />
        <App />
    </React.StrictMode>
);
