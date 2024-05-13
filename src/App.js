import React, { useEffect, useMemo } from 'react';
import {
    Navigate,
    Route,
    Routes,
    NavLink,
    useLocation,
    BrowserRouter as Router,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import routesAuth from './routes';
import Home from './components/home';
import PrivateLayout from './components/Layout/private-layout'
function RequireAuth({ children }) {
    //   const auth = useAuth()
    const location = useLocation();
    const auth = {
        authStatus: {
            isToken: false,
        },
    };

    //   if (!auth.authStatus.isToken) {
    //     return <Navigate to="/login" state={{from: location}} replace />
    //   }

    //   if (auth.authStatus.loadingAuth || !auth.user) {
    //     return <Spin spinning={auth.authStatus.loadingAuth} size="small" />
    //   }

    return children;
}
function App() {
    const renderRoutes = useMemo(
        () =>
            routesAuth.map((rou) => (
                <Route
                    key={rou.path}
                    path={rou.path}
                    element={<RequireAuth>{rou.component}</RequireAuth>}
                />
            )),
        [],
    );

    return (
        <div>
            <div className='menu'>
                <NavLink  to="/d-apps" activeClassName='active'>Dapp page</NavLink>
                <NavLink to="/tokens" activeClassName='active'>Tokens page</NavLink>
            </div>

            <PrivateLayout>
                <Routes>
                    {/* <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
        </Route> */}
                    {/* <Route path="/" element={<Home />}> */}
                    {/* <Route index element={<Navigate replace to="/d-apps" />} /> */}
                    {renderRoutes}
                    {/* </Route> */}
                    {/* {renderRoutes} */}
                    {/* <Route path="/reset-password" element={<CreatePassword />} />
        <Route path="/create-password" element={<SetPassword />} />
        <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </PrivateLayout>

            <h1>Footer</h1>
        </div>
    );
}

export default App;
