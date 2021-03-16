import React from 'react'
import { useEffect, useState } from 'react'
import LandingPage from '../../components/LandingPage'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import {getAllNotes, getAllImageAlbums,getAllToDos, deleteImage, getAllLinks, getAllLinkCollections, getAllToDosCollections, getOneNote, getAllImages} from '../../network'

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
    if(collection == "notes"){
      
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

      else if(collection == "images"){
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

      else if(collection == "links"){
        
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

      else if(collection == "todos"){
        
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


      const onImageDelete = async(data) => {
        await deleteImage(data.imageId, collectionid)
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
        />
    )
  }