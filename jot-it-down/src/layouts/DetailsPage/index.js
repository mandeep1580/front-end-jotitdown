import React from 'react'
import { useEffect, useState } from 'react'
import LandingPage from '../../components/LandingPage'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import {getAllNotes,updateToDoItem, insertToDoItem, insertImage, deleteToDoItem,getAllImageAlbums,
  getAllToDos, deleteImage, getAllLinks, getAllLinkCollections, getAllToDosCollections, getOneNote, 
  getAllImages, updateNote,insertNote, insertAlbum, insertToDoCollection, deleteNote, updateAlbum, 
  updateToDoCollection,deleteAlbum, deleteToDoCollection, deleteLink, deleteLinkCollection, updateLinkCollection} from '../../network'
  
  export default function DetailsPage() {
    const history = useHistory();
    const {collection, collectionid} = useParams()
    const [details, setDetails] = useState([])
    const [selectedType, setSelectedType] = useState([])
    const [type,setType] = useState("")
    const [data, setData] = useState([])
    
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
    
    useEffect(()=> {
      if(collection === "notes"){
        (async () => {
          const result = (await getOneNote({noteId:collectionid}))
          console.log(result)
          setDetails(result)
          setSelectedType("notes")
          const res = JSON.parse(await getAllNotes())
          setType("notes")
          setData(res)
          console.log(type)
        })()
      }
      else if(collection === "images"){
        (async () => {
          const result = (await getAllImages({albumId:collectionid}))
          console.log(result)
          setDetails(result)
          setSelectedType("images")
          const res = JSON.parse(await getAllImageAlbums())
          setType("images")
          setData(res)
          console.log(type)
        })()
      }
      
      else if(collection === "links"){
        (async () => {
          const result = (await getAllLinks({linkCollectionId:collectionid}))
          console.log(result)
          setDetails(result)
          setSelectedType("links")
          const res = JSON.parse(await getAllLinkCollections())
          setType("links")
          setData(res)
          console.log(type)
        })()
      }
      
      else if(collection === "todos"){
        (async () => {
          const result = (await getAllToDos({todoCollectionId:collectionid}))
          console.log(result)
          setDetails(result)
          setSelectedType("todos")
          const res = JSON.parse(await getAllToDosCollections() )
          setType("todos")
          setData(res)
          console.log(type)
        })()
      }
    },[])
    
    const onCollectionClicked = async(data) =>{
      if (data.type === "notes"){
        window.location.href=`/notes/${data.collectionId}`;
        history.push('/notes')
      }
      
      else if (data.type === "images"){
        window.location.href=`/images/${data.collectionId}`
      }
      else if (data.type === "links"){
        window.location.href=`/links/${data.collectionId}`
      }
      else if (data.type === "todos"){
        window.location.href=`/todos/${data.collectionId}`
      }
    }
    
    const onImageDelete = async(data) => {
      await deleteImage(data.imageId, collectionid)
    }
    
    const onImageInsert = async(data) => {
      await insertImage(data.imageUrl, collectionid)
    }
    
    const onListDelete = async(data) => {
      await deleteToDoItem(data.toDoId, collectionid)
    }
    
    const onChecked = async(data) => {
      await updateToDoItem(data.toDoItem, data.completed, data.toDoId, collectionid)
    }
    
    const onListEdit = async(data) => {
      await updateToDoItem(data.toDoItem, data.completed, data.toDoId, collectionid)
    }
    
    const onAddToDo = async(data) => {
      await insertToDoItem(data.todoItem, collectionid)
    }

    const onLinkDelete = async(data) => {
      await deleteLink(data.linkId, collectionid)
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
      await insertNote(data.name, data.description)
      history.push('/notes')
    }
    
    const addCollection = async(data) => {
      console.log(data)
      if (collection === "images"){
        await insertAlbum(data.name)
        history.push('/images')
      }
      
      else if (collection === "todos"){
        await insertToDoCollection(data.name)
        history.push('/todos')
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
    onCollectionDelete = {onCollectionDelete}
    onEditCollection = {onEditCollection}
    addCollection = { addCollection}
    addNote = {addNote}
    
    />
    )
  }