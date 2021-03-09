import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container
} from "@material-ui/core";
import getCurrentDateTime from '../../util/getCurrentDateTime'


const useStyles = makeStyles((theme) => ({
  
}));

export default function NoteDescription({description}) {
  const classes = useStyles();

  return (
            <Container component="form" maxWidth="sm" >
            <p>{description}</p>
            </Container>
  );
}
