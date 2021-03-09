import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card, CardContent, CardHeader, Container, TextField, Button, TextareaAutosize
} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import getCurrentDateTime from "../../util/getCurrentDateTime";



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  add: {
    position: "absolute",
    top: 10,
    right: 10
},
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth: 600,
    padding: 10,
    margin: "auto"
  },
  header: {
    textAlign: "center"
  },
postImage: {
    display: "flex",
    flexDirection: "column",
    margin: 10
  }
}));

export default function NewCollection({ type, postButtonClicked, closeClicked }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const currentTime = getCurrentDateTime();
  const [description, setDescription] = useState("");
let body;


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit =(e) => {
    e.preventDefault();
  }
  {type === "Notes" ? 
   body = (
    <div style={modalStyle} className={classes.paper}>
    <Card className={classes.root} onClose={() => closeClicked({message: ""})}>
      <CardHeader
        className={classes.header}
        title={"Add Note"}
      />
        <CardContent>
            <Container component="form" maxWidth="sm" className={classes.note} onSubmit={handleSubmit}>
             <TextField
                id="note-name"
                label="Note Name"
                defaultValue=""
                value={name}
                variant ="filled"
                onChange = {(e) => setName(e.target.value)}
            />
            <TextareaAutosize aria-label="minimum height" rowsMin={3} id="note-description"
                
                defaultValue="" placeholder="Note Description" value={description}
                onChange = {(e) => setDescription(e.target.value)} />
                <Button color="primary" onClick={() => postButtonClicked({name: name, description: description, timeCreated: getCurrentDateTime()})}>Add</Button>
            </Container>
           
      </CardContent>
    </Card>
    </div>
  ) :
  body = (
    <div style={modalStyle} className={classes.paper}>
      <Card className={classes.root} onClose={() => closeClicked({message: ""})}>
      <CardHeader
        className={classes.header}
        title={"Add New Collection"}
      />
        <CardContent>
            <Container component="form" maxWidth="sm" className={classes.postImage} onSubmit={handleSubmit}>
             <TextField
                id="collection-name"
                label="Collection Name"
                defaultValue=""
                variant="filled"
                value={name}
                onChange = {(e) => setName(e.target.value)}
            />
                <Button color="primary" onClick={() => postButtonClicked({type: type, name: name, timestamp: currentTime})}>Post</Button>
            </Container>
           
      </CardContent>
    </Card>
    </div>
    

  )
  }

  return (
    <div>
      <div >
        <AddCircleIcon className={classes.add} onClick={handleOpen}></AddCircleIcon>
    </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="collection-name"
        // aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    
  );
}
