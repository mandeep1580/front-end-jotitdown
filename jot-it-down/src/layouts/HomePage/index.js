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
const onEdit = () => {
  return "Image Added"
}
 

const onChange = () => {
  return "Image Deleted"
}

const onDelete = () =>{
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
        onDelete={onDelete}
    onChange ={onChange} 
    onEdit = {onEdit}
    checked= {true}
        />
        </div>
    )
  }