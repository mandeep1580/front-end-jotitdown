import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import LandingPage from '../../components/LandingPage'
import {getAllNotes, deleteNote, updateNote, updateAlbum, updateToDoCollection,deleteAlbum, deleteToDoCollection, getAllImageAlbums, getAllLinkCollections, getAllToDosCollections} from '../../network'
import { useHistory } from "react-router-dom"

export default function CollectionPage() {
  const history = useHistory()
  const {collection} = useParams()
  const [type,setType] = useState("")
  const [dataa, setData] = useState([])
   
  
  useEffect(()=> {

    if (collection === "notes") {
    (async () => {
      const res = JSON.parse(await getAllNotes())
    setType("notes")
    setData(res)
    console.log(type)
    })()
  }

 else if (collection === "images") {
    (async () => {
      const res = JSON.parse(await getAllImageAlbums())
      setType("images")
      setData(res)
      console.log(type)
    })()
  }

  else if (collection === "links") {
    (async () => {
      const res = JSON.parse(await getAllLinkCollections())
    setType("links")
    setData(res)
    console.log(type)
    })()
  }

  else if (collection === "todos") {
    (async () => {
      const res = JSON.parse(await getAllToDosCollections() )
    setType("todos")
    setData(res)
    console.log(type)
    })()
  }

    
  },[])


  const onClickNotes = () => {
    window.location.href="/notes";
  }
  
  const onClickImages = () => {
    window.location.href="/images";
  }
  
  const onClickLinks = () =>{
    window.location.href="/links";
  }
  
  const onClickToDos = () =>{
    window.location.href="/todos";
  }

  const onCollectionClicked = async(data) =>{
    if (data.type == "notes"){
      window.location.href=`/notes/${data.collectionId}`;
    }

    else if (data.type == "images"){
      window.location.href=`/images/${data.collectionId}`
    }
    else if (data.type == "links"){
      window.location.href=`/links/${data.collectionId}`
    }
    else if (data.type == "todos"){
      window.location.href=`/todos/${data.collectionId}`
    }
  }

  const onCollectionDelete = async (data) =>{
    if (data.type === "notes"){
      await deleteNote(data.collectionId)
    }else if(data.type === "images"){
      await deleteAlbum(data.collectionId)
    }else if(data.type==="todos"){
      await deleteToDoCollection(data.collectionId)
    }

  }


  const onEditCollection = async (data) => {
    if (data.type === "notes"){
      await updateNote(data.collectionId,data.name, data.description)
      } else if (data.type === "images"){
      await updateAlbum(data.collectionId,data.name)
      }else if (data.type === "todos"){
      await updateToDoCollection(data.collectionId,data.name)
      }
  }
    return (
      <LandingPage 
      type= {type}
      data= {dataa}
      onClickNotes = {onClickNotes}
onClickImages ={onClickImages}
onClickLinks = {onClickLinks}
onClickToDos = {onClickToDos} 
onCollectionClicked = {onCollectionClicked}
onCollectionDelete = {onCollectionDelete}
onEditCollection = {onEditCollection}
     
              />
    )
  }