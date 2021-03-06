import React from 'react';
import {Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dasboard';
import Profile from '../pages/Profile';
import SignIng from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={SignIng}/>
      <Route path="/register" component={SignUp}/>
      <Route path="/dashboard" component={Dashboard} isPrivate/>
      <Route path="/profile" component={Profile} isPrivate/>
    </Switch>
  );
}