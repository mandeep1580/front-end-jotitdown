import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteNote, getOneNote} from '../../network'
import NoteDescription from "../NoteDescription";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
  button: {
    padding: 0,
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
});

export default function Collection({
  data,
  editClicked,
}) {
  const classes = useStyles();

  const [selectedId, setSelectedId] = useState(data.noteId)
  const [item,setItem] = useState()

  const cardClicked = async () => {
    setSelectedId(data.noteId)
    // console.log(selectedId)
    // const res = JSON.parse(await getOneNote(selectedId))
    const res = await getOneNote(data.noteId)
    setItem(res)
    console.log(item)
  }

  const onDelete = async () => {
    setSelectedId(data.noteId)
    console.log(selectedId)
    await deleteNote(data.noteId)
  }

  return (
    <Card className={classes.root} >
      <CardActionArea className={classes.card} onClick={cardClicked} >
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
          onClick={() => editClicked()}
        ></EditIcon>
        <DeleteIcon
          className={classes.buttonIcon}
          onClick={onDelete}
        ></DeleteIcon>
      </CardActions>
    </Card>
  );
}
