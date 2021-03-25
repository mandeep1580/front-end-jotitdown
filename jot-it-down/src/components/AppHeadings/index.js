import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    color: '#fff',
    background: "transparent",
    margin: "1px 0",
    color: "#B23850",
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
    "&:active": {
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
  cardText: {
  },
  cardIcon: {
  },
  cardTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    alignItems: "center",
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'ceter',
    flexDirection: 'column',
    "& svg": {
      fontSize: "35px",
    },
  },
});

export default function AppHeadings(
  {icon , name, onClick}
) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card} onClick={onClick}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            className={classes.cardTitle}
          >
            <span className={classes.cardIcon}>{icon}</span>
            <span className={classes.cardText}>{name}</span>
             

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
