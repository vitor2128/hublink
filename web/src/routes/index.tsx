/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, RouteProps } from 'react-router-dom';

import { Admin, HubLink, NotFound, Login, NewAccount, Profile, LandingPage } from '../pages';

import { useAuth } from '../hooks/auth';

interface RouterProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<RouterProps> = ({ component: Component, ...rest }) => {
  const { logged } = useAuth();
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        logged ? (
          <>
            <Component {...routeProps} />
          </>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />
        )}
    />
  );
};

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <PrivateRoute path="/auth/admin" exact component={Admin} />

      <PrivateRoute path="/auth/new-profile" exact component={Profile} />

      <Route path="/login" exact component={Login} />
      <Route path="/new-account" exact component={NewAccount} />
      <Route path="/notfound" exact component={NotFound} />
      <Route path="/:username" exact component={HubLink} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
