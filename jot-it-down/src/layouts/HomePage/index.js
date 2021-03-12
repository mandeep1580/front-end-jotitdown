import React from 'react'
import { useEffect, useState } from 'react'
import {getAllImageAlbums, getAllNotes, getAllToDosCollections, getAllLinkCollections, getOneNote} from '../../network'
import LandingPage from '../../components/LandingPage'

export default function HomePage() {
 
  const [collections, setCollections] = useState([])
  const [details, setDetails] = useState([])
//   useEffect(()=> {
//     (async () => {
//       const res = JSON.parse(await getAllNotes())
//         setCollection(res)
//     })()
//   },[])


  const onClickNotes = async() =>{
    const res = JSON.parse(await getAllNotes())
    setCollections(res)
  }

  const onClickImages = async() =>{
    const res = JSON.parse(await getAllImageAlbums())
    setCollections(res)
  }

  const onClickLinks = async() =>{
    const res = JSON.parse(await getAllLinkCollections())
    setCollections(res)
  }

  const onClickToDos = async() =>{
    const res = JSON.parse(await getAllToDosCollections() )
    setCollections(res)
  }

  const onCollectionClicked = async(data) =>{
    if (data.type === "Notes"){
      const result = JSON.parse(await await getOneNote({noteId:data.collectionId}))
      setDetails(result)
    }
   
  }
  

  
    return (
        <LandingPage 
        collections = {collections}
        details = {details}
        onClickNotes = {onClickNotes}
        onClickImages = {onClickImages}
        onClickLinks = {onClickLinks}
        onClickToDos = {onClickToDos}
        onCollectionClicked = {onCollectionClicked}
        />
        
    )
  }