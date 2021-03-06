import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import TaskListContainer from '/imports/containers/TaskListContainer';
import AddTaskContainer from '/imports/containers/AddTaskContainer';
import Login from '/imports/containers/Login';

const ConnectedSwitch = connect(state => ({
  location: state.location,
}))(Switch);

export const Routes = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Login} />
    <Route path="/tasks" component={TaskListContainer} />
    <Route path="/add" component={AddTaskContainer} />
    <Route path="/edit/:_id" component={AddTaskContainer} />
  </ConnectedSwitch>
);
