import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import HomePage from './layouts/HomePage';
import CollectionPage from './layouts/CollectionPage'
import DetailsPage from './layouts/DetailsPage'
import AuthPage from './layouts/AuthPage'


export default function App() {
  return (

    <Router>
<Switch>
<Route path="/" exact>
  <AuthPage />
  </Route>
  <Route path="/:collection/:collectionid">
    <DetailsPage />
  </Route>
  <Route path="/:collection">
    <CollectionPage />
  </Route>
  <Route path="/home">
  <HomePage />
  </Route>
</Switch>
</Router>

  )
}
