import React from 'react'
import { useEffect, useState } from 'react'
import {getAllNotes} from '../../network'
import NewCollection from '../../components/NewCollection'

export default function CollectionPage() {
 
    const [collection, setCollection] = useState([])

    useEffect(()=> {
      (async () => {
        const res = JSON.parse(await getAllNotes())
          setCollection(res)
          console.log(res)
      })()
    },[])
  
   
    const onClick = async data =>{
      console.log("card clicked", data)
    }

    const postButtonClicked = async data => {
      console.log("post clicked", data)
    }
    const deleteClicked = async data => {
      console.log("delete clicked", data)
    }
    const editClicked = async data => {
      console.log("edit clicked", data)
    }
  
    return (
         <NewCollection 
            // key = {collection.noteId}
            data={collection} 
            type={"Notes"} 
            onClick ={onClick} 
            postButtonClicked = {postButtonClicked}
            deleteClicked ={deleteClicked}
            editClicked = {editClicked}
        />
    )
  }