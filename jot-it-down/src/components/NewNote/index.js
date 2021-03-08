import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card, CardContent, CardHeader, Container, TextField, Button, TextareaAutosize
} from "@material-ui/core";
import getCurrentDateTime from '../../util/getCurrentDateTime'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 10,
    margin: "auto"
  },
  header: {
    textAlign: "center"
  },
  tabs: {
    margin: "auto"
  },
  camera: {
    textAlign: "left",
    paddingBottom: 10
  },
postImage: {
    display: "flex",
    flexDirection: "column",
    margin: 10
  }
}));

export default function NewNote({postButtonClicked, closeClicked }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
  }


  return (
    <Card className={classes.root} onClose={() => closeClicked({message: ""})}>
      <CardHeader
        className={classes.header}
        title={"Add New Collection"}
      />
        <CardContent>
            <Container component="form" maxWidth="sm" className={classes.postImage} onSubmit={handleSubmit}>
             <TextField
                id="note-name"
                label="Note Name"
                defaultValue=""
                value={name}
                onChange = {(e) => setName(e.target.value)}
            />
            <TextareaAutosize aria-label="minimum height" rowsMin={3} id="note-description"
                
                defaultValue="" placeholder="Note Description" value={description}
                onChange = {(e) => setDescription(e.target.value)} />
                <Button color="primary" onClick={() => postButtonClicked({name: name, description: description, timeCreated: getCurrentDateTime()})}>Post</Button>
            </Container>
           
      </CardContent>
    </Card>
  );
}
