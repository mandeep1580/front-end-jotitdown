import React from 'react'
import { useHistory } from "react-router-dom"
import LandingPage from '../../components/LandingPage'

export default function HomePage(props) {
  // const {token, setToken,signOut} = (props.location && props.location.state) || {};

  // console.log(token)
  const history = useHistory()


const onClickNotes = () => {
  history.push(`/notes`)
}

const onClickImages = () => {
  history.push(`/images`)
}

const onClickLinks = () =>{
  history.push(`/links`)
}

const onClickToDos = () =>{
  history.push(`/todos`)
}


    return (
     
        
        <LandingPage 
        // token ={token} 
        // setToken ={setToken}
        // signOut ={signOut}
        onClickNotes = {onClickNotes}
        onClickImages ={onClickImages}
        onClickLinks = {onClickLinks}
        onClickToDos = {onClickToDos}
        />
        
    )
  }