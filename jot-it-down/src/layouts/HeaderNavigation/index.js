import React from 'react'
import Header from '../../components/Header'
import {Auth}  from 'aws-amplify';
import { useHistory } from "react-router-dom"

export default function HeaderNavigation({user, checkUser}) {
    const history = useHistory()

    const logOutClicked = async() => {
       await Auth.signOut()
    //    await checkUser();
    //    history.push('/')
    window.location.href = '/'
    }

    const titleClicked = () => {
    // window.location.href = '/home'

        history.push(`/home`)
    }
    
    return (
        <>
        {/* {console.log(user)} */}
        {user?
    <Header
    user ={user}
    logOutClicked= {logOutClicked}
    titleClicked = {titleClicked}
      ></Header>:""}
      </>
      )
  }