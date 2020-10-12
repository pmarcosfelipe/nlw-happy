import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing';
import OrphanagesMap from './screens/OrphanagesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/app" component={OrphanagesMap}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
