import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppHeadings from "../AppHeadings";
import NewCollection from "../NewCollection"
import NoteDescription from "../NoteDescription"
import ImageView from "../../components/ImageView"
import ListView from "../ListView";
import LinkView from "../LinkView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: "2px solid grey",
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
    padding: "5px 10px",

  },
  
  
}));

export default function LandingPage({
  user,
  onAddLink,
  onLinkDelete,
  onAddToDo,
  onListEdit,
  onChecked,
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
  onImageDelete,
  onImageClick,
}, ) {


  let body 
  const classes = useStyles();
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
    body=   <LinkView
     links = {details}
     onLinkDelete = {onLinkDelete}
     onAddLink = {onAddLink}
     />
   }

   else if(selectedType === "todos"){
    body=   <ListView 
    onAddToDo = {onAddToDo}
     lists = {details}
     onListDelete = {onListDelete}
     onChecked = {onChecked}
     onListEdit = {onListEdit}
     />
   }

  else {
    body = ""
  }



return (
<div>

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
          user ={user}
          type= {type}
          addNote ={addNote}
          onCollectionClicked = {onCollectionClicked}
          onCollectionDelete = {onCollectionDelete}
          onEditCollection = {onEditCollection}
          addCollection = { addCollection}
          data= {data} >
        </NewCollection>
        </div>
      </Grid>
      <Grid item xs={7}>
        <div className={classes.main}>
        {body}
        </div>
      </Grid>
    </Grid>

    </div>
  );
}