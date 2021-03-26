import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppHeadings from "../AppHeadings";
import NewCollection from "../NewCollection"
import NoteDescription from "../NoteDescription"
import ImageView from "../../components/ImageView"
import ListView from "../ListView";
import LinkView from "../LinkView";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LinkIcon from '@material-ui/icons/Link';
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles((theme) => ({
  root: { 
    display: 'flex',
    flexDirection: 'row'
  },
  sidebar: {
    background: "#484848",
    height: "100vh",
    border: 'none',
    width: '100%',
    paddingTop: '100px',
    },
  main: {
    background: "#fff",
    height: "100vh",
    borderLeft: "1px solid #bbb",
    overflow: "auto",
    padding: '80px 15px 50px 15px'

  },
  mainContent: {
    background: "#eee",
    height: "100vh",
    borderLeft: "1px solid #bbb",
    overflow: "auto",
    padding: '100px 20px 50px 20px',

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
      <Grid item xs={1}>
        <div className={classes.sidebar}>
        <AppHeadings name="Notes" onClick={onClickNotes} icon={<SpeakerNotesIcon />}></AppHeadings>
            <AppHeadings name= "Images" onClick={onClickImages} icon={<PhotoLibraryIcon />}></AppHeadings>
            <AppHeadings name= "Links" onClick={onClickLinks} icon={<LinkIcon />}></AppHeadings>
            <AppHeadings name= "ToDos" onClick={onClickToDos} icon={<ViewListIcon />}></AppHeadings>
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
      <Grid item xs={8}>
        <div className={classes.mainContent}>
        {body}
        </div>
      </Grid>
    </Grid>

    </div>
  );
}