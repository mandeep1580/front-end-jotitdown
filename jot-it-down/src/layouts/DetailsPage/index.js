import React from 'react'
import { useEffect, useState } from 'react'
import {getAllNotes} from '../../network'
import NewCollection from '../../components/NewCollection'
import NoteDescription from '../../components/NoteDescription'

export default function DetailsPage() {
 
    // const [collection, setCollection] = useState([])

    // useEffect(()=> {
    //   (async () => {
    //     const res = JSON.parse(await getAllNotes())
    //       setCollection(res)
    //   })()
    // },[])
  
   
    // const onClick = async data =>{
    //   console.log("card clicked", data)
    // }

    // const postButtonClicked = async data => {
    //   console.log("post clicked", data)
    // }
    // const deleteClicked = async data => {
    //   console.log("delete clicked", data)
    // }
    // const editClicked = async data => {
    //   console.log("edit clicked", data)
    // }
  
    return (

       <NoteDescription name="my notes" description="xyz" />
        //  <NewCollection 
        //     data={collection} 
        //     type={"Notes"} 
        //     onClick ={onClick} 
        //     postButtonClicked = {postButtonClicked}
        //     deleteClicked ={deleteClicked}
        //     editClicked = {editClicked}
        // />
    )
  }