import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';

const HomeRoutes = (props) => {
    return (
        <BrowserRouter>
        <Switch>
          <PrivateRoute component={Home} path="/" exact />
        </Switch>
      </BrowserRouter>
    );
};

export default HomeRoutes;
