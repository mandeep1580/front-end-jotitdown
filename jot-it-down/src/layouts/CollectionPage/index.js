import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import LandingPage from '../../components/LandingPage'
import {getAllNotes, insertNote, insertAlbum, insertToDoCollection, deleteNote, updateNote, updateAlbum, 
  updateToDoCollection,deleteAlbum, deleteToDoCollection, getAllImageAlbums, getAllLinkCollections, 
  getAllToDosCollections, deleteLinkCollection, updateLinkCollection, insertLinkCollection} from '../../network'

export default function CollectionPage() {
  const history = useHistory()
  const {collection} = useParams()
  const [type,setType] = useState("")
  const [dataa, setData] = useState([])

  const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.1is9n6evvrnv94l9ijcho43mnv.LastAuthUser')
// console.log(currentUser)
  
  useEffect(()=> {
    if (collection === "notes") {
      (async () => {
        const res = (await getAllNotes(currentUser))
        setType("notes")
        setData(res)
        console.log(type)
      })()
    }
    
    else if (collection === "images") {
      (async () => {
        const res = (await getAllImageAlbums(currentUser))
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
  },[collection])
  
  const onClickNotes = () => {
    history.push("/notes")
  }
  
  const onClickImages = () => {
    history.push("/images")
  }
  
  const onClickLinks = () =>{
    history.push("/links")
  }
  
  const onClickToDos = () =>{
    history.push("/todos")
  }

  const onCollectionClicked = async(data) =>{
    if (data.type === "notes"){
      history.push(`/notes/${data.collectionId}`)
    }

    else if (data.type === "images"){
      history.push(`/images/${data.collectionId}`)
    }
    else if (data.type === "links"){
      history.push(`/links/${data.collectionId}`)
    }
    else if (data.type === "todos"){
      history.push(`/todos/${data.collectionId}`)
    }
  }

  const onCollectionDelete = async (data) =>{
    if (data.type === "notes"){
      await deleteNote(data.collectionId)
    }else if(data.type === "images"){
      await deleteAlbum(data.collectionId)
    }else if(data.type==="todos"){
      await deleteToDoCollection(data.collectionId)
    }else if(data.type==="links"){
      await deleteLinkCollection(data.collectionId)
    }
  }
  
  const onEditCollection = async (data) => {
    if (data.type === "notes"){
      await updateNote(data.collectionId,data.name, data.description)
    } else if (data.type === "images"){
      await updateAlbum(data.collectionId,data.name)
    }else if (data.type === "todos"){
      await updateToDoCollection(data.collectionId,data.name)
    }else if (data.type === "links"){
      await updateLinkCollection(data.collectionId,data.name)
    }
  }

  const addNote = async (data) => {
    await insertNote(data.name, data.description, currentUser)
  }

  const addCollection = async(data) => {
    console.log(data)
    if (collection === "images"){
      await insertAlbum(data.name,currentUser)
    }
    else if (collection === "todos"){
      await insertToDoCollection(data.name)
    }
    else if (collection === "links"){
      await insertLinkCollection(data.name)
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
  addCollection = { addCollection}
  addNote = {addNote}
  />
  )
}