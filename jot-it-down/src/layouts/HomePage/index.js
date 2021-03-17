import React from 'react'
import LandingPage from '../../components/LandingPage'
import { useHistory } from "react-router-dom"

export default function HomePage() {
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
        <div>
        
        <LandingPage 

onClickNotes = {onClickNotes}
onClickImages ={onClickImages}
onClickLinks = {onClickLinks}
onClickToDos = {onClickToDos}
        />
        </div>
    )
  }