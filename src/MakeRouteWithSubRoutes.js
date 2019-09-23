import React from 'react';
import { Route } from 'react-router-dom';

export const MakeRouteWithSubRoutes = route => {
  console.log('In MakeRouteWithSubRoutes: ');
  console.log(route);
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component { ...props} routes={route} />
      )}
    />
  );
};
