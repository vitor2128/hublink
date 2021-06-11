import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { FirstPage } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FirstPage} />
  </Switch>
);

export default Routes;
