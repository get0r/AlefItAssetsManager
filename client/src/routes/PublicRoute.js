import React from 'react'
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../helpers/isAuthenticated';

const PublicRoute = ({ component: Component, ...rest }) => {

    return (
        <Route { ...rest } render={ props => (
            isAuthenticated() ? <Redirect to="/" /> :
                <Component { ...props } />
        )}
        />
    );
};

export default PublicRoute;
