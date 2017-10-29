import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';
import About from './About';
import Basics from './Basics';
import MapPage from './MapPage';

const ScrollReset = () => {
  window.scrollTo(0,0);
  return null;
}

const Routes = () => (
  [
    <Route path="/" component={ScrollReset} key="1"/>,
    <Switch key="2">
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/texas-water-basics' component={Basics}/>
      <Route exact path='/map' component={MapPage}/>
      <Route path='*' component={NotFound}/>
    </Switch>
  ]
)

export default Routes;