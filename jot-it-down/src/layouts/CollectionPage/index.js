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
    })()
  },[])
  
   

  const postButtonClicked = async data => {
    console.log("post clicked", data)
  }
  const editClicked = async data => {
    console.log("edit clicked", data)
  }
  
    return (
         <NewCollection 
            data={collection} 
            type={"Notes"} 
            postButtonClicked = {postButtonClicked}
            editClicked = {editClicked}
        />
    )
  }