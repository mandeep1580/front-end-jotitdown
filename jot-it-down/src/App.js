import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import HomePage from './layouts/HomePage';
import CollectionPage from './layouts/CollectionPage'
import DetailsPage from './layouts/DetailsPage'


export default function App() {
  return (

    <Router>
<Switch>
  <Route path="/:collection/:collectionid">
    <DetailsPage />
  </Route>
  <Route path="/:collection">
    <CollectionPage />
  </Route>
  <Route path="/">
  <HomePage />
  </Route>
</Switch>
</Router>

  )
}
