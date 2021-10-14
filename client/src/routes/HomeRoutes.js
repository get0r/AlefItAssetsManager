import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Employees from '../pages/Employees';
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/NavBar/NavBar';

const HomeRoutes = (props) => {
    return (
        <BrowserRouter>
        <Switch>
        <div className="flex h-screen bg-gray-200">
                <SideBar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <NavBar />
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Employees} path="/employees" />
          </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
};

export default HomeRoutes;
