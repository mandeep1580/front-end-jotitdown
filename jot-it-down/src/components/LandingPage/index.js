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
    borderLeft: "2px solid grey"
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
  let selectedAppHeading = collections; //To be rendered from databases

// let selectedCollection = collections[0]; //To be rendered from databases
// const onCollectionClicked = () => (selectedCollection)

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
        <NewCollection
            cardClicked= {onCollectionClicked} 
            data= {selectedAppHeading} >
        </NewCollection>
        </div>
      </Grid>
      <Grid item xs={7}>
        <div className={classes.main}>
        {body}

{/* {
        (selectedType == "Notes")?
          <NoteDescription 
          name={details.name}
          description={details.description}>
          </NoteDescription>
        :
          <ImageView 
          onSubmit = {onImageSubmit}
           onDelete = {onImageDelete}
          images = {details} 
          onClick = {onImageClick}/>
        
      }


       */}

          {/* {if (selectedType === "Notes"){
            <NoteDescription 
            name={details.name}
            description={details.description}>
            </NoteDescription>
          }
          else{}
        } */}


        </div>
      </Grid>
    </Grid>
  );
}
