import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppHeadings from "../AppHeadings";
import NewCollection from "../NewCollection"
import NoteDescription from "../NoteDescription"


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

export default function LandingPage({notes}) {
  const classes = useStyles();
  let selectedAppHeading = notes; //To be rendered from databases
  let selectedType = [];
  const onClickNotes = () => (selectedAppHeading= notes )
//   const onClickImages = () => (selectedCollection= images )
//   const onClickLinks = () => (selectedCollection= links )
//   const onClickTasks = () => (selectedCollection= tasks )

let selectedCollection = notes[0]; //To be rendered from databases
const onCollectionClicked = () => (selectedCollection)


return (
    <Grid container className={classes.root}>
       
      <Grid item xs={2}>
        <div className={classes.sidebar}>
            <AppHeadings name="Notes" onClick={onClickNotes} ></AppHeadings>
            <AppHeadings name= "Images"></AppHeadings>
            <AppHeadings name= "Links"></AppHeadings>
            <AppHeadings name= "To Do's"></AppHeadings>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.main}>
        <NewCollection
            onClick= {onCollectionClicked()} 
            data= {selectedAppHeading} >
        </NewCollection>
        </div>
      </Grid>
      <Grid item xs={7}>
        <div className={classes.main}>
            <NoteDescription 
            name={selectedCollection.name}
            description={selectedCollection.description}>
            </NoteDescription>

        </div>
      </Grid>
    </Grid>
  );
}
