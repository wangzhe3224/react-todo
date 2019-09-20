import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotMatch from './components/NotFound'
import React from 'react';
import { MakeRouteWithSubRoutes } from './MakeRouteWithSubRoutes';

const routes = [
  {
    path: "/",
    component: ToDoListContainer
  },
  {
    path: "/new-item",
    component: AddToDo
  },
  // {
  //   path: "/Topics",
  //   component: TopicList,
  //   routes: [
  //     {
  //       path: "/Topics/:topicId",
  //       component: TopicDetail,
  //       routes: fetchXYZApiRoutes,
  //     },
  //   ]
  // },
  {
    path: "/:anythingNotMatch",
    component: NotMatch,
  }
];


export const Routes = (props) => {
  console.clear();
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
