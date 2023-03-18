// import { useEffect } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import { sineWavePoints } from '@/utils';
// import { DummyList } from '@/modules';
//
// import { Animator, upDownAnimation } from './HOC';
import { Layout } from './layout';
import { ComponentPage, Home, Presentation, StyledPage } from './pages';

function App() {
    return (
        <Router>
            <Layout.Navbar>
                <span>I am the navbar</span>
                <Link to="/">Home</Link>
                <Link to="/styled">Styled</Link>
                <Link to="/hoc">HOC</Link>
                <Link to="/gsap">Gsap</Link>
                <Link to="/presentation">Presentation</Link>
                <Link to="/components">Components</Link>
            </Layout.Navbar>
            <Layout.Page>
                <Layout.Sidebar>
                    <></>
                </Layout.Sidebar>
                <Layout.Content>
                    <Routes>
                        <Route path="/" element={<h1>Hello</h1>} />
                        <Route path="/styled" element={<StyledPage />} />
                        <Route path="/gsap" element={<Home />} />
                        <Route
                            path="/presentation"
                            element={<Presentation />}
                        />
                        <Route path="/components" element={<ComponentPage />} />
                    </Routes>
                </Layout.Content>
                <Layout.RightBar>
                    <></>
                </Layout.RightBar>
            </Layout.Page>
        </Router>
    );
}

export default App;
