import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,Typography
} from "@material-ui/core";
import getCurrentDateTime from '../../util/getCurrentDateTime'


const useStyles = makeStyles((theme) => ({
  desc: {
    textAlign: "left",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "14px",
    color: "#555",
    lineHeight: "20px",
    border: "1px solid #ddd",
    padding: "5px 25px"
  },
  header: {
    textAlign: "left",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "bold",
    margin: "20px 0",
  },
}));

export default function NoteDescription({description}) {
  const classes = useStyles();

  return (
            <Container component="form" maxWidth="sm" className={classes.desc}>
               <Typography className={classes.header}
            >Add New Note</Typography>
            <p>{description}</p>
            </Container>
  );
}
