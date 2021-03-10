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

export default function NoteDescription({ description }) {
  const classes = useStyles();

  return (
    <Container component="form" maxWidth="sm" className={classes.desc}>
      <Typography className={classes.header}>Add New Note</Typography>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum."
      </p>
      <p>{description}</p>
    </Container>
  );
}
