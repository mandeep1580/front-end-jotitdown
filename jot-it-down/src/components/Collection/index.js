import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonColor: {
    color: "#B23850",
  },
  card: {
    
  },
  cardAction: {

  }
});

export default function Collection({
  editClicked,
  deleteClicked,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card}>
        <CardContent >
          <Typography gutterBottom variant="h6" component="h3">
            {/* {collection.name} */}name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {collection.timestamp} */}time
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
          <Button size="small" color={classes.buttonColor} onClick={()=> editClicked()}>
            <EditIcon></EditIcon>
          </Button>
          <Button size="small" color={classes.buttonColor} onClick={()=> deleteClicked()}>
            <DeleteIcon></DeleteIcon>
          </Button>
        </CardActions>
    </Card>
  );
}
// {id: collection.id, name: collection.name}
// {id: collection.id, delete: collection.name}