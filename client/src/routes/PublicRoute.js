import React from 'react'
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = true;

    return (
        <Route { ...rest } render={ props => (
            isAuthenticated ? <Redirect to="/" /> :
                <Component { ...props } />
        )}
        />
    );
};

export default PublicRoute;
