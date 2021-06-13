import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Admin, HubLink, NotFound, Login, NewAccount, Profile, LandingPage } from '../pages';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/login" exact component={Login} />
      <Route path="/new-account" exact component={NewAccount} />
      <Route path="/new-account/new-profile" exact component={Profile} />
      <Route path="/notfound" exact component={NotFound} />
      <Route path="/:username" exact component={HubLink} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
