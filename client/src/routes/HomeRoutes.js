import React from 'react';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Employees from '../pages/Employees';
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/NavBar/NavBar';
import { Route } from 'react-router';

const HomeRoutes = ({ match }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <Route component={ Home } path={match.path} />
        <PrivateRoute component={ Employees } path={`${match.path}/employees`} />
      </div>
    </div>
  );
};

export default HomeRoutes;
