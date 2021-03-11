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
    background: "#C4DBF6",
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
  },
  button: {
    padding: 0,
  },

  cardTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
});

export default function AppHeadings(
  {name, onClick}
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
            {name}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
