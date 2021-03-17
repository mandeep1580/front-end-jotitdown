import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, IconButton, CardActions, CardContent, Typography, Checkbox,Button, FormControl, Input} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from "@material-ui/core/Modal";


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
  root: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 450,
    minHeight: 50,
    color:"#B23850",
    borderBottom: "1px", 
    margin: 20
  },
  title: {
    fontSize: 14,
    color:"#B23850",
    alignItems: "right"
  },
  list: {
    fontSize: 20,
    color:"#B23850",
    alignItems: "right"
  },
  container: {
    flex: '1 0 auto',
    width: 151,
  },
  cover: {
    width: 60,
  },
  color:{
    color:"#B23850"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modelroot: {
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

export default function Listt({list, onListDelete, onChecked, onListEdit}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  let body;
  const handleChange = () =>{
    console.log( !(list.completed))
    onChecked({toDoId: list.toDoId, toDoItem: list.toDoItem, completed: !(list.completed), })
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

  body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        className={classes.modelroot}
      >
        <Typography className={classes.header}>Edit ToDo Item</Typography>

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
            placeholder="Enter ToDo Item"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            color="primary"
            className={classes.button}
            onClick={()=>{onListEdit({toDoId: list.toDoId, toDoItem: name, completed: list.completed }); handleClose();}}
          >
            Edit ToDo Item
          </Button>
        </FormControl>
      </div>
    </div>
  )
  
  return (
  <>
  <Card className={classes.root}>
    <Checkbox
    checked={list.completed}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <CardContent className={classes.container}>
      <Typography className={classes.list} color="textSecondary">
        {list.toDoItem}
        </Typography> 
        </CardContent>
        <CardActions className={classes.cover}>
          <IconButton aria-label="delete">
            {/* <EditIcon className={classes.color} onClick={() => onListEdit({toDoId: list.toDoId})}/> */}
            <EditIcon className={classes.color} onClick={handleOpen}/>
            <DeleteIcon className={classes.color} onClick={() => onListDelete({toDoId: list.toDoId})}/>
            </IconButton>
            </CardActions>
            </Card>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="collection-name"
      >
        {body}
      </Modal>
            </>
            );
          }
