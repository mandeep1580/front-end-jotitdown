import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import LandingPage from '../../components/LandingPage'
import config from '../../config.json'
import {getAllNotes, insertNote, insertAlbum, insertToDoCollection, deleteNote, updateNote, updateAlbum, 
  updateToDoCollection,deleteAlbum, deleteToDoCollection, getAllImageAlbums, getAllLinkCollections, 
  getAllToDosCollections, deleteLinkCollection, updateLinkCollection, insertLinkCollection} from '../../network'

export default function CollectionPage({user}) {
  const history = useHistory()
  const {collection} = useParams()
  const [type,setType] = useState("")
  const [dataa, setData] = useState([])

  const currentUser = localStorage.getItem(`CognitoIdentityServiceProvider.${config.cognito.APP_CLIENT_ID}.LastAuthUser`)
  const renderAllNotes = async () => {
    const res = (await getAllNotes(currentUser))
    setType("notes")
    setData(res)
    console.log(type)
  }

  const renderAllImages = async () => {
    const res = (await getAllImageAlbums(currentUser))
    setType("images")
    setData(res)
    console.log(type)
  }

  const renderAllLinks = async () => {
    const res = (await getAllLinkCollections(currentUser))
    setType("links")
    setData(res)
    console.log(type)
  }

  const renderAllToDos= async () => {
    const res = (await getAllToDosCollections(currentUser) )
    setType("todos")
    setData(res)
    console.log(type)
  }
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
      renderAllNotes()
    }else if(data.type === "images"){
      await deleteAlbum(data.collectionId)
      renderAllImages()
    }else if(data.type==="todos"){
      await deleteToDoCollection(data.collectionId)
      renderAllToDos()
    }else if(data.type==="links"){
      await deleteLinkCollection(data.collectionId)
      renderAllLinks()
    }
  }
  
  const onEditCollection = async (data) => {
    if (data.type === "notes"){
      await updateNote(data.collectionId,data.name, data.description)
      renderAllNotes()
    } else if (data.type === "images"){
      await updateAlbum(data.collectionId,data.name)
      renderAllImages()
    }else if (data.type === "todos"){
      await updateToDoCollection(data.collectionId,data.name)
      renderAllToDos()
    }else if (data.type === "links"){
      await updateLinkCollection(data.collectionId,data.name)
      renderAllLinks()
    }
  }

  const addNote = async (data) => {
    await insertNote(data.name, data.description, currentUser)
    renderAllNotes()
  }

  const addCollection = async(data) => {
    console.log(data)
    if (collection === "images"){
      await insertAlbum(data.name,currentUser)
      renderAllImages()
    }
    else if (collection === "todos"){
      await insertToDoCollection(data.name, currentUser)
      renderAllToDos()
    }
    else if (collection === "links"){
      await insertLinkCollection(data.name, currentUser)
      renderAllLinks()
    }
  }

  useEffect(()=> {
    if (collection === "notes") {
      renderAllNotes()
    }
    
    else if (collection === "images") {
      renderAllImages()
    }
    
    else if (collection === "links") {
      renderAllLinks()
    }
    
    else if (collection === "todos") {
      renderAllToDos()
    }
  },[collection])
  
  return (
  <LandingPage 
  user= {user}
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