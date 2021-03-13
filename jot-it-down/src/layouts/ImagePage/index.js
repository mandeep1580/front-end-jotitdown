import React from 'react'
import { useEffect, useState } from 'react'
import { getAllImages} from "../../network"
import ImageView from "../../components/ImageView"



export default function ImagePage() {
const [details, setDetails] = useState([])



useEffect(() => {
    (async () => {
        const result =(await getAllImages({albumId: 1}))
        console.log(result)
        setDetails(result)
    })()
  }, [])


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
    <ImageView 
          onSubmit = {onImageSubmit}
           onDelete = {onImageDelete}
          images = {details} 
          onClick = {onImageClick}/>
)
}