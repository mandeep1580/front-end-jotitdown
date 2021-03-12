import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextareaAutosize,
  FormControl,
  Input,
  Typography,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Collection from "../Collection";
import {insertNote} from '../../network'


function getModalStyle() {
  const top = 50;
  const left = 50;

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
    right: 10,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth: 600,
    padding: 10,
    margin: "auto",
  },
  header: {
    textAlign: "left",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "bold",
    marginBottom: "20px",
    marginLeft: "12px",
  },
  modalInput: {
    border: "1px solid #ddd",
    height: "40px",
    paddingLeft: "10px",
    color: "#999",
    fontSize: "14px",
    marginBottom: "15px",
    outline: "none",
    "&::after": {
      transition: "none",
      border: "none",
    },
    "&::before": {
      transition: "none",
      border: "none",
    },
  },
  modalDescription: {
    border: "1px solid #ddd",
    paddingLeft: "10px",
    color: "#999",
    fontSize: "14px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    outline: "none",
  },
  postImage: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    "&:hover": {
      "& $modalInput": {
        boder: 0,
      },
    },
  },
  button: {
    marginTop: "15px",
    color: "#eee",
    background: "#B23850",
    textTransform: "capitalize",
    fontWeight: "bold",
    "&:hover": {
      color: "#fff",
      background: "#B23850",
    },
  },
}));

export default function NewCollection({
  // key,
 
  data,
  type,
  editClicked,
  cardClicked
}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let body;

  // const cardClicked = () => {
  //   <NoteDescription name={name} description={description} />
  // }

  const addNote = async () => {
      await insertNote(name, description)
      handleClose()
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  {
    type === "Notes"
      ? (body = (
          <div style={modalStyle} className={classes.paper}>
            <div
              className={classes.root}
            >
              <Typography className={classes.header}>Add New Note</Typography>

              <FormControl
                component="form"
                maxWidth="sm"
                className={classes.postImage}
                onSubmit={handleSubmit}
              >
                <Input
                  id="collection-name"
                  className={classes.modalInput}
                  defaultValue=""
                  value={name}
                  placeholder="Enter collection name"
                  onChange={(e) => setName(e.target.value)}
                />

                <TextareaAutosize
                  className={classes.modalDescription}
                  aria-label="minimum height"
                  rowsMin={3}
                  id="note-description"
                  placeholder="Note Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Button
                  color="primary"
                  className={classes.button}
                  onClick={addNote}
                >
                  Add new note
                </Button>
              </FormControl>
            </div>
          </div>
        ))
      : (body = (
          <div style={modalStyle} className={classes.paper}>
            <div
              className={classes.root}
            >
              <Typography className={classes.header}>
                Add New Collection
              </Typography>

              <FormControl
                component="form"
                maxWidth="sm"
                className={classes.postImage}
                onSubmit={handleSubmit}
              >
                <Input
                  id="collection-name"
                  className={classes.modalInput}
                  label="Collection Name"
                  defaultValue=""
                  variant="filled"
                  value={name}
                  placeholder="Enter collection name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Button
                  color="primary"
                  className={classes.button}
                  onClick={{msg:  "hello"}}
                >
                  Add collection
                </Button>
              </FormControl>
            </div>
          </div>
        ));
  }

  return (
    <div>
      <div>
        <AddCircleIcon
          className={classes.add}
          onClick={handleOpen}
        ></AddCircleIcon>
      </div>
      {!data
        ? ""
        : data.map((note) => (
            <Collection
              key = {note.noteId}
              type = "Notes"
              data = {note}
              editClicked={editClicked}
              cardClicked={cardClicked}
            ></Collection>
          ))}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="collection-name"
      >
        {body}
      </Modal>
    </div>
  );
}
