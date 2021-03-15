import React from 'react'
import {  useState } from 'react'
import LandingPage from '../../components/LandingPage'
// import Header from '../../components/Header'

export default function HomePage() {
 
  const [collections, setCollections] = useState([])
  const [details, setDetails] = useState([])
  const [selectedType, setSelectedType] = useState()

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
        onImageSubmit = {onImageSubmit}
        onImageDelete = {onImageDelete}
        onImageClick = {onImageClick}
        />
        </div>
    )
  }