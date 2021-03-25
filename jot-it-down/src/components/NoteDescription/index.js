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
    padding: "5px 15px",
    width: '100%'
  },
  descwrap: {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    width: '80%',
    padding: '10px 50px 100px',
    boxShadow: '0 0 5px rgba(0,0,0,0.06)',
    minHeight: 'calc(100vh - 130px)'
  },
  header: {
    textAlign: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "bolder",
    fontSize: "20px",
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
    fontSize: "12.5px",
    lineHeight: '22px'
  }
}));

export default function NoteDescription({ name, description }) {
  const classes = useStyles();

  return (
    <Container component="form" className={classes.descwrap}>
      <div className={classes.desc}>
      <Typography className={classes.header}>{name}</Typography>
      <Typography className={classes.content}>{description}</Typography>
      </div>
    </Container>
  );
}
