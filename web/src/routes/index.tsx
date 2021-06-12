import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HubLink, NotFound } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={HubLink} /> */}
    <Route path="/notfound" exact component={NotFound} />
    <Route path="/:username" exact component={HubLink} />
  </Switch>
);

export default Routes;
