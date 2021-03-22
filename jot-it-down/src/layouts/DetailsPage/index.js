import React from 'react';
import { useEffect, useState } from 'react';
import LandingPage from '../../components/LandingPage';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import config from '../../config.json';
import {getAllNotes,updateToDoItem, insertToDoItem, insertImage, deleteToDoItem,getAllImageAlbums,
  getAllToDos, deleteImage, getAllLinks, getAllLinkCollections, getAllToDosCollections, getOneNote, 
  getAllImages, updateNote,insertNote, insertAlbum, insertToDoCollection, deleteNote, updateAlbum, 
  updateToDoCollection,deleteAlbum, deleteToDoCollection, deleteLink, deleteLinkCollection, updateLinkCollection,
  insertLinkCollection, insertLink} from '../../network'
  
  export default function DetailsPage() {
    const history = useHistory();
    const {collection, collectionid} = useParams()
    const [details, setDetails] = useState([])
    const [selectedType, setSelectedType] = useState([])
    const [type,setType] = useState("")
    const [data, setData] = useState([])
    const currentUser = localStorage.getItem(`CognitoIdentityServiceProvider.${config.cognito.APP_CLIENT_ID}.LastAuthUser`)
    
  const renderAllImages = async() => {
    const result = (await getAllImages({albumId:collectionid}))
          console.log(result)
          setDetails(result)
          setSelectedType("images")
    }
    const renderAllLinks = async() => {
      const result = (await getAllLinks({linkCollectionId:collectionid}))
          console.log(result)
          setDetails(result)
          setSelectedType("links")
    }

    const renderAllToDos = async() => {
      const result = (await getAllToDos({todoCollectionId:collectionid}))
      console.log(result)
      setDetails(result)
      setSelectedType("todos")
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
    
    useEffect(()=> {
      if(collection === "notes"){
        (async () => {
          const result = (await getOneNote({noteId:collectionid}))
          console.log(result)
          setDetails(result)
          setSelectedType("notes")
          const res = (await getAllNotes(currentUser))
          setType("notes")
          setData(res)
          console.log(type)
        })()
      }
      else if(collection === "images"){
        (async () => {
          renderAllImages()
          const res = (await getAllImageAlbums(currentUser))
          setType("images")
          setData(res)
          console.log(type)
        })()
      }
      
      else if(collection === "links"){
        (async () => {
          renderAllLinks()
          const res = (await getAllLinkCollections(currentUser))
          setType("links")
          setData(res)
          console.log(type)
        })()
      }
      
      else if(collection === "todos"){
        (async () => {
          renderAllToDos()
          const res = (await getAllToDosCollections(currentUser) )
          setType("todos")
          setData(res)
          console.log(type)
        })()
      }
    },[collection, collectionid])
    
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
    
    const onImageDelete = async(data) => {
      await deleteImage(data.imageId, collectionid)
      renderAllImages()
    }
    
    const onImageInsert = async(data) => {
      await insertImage(data.imageUrl, collectionid)
      renderAllImages()
    }
    
    const onListDelete = async(data) => {
      await deleteToDoItem(data.toDoId, collectionid)
      renderAllToDos()
    }
    
    const onChecked = async(data) => {
      await updateToDoItem(data.toDoItem, data.completed, data.toDoId, collectionid)
      renderAllToDos()
    }
    
    const onListEdit = async(data) => {
      await updateToDoItem(data.toDoItem, data.completed, data.toDoId, collectionid)
      renderAllToDos()
    }
    
    const onAddToDo = async(data) => {
      await insertToDoItem(data.todoItem, collectionid)
      renderAllToDos()
    }

    const onLinkDelete = async(data) => {
      await deleteLink(data.linkId, collectionid)
      renderAllLinks()
    }

    const onAddLink = async(data) => {
      await insertLink(data.linkUrl, collectionid)
      renderAllLinks()
    }
    
    const onCollectionDelete = async (data) =>{
      if (data.type === "notes"){
        await deleteNote(data.collectionId)
        history.push('/notes')
      }
      else if(data.type === "images"){
        await deleteAlbum(data.collectionId)
        history.push('/images')
      }
      else if(data.type==="todos"){
        await deleteToDoCollection(data.collectionId)
        history.push('/todos')
      }
      else if(data.type==="links"){
        await deleteLinkCollection(data.collectionId)
        history.push('/links')
      }
    }
    
    const onEditCollection = async (data) => {
      if (data.type === "notes"){
        await updateNote(data.collectionId,data.name, data.description)
        history.push('/notes')
      }
      else if (data.type === "images"){
        await updateAlbum(data.collectionId,data.name)
        history.push('/images')
      }
      else if (data.type === "todos"){
        await updateToDoCollection(data.collectionId,data.name)
        history.push('/todos')
      }
      else if (data.type === "links"){
        await updateLinkCollection(data.collectionId,data.name)
        history.push('/links')
      }
    }
    
    const addNote = async (data) => {
      await insertNote(data.name, data.description,currentUser)
      history.push('/notes')
    }
    
    const addCollection = async(data) => {
      console.log(data)
      if (collection === "images"){
        await insertAlbum(data.name,currentUser)
        history.push('/images')
      }
      
      else if (collection === "todos"){
        await insertToDoCollection(data.name,currentUser)
        history.push('/todos')
      }
      else if (collection === "links"){
        await insertLinkCollection(data.name,currentUser)
        history.push('/links')
      }
    }
    
    return (
    <LandingPage 
    data= {data}
    type = {type}
    onClickNotes = {onClickNotes}
    onClickImages ={onClickImages}
    onClickLinks = {onClickLinks}
    onClickToDos = {onClickToDos}
    onCollectionClicked = {onCollectionClicked}
    details = {details}
    selectedType ={selectedType}
    onImageDelete= {onImageDelete}
    onImageInsert = { onImageInsert}
    onListDelete = {onListDelete}
    onChecked = {onChecked}
    onListEdit = {onListEdit}
    onAddToDo = {onAddToDo}
    onLinkDelete = {onLinkDelete}
    onAddLink = {onAddLink}
    onCollectionDelete = {onCollectionDelete}
    onEditCollection = {onEditCollection}
    addCollection = { addCollection}
    addNote = {addNote}
    />
    )
  }