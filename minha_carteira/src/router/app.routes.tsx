import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
  <Layout>
      <Switch>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/list/:type" exact component={List}/>
    </Switch>
  </Layout>

);

export default AppRoutes;