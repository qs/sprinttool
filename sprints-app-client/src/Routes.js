import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Sprint from './containers/Sprint';
import Day from './containers/Day';
import Archive from './containers/Archive';
import Task from './containers/Task';
import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} props={childProps} />
    <Route path="/today/" exact component={Day} props={childProps} />
    <Route path="/day/:day/" exact component={Day} props={childProps} />
    <Route path="/sprint/" exact component={Sprint} props={childProps} />
    <Route path="/sprint/:sprint_id/" exact component={Sprint} props={childProps} />
    <Route path="/task/:task_id/" exact component={Task} props={childProps} />
    <Route path="/archive/" exact component={Archive}  props={childProps} />
    <Route component={NotFound} />
  </Switch>;