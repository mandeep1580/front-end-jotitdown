import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppHeadings from "../AppHeadings";
import NewCollection from "../NewCollection"
import NoteDescription from "../NoteDescription"
import ImageView from "../../components/ImageView"
import Listt from "../Listt";
import ListView from "../ListView";
import LinkView from "../LinkView";


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
  onListDelete,
  onImageInsert,
  details, 
  selectedType, 
  type,
  data,
  addNote,
  addCollection,
  onEditCollection,
  onCollectionDelete,
  onCollectionClicked,
  onClickNotes,
  onClickImages,
  onClickLinks,
  onClickToDos,
  onImageSubmit,
  onImageDelete,
  onImageClick,
  onDelete,
    onChange ,
    onEdit ,
    checked,
    onSubmit
}) {

  let body 
  const classes = useStyles();
  // const [type,setType] = useState("")
  // const [data, setData] = useState([])
  // const [selectedId, setSelectedId] = useState(0)
  // const [selectedType, setSelectedType] = useState("")
  // const [selectedData, setSelectedData] = useState([])
  
  // const clickCollection = (receivedType,receivedData,receivedId) => {
  //   console.log(receivedData)
  //   setSelectedId(receivedId)
  //   setSelectedType(receivedType)
  //   setSelectedData(receivedData)
  // }
// console.log(selectedType)
// console.log(selectedId)
// console.log(selectedData)
  if(selectedType === "notes"){
    body =
    <NoteDescription 
    name={details.name}
    description={details.description}>
    </NoteDescription>
  }
  else if(selectedType === "images"){
   body= <ImageView 
    onImageDelete = {onImageDelete}
    images = {details} 
    onClick = {onImageClick}
    onImageInsert = { onImageInsert}
    />
  }
  else if(selectedType === "links"){
    body=   <LinkView onSubmit
     links = {details}
     onDelete = {onDelete}
     onSubmit = {onSubmit}
     />
   }

   else if(selectedType === "todos"){
    body=   <ListView onSubmit
     lists = {details}
     onListDelete = {onListDelete}
     onChange = {onChange}
     onEdit = {onEdit}
     checked ={checked} 
     />
   }

  else {
    body = ""
  }


return (
    <Grid container className={classes.root}> 
      <Grid item xs={2}>
        <div className={classes.sidebar}>
        <AppHeadings name="Notes" onClick={onClickNotes} ></AppHeadings>
            <AppHeadings name= "Images" onClick={onClickImages}></AppHeadings>
            <AppHeadings name= "Links" onClick={onClickLinks}></AppHeadings>
            <AppHeadings name= "ToDos" onClick={onClickToDos}></AppHeadings>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.main}>
          <NewCollection 
          type= {type}
          addNote ={addNote}
          onCollectionClicked = {onCollectionClicked}
          onCollectionDelete = {onCollectionDelete}
          onEditCollection = {onEditCollection}
          addCollection = { addCollection}
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