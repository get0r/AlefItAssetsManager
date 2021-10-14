import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Auth from '../pages/Auth';
import SetUpAccount from '../pages/SetUpAccount';
import Home from '../pages/Home';
import Employees from '../pages/Employees';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Employees} path="/employees" exact />
          <PublicRoute component={Auth} path="/signIn" exact />
          <PublicRoute component={SetUpAccount} path="/signUp" exact />
        </Switch>
      </BrowserRouter>
    );
};

export default Routes;
