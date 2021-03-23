import React from 'react'
import { useHistory } from "react-router-dom"
import LandingPage from '../../components/LandingPage'

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
<LandingPage 
onClickNotes = {onClickNotes}
onClickImages ={onClickImages}
onClickLinks = {onClickLinks}
onClickToDos = {onClickToDos}
/>
)
}