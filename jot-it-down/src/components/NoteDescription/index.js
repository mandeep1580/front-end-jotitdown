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
    border: "1px solid #ddd",
    padding: "5px 25px",
    background: "#E5E3D3",
  },
  header: {
    textAlign: "left",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "bold",
    margin: "20px 0",
  },
}));

export default function NoteDescription({ name, description }) {
  const classes = useStyles();

  return (
    <Container component="form" maxWidth="sm" className={classes.desc}>
      <Typography className={classes.header}>{name}</Typography>
      <p>{description}</p>
    </Container>
  );
}
