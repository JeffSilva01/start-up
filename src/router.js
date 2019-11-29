import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import WebSite from './pages/WebSite';
import Login from './pages/Login';
import Posts from './pages/Posts';

import history from './services/history';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={WebSite} />
          <Route path="/login" component={Login} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}
