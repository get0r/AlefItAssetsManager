import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomeRoutes from './HomeRoutes';
import Auth from '../pages/Auth';
import SetUpAccount from '../pages/SetUpAccount';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
          <PrivateRoute component={HomeRoutes} path="/" exact />
          <PublicRoute component={Auth} path="/signIn" exact />
          <PublicRoute component={SetUpAccount} path="/signUp" exact />
        </Switch>
      </BrowserRouter>
    );
};

export default Routes;
