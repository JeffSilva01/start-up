import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import WebSite from './pages/WebSite';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WebSite} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
