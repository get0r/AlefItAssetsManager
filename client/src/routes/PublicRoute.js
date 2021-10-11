import React from 'react'
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = false;

    return (
        <Route { ...rest } render={ props => (
            isAuthenticated ? <Redirect to="/dashboard" /> :
                <Component { ...props } />
        )}
        />
    );
};

export default PublicRoute;
