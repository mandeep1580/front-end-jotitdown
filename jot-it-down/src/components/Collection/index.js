import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
  TextareaAutosize,
  FormControl,
  Input,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteNote,
  //  getOneNote, 
   updateNote} from '../../network'
import NoteDescription from "../NoteDescription";

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
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    background: "#E6E3D3",
    color: "#B23850",
    margin: "10px 0",
    boxShadow: "5px 5px 2px rgba(0,0,0,0.25)",
    "&:hover": {
      background: "#B23850",
      color: "#EEE",
      "& $cardTime": {
        fontSize: "12px",
        color: "#ccc",
      },
      "& $buttonIcon": {
        color: "#ddd",
      },
    },
  },
 
  buttonIcon: {
    fontSize: "20px",
    padding: "2px",
    color: "#B23850",
    "&:hover": {
      color: "#f00",
    },
  },
  cardTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  cardTime: {
    fontSize: "12px",
    color: "#B23850",
  },
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
  modalRoot: {
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



export default function Collection({
  type,
  data,
  editClicked,
  cardClicked
}) {
  const classes = useStyles();
  const [selectedId, setSelectedId] = useState(data.noteId)
  const [item,setItem] = useState({name:"",description:""})
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  let body;
  // const cardClicked = async () => {
  //   setSelectedId(data.noteId)
  //   const res = await getOneNote(selectedId)
  //   setItem(res)
  // }

  const onDelete = async () => {
    setSelectedId(data.noteId)
    console.log(selectedId)
    await deleteNote(data.noteId)
  }

  const onUpdate = async () => {
    await updateNote(data.noteId,name, description)
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
                className={classes.modalRoot}
              >
                <Typography className={classes.header}>Edit Note</Typography>
  
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
                    value={item.name}
                    placeholder="Enter collection name"
                    onChange={(e) => setName(e.target.value)}
                  />
  
                  <TextareaAutosize
                    className={classes.modalDescription}
                    aria-label="minimum height"
                    rowsMin={3}
                    id="note-description"
                    placeholder="Note Description"
                    value={item.description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Button
                    color="primary"
                    className={classes.button}
                    onClick={onUpdate}
                  >
                    Edit note
                  </Button>
                </FormControl>
              </div>
            </div>
          ))
        : (body = (
            <div style={modalStyle} className={classes.paper}>
              <div
                className={classes.modalRoot}
              >
                <Typography className={classes.header}>
                  Edit collection
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
                    Edit collection
                  </Button>
                </FormControl>
              </div>
            </div>
          ));
    }









  return (
    <div>
    <Card className={classes.root} >
      <CardActionArea className={classes.card} onClick={() => cardClicked({collectionId: data.id, type: data.collectionType})} >
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            className={classes.cardTitle}
            >
            {data.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.cardTime}
            >
            {data.createdTime}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <EditIcon
          className={classes.buttonIcon}
          onClick={handleOpen}
          ></EditIcon>

      
        <DeleteIcon
          className={classes.buttonIcon}
          onClick={onDelete}
          ></DeleteIcon>
      </CardActions>
    </Card>

    {/* <NoteDescription name={item.name} description={item.description} /> */}
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
