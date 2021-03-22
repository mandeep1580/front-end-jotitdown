import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import HomePage from './layouts/HomePage';
import CollectionPage from './layouts/CollectionPage'
import DetailsPage from './layouts/DetailsPage'
import AuthPage from './layouts/AuthPage'
import HeaderNavigation from "./layouts/HeaderNavigation";
import { Auth } from 'aws-amplify';

export default function App() {
  const [user, setUser] = useState()
  const checkUser = async () =>{
    try{
      await Auth.currentAuthenticatedUser()
      const sendUser = await Auth.currentUserInfo();
      const u = sendUser.username
      setUser(u)
    }catch(err){

    }
  }
  useEffect(()=> {
    checkUser();
    console.log({user})
  },[])
  return (
  <>
  <Router>
    <HeaderNavigation user= {user} checkUser= {checkUser}></HeaderNavigation>
    <Switch>
      <Route path="/" exact>
        <AuthPage user= {user} checkUser= {checkUser} />
        </Route>
        <Route path="/:collection/:collectionid">
          <DetailsPage />
          </Route>
          <Route path="/:collection">
            <CollectionPage user= {user}/>
            </Route>
            <Route path="/home">
              <HomePage />
              </Route>
              </Switch>
              </Router>
              </>
              )
            }
