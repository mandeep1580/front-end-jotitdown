import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  desc: {
    textAlign: "left",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "14px",
    color: "#555",
    lineHeight: "20px",
    border: "1px solid #eee",
    padding: "5px 15px",
    


    // background: "#E5E3D3",
  },
  descwrap: {
    width: '500px',
    minHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    textAlign: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "bold",
    fontSize: "14px",
    margin: "0 0",
    paddingTop: "30px",
    paddingBottom: "20px",
    color: "#555"
  },
  content:{
    padding: "10px",
    textAlign: "left",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    margin: "0 0",
    fontSize: "11px",
  }
}));

export default function NoteDescription({ name, description }) {
  const classes = useStyles();

  return (
    <Container component="form" maxWidth="sm" className={classes.descwrap}>
      <div className={classes.desc}>
      <Typography className={classes.header}>{name}</Typography>
      <Typography className={classes.content}>{description}</Typography>
      </div>
    </Container>
  );
}
