import React from 'react'
import { useEffect, useState } from 'react'
import {getAllImageAlbums, getAllNotes, getAllToDosCollections, getAllLinkCollections} from '../../network'
import LandingPage from '../../components/LandingPage'

export default function HomePage() {
 
  const [collection, setCollection] = useState([])

//   useEffect(()=> {
//     (async () => {
//       const res = JSON.parse(await getAllNotes())
//         setCollection(res)
//     })()
//   },[])


  const onClickNotes = async() =>{
    const res = JSON.parse(await getAllNotes())
    setCollection(res)
  }

  const onClickImages = async() =>{
    const res = JSON.parse(await getAllImageAlbums())
    setCollection(res)
  }

  const onClickLinks = async() =>{
    const res = JSON.parse(await getAllLinkCollections())
    setCollection(res)
  }

  const onClickToDos = async() =>{
    const res = JSON.parse(await getAllToDosCollections() )
    setCollection(res)
  }
  

  
    return (
        <LandingPage 
        notes = {collection}
        onClickNotes = {onClickNotes}
        onClickImages = {onClickImages}
        onClickLinks = {onClickLinks}
        onClickToDos = {onClickToDos}
        />
        
    )
  }