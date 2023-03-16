// import { useEffect } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import { sineWavePoints } from '@/utils';
// import { DummyList } from '@/modules';
//
// import { Animator, upDownAnimation } from './HOC';
import { Layout } from './layout';
import { Home, Presentation, StyledPage } from './pages';

function App() {
    return (
        <Router>
            <Layout.Page>
                <Layout.Sidebar>
                    <span>Sidebar</span>
                    {/*<Animator*/}
                    {/*    targetClassName="list-item"*/}
                    {/*    animationCallback={upDownAnimation}>*/}
                    {/*    <DummyList />*/}
                    {/*</Animator>*/}
                </Layout.Sidebar>{' '}
                <Layout.RightBar>
                    <span>Sidebar</span>
                    {/*<Animator*/}
                    {/*    targetClassName="list-item"*/}
                    {/*    animationCallback={upDownAnimation}>*/}
                    {/*    <DummyList />*/}
                    {/*</Animator>*/}
                </Layout.RightBar>
                <Layout.Content>
                    <Routes>
                        <Route path="/" element={<h1>Hello</h1>} />
                        <Route path="/styled" element={<StyledPage />} />
                        <Route path="/gsap" element={<Home />} />
                        <Route
                            path="/presentation"
                            element={<Presentation />}
                        />
                    </Routes>
                </Layout.Content>
                <Layout.Header>
                    <span>Header/branding etc</span>
                </Layout.Header>
                <Layout.Navbar>
                    <span>I am the navbar</span>
                    <Link to="/">Home</Link>
                    <Link to="/styled">Styled</Link>
                    <Link to="/hoc">HOC</Link>
                    <Link to="/gsap">Gsap</Link>
                    <Link to="/presentation">Presentation</Link>
                </Layout.Navbar>
            </Layout.Page>
        </Router>
    );
}

export default App;
