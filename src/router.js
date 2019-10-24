import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import WebSite from './pages/WebSite';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact componen={WebSite} />
        <Route path="/login" componen={Login} />
      </Switch>
    </BrowserRouter>
  );
}
