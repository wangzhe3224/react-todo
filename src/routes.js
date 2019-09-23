import { AddToDo } from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import { Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotMatch from './components/NotFound'
import React from 'react';
import { MakeRouteWithSubRoutes } from './MakeRouteWithSubRoutes';

const routes = [
  // Strange here... if I put "/" as the first item of the list..
  // the nacigation does not work, always render the root page..
  {
    path: "/new-item",
    component: AddToDo
  },
  {
    path: "/",
    component: ToDoListContainer
  },
  {
    path: "/:anythingNotMatch",
    component: NotMatch,
  }
];


export const Routes = (props) => {
  console.log('In Routes Function: ' + JSON.stringify(routes));
  console.log(routes);
  return (
    <div>
      <Navigation />
      <Switch>
        {
          routes.map(
            (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
          )
        }
      </Switch>
    </div>
  )
};
