import React, { useCallback, useEffect, useState } from 'react';
import DAppComponent from './components/d-apps';
import TokensComponent from './components/tokens';

const routesAuth = [
    { path: '/d-apps', component: <DAppComponent /> },
    { path: '/tokens', component: <TokensComponent /> },
];

export default routesAuth;
