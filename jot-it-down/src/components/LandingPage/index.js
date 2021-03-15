import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppHeadings from "../AppHeadings";
import NewCollection from "../NewCollection"
import NoteDescription from "../NoteDescription"
import ImageView from "../../components/ImageView"
import {getAllImageAlbums, getAllNotes, getAllToDosCollections, getAllLinkCollections} from '../../network'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: "2px solid grey",
    marginTop: "50px"
  },
  sidebar: {
    background: "#C4DBF6",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    },
  main: {
    background: "#ffff",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    borderLeft: "2px solid grey",
    padding: "5px 10px"
  },
  
  
}));

export default function LandingPage({
  onImageSubmit,
  onImageDelete,
  onImageClick
}) {

  let body 
  const classes = useStyles();
  const [type,setType] = useState("")
  const [data, setData] = useState([])
  const [selectedType, setSelectedType] = useState("")
  const [selectedData, setSelectedData] = useState([])
  
  const clickCollection = (receivedType,receivedData) => {
    setSelectedType(receivedType)
    setSelectedData(receivedData)
  }

  if(selectedType == "Notes"){
    body =
    <NoteDescription 
    name={selectedData.name}
    description={selectedData.description}>
    </NoteDescription>
  }
  else if(selectedType == "Images"){
   body= <ImageView 
    onSubmit = {onImageSubmit}
     onDelete = {onImageDelete}
    images = {selectedData} 
    onClick = {onImageClick}/>
  }
  else {
    body = ""
  }

  const onClickNotes = async() =>{
    const res = JSON.parse(await getAllNotes())
    setType("Notes")
    setData(res)
  }

  const onClickImages = async() =>{
    const res = JSON.parse(await getAllImageAlbums())
    setType("Images")
    setData(res)
  }

  const onClickLinks = async() =>{
    const res = JSON.parse(await getAllLinkCollections())
    setType("Links")
    setData(res)
  }

  const onClickToDos = async() =>{
    const res = JSON.parse(await getAllToDosCollections() )
    setType("Todo")
    setData(res)
  }

return (
    <Grid container className={classes.root}> 
      <Grid item xs={2}>
        <div className={classes.sidebar}>
        <AppHeadings name="Notes" onClick={onClickNotes} ></AppHeadings>
            <AppHeadings name= "Images" onClick={onClickImages}></AppHeadings>
            <AppHeadings name= "Links" onClick={onClickLinks}></AppHeadings>
            <AppHeadings name= "To Do's" onClick={onClickToDos}></AppHeadings>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.main}>
          <NewCollection 
          type= {type}
          selectedData= {selectedData}
          selectedType = {selectedType}
          clickCollection = {clickCollection}
          data= {data} >
        </NewCollection>
          {/* </div> */}
        </div>
      </Grid>
      <Grid item xs={7}>
        <div className={classes.main}>
        {body}
        </div>
      </Grid>
    </Grid>
  );
}
