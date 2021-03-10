import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.png";
import NoteDescription from "../NoteDescription";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sidebar: {
    background: "#b23850",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    background: "#C4DBF6",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  applogo: {
    width: "200px",
  },
}));

export default function BackgroundView() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={3}>
        <div className={classes.sidebar}>
          <img src={logo} className={classes.applogo} alt="logo" />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div className={classes.main}>
          <NoteDescription />
        </div>
      </Grid>
    </Grid>
  );
}
