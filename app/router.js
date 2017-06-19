import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

import Home from './components/home';
import Values from './components/values';
import It from './components/it';
import Foto from './components/foto';


export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>

      <Route path="/" component={Home}/>

      <Route path="/Values">
        <Route component={SearchLayout}>
          <IndexRoute component={Values}/>
        </Route>
      </Route>

      <Route path="/It">
        <Route component={SearchLayout}>
          <IndexRoute component={It}/>
        </Route>
      </Route>


      <Route path="/Foto">
        <Route component={SearchLayout}>
          <IndexRoute component={Foto}/>
        </Route>
      </Route>

      </Route>

  </Router>
  )

  // https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyBLIp4pinwhaybKrnXhTwqNRgRySwfaPoA
