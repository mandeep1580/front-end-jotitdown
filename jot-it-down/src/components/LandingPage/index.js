import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppHeadings from "../AppHeadings";
import NewCollection from "../NewCollection"
import NoteDescription from "../NoteDescription"
import ImageView from "../../components/ImageView"


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

export default function LandingPage({collections, 
  details, 
  selectedType, 
  onClickNotes, 
  onClickImages, 
  onClickLinks, 
  onClickToDos, 
  onCollectionClicked,
  onImageSubmit,
  onImageDelete,
  onImageClick
}) {

  let body 
  const classes = useStyles();

  if(selectedType == "Notes"){
    body =
    <NoteDescription 
    name={details.name}
    description={details.description}>
    </NoteDescription>
  }
  else if(selectedType == "Images"){
   body= <ImageView 
    onSubmit = {onImageSubmit}
     onDelete = {onImageDelete}
    images = {details} 
    onClick = {onImageClick}/>
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
            <AppHeadings name= "To Do's" onClick={onClickToDos}></AppHeadings>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.main}>
          {/* <div className={classes.middlePanel}> */}
          <NewCollection 
            cardClicked= {onCollectionClicked} 
            data= {collections} >
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
