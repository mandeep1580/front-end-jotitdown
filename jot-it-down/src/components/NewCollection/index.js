import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card, CardContent, CardHeader, Container, TextField, Button
} from "@material-ui/core";


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

export default function NewCollection({ type, postButtonClicked, closeClicked }) {
  const classes = useStyles();

  const [name, setName] = useState("");

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
                id="collection-name"
                label="Collection Name"
                defaultValue=""
                variant="filled"
                value={name}
                onChange = {(e) => setName(e.target.value)}
            />
                <Button color="primary" onClick={() => postButtonClicked({type: type, name: name, timestamp: Date.now()})}>Post</Button>
            </Container>
           
      </CardContent>
    </Card>
  );
}
