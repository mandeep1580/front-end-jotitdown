import React from 'react'
import {  useState } from 'react'
import LandingPage from '../../components/LandingPage'
// import Header from '../../components/Header'

export default function HomePage() {
 
  const [collections, setCollections] = useState([])
  const [details, setDetails] = useState([])
  const [selectedType, setSelectedType] = useState()
//   useEffect(()=> {
//     (async () => {
//       const res = JSON.parse(await getAllNotes())
//         setCollection(res)
//     })()
//   },[])

  // const onClickNotes = async() =>{
  //   const res = JSON.parse(await getAllNotes())
  //   setCollections(res)
  // }

  // const onClickImages = async() =>{
  //   const res = JSON.parse(await getAllImageAlbums())
  //   setCollections(res)
  // }

  // const onClickLinks = async() =>{
  //   const res = JSON.parse(await getAllLinkCollections())
  //   setCollections(res)
  // }

  // const onClickToDos = async() =>{
  //   const res = JSON.parse(await getAllToDosCollections() )
  //   setCollections(res)
  // }

  // const onCollectionClicked = async(data) =>{
  //   if (data.type == "Notes"){
  //     const result = (await getOneNote(data.collectionId))
  //     console.log(result)
  //     setDetails(result)
  //     setSelectedType(data.type)
  //   }

  //   else if (data.type == "Images"){
  //     const result = (await getAllImages({albumId:data.collectionId}))
  //     console.log(result)
  //     setDetails(result)
  //     setSelectedType(data.type)
  //   }
  // }

const onImageSubmit = () => {
  return "Image Added"
}
 

const onImageDelete = () => {
  return "Image Deleted"
}

const onImageClick = () =>{
  return "Image Clicked"
}
    return (
        <div>

        {/* <Header></Header> */}
        
        <LandingPage 
        collections = {collections}
        details = {details}
        selectedType ={selectedType}
        // onClickNotes = {onClickNotes}
        // onClickImages = {onClickImages}
        // onClickLinks = {onClickLinks}
        // onClickToDos = {onClickToDos}
        // onCollectionClicked = {onCollectionClicked}
        onImageSubmit = {onImageSubmit}
        onImageDelete = {onImageDelete}
        onImageClick = {onImageClick}
        />
        </div>
    )
  }