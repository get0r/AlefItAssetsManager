import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../helpers/isAuthenticated';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props => (
            isAuthenticated() ? <Component {...props} /> :
                <Redirect to="/signIn" />
        )} />
    );
};

export default PrivateRoute;
