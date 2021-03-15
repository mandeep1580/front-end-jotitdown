import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Image from '../Image'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
  TextareaAutosize,
  FormControl,
  Input,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    margin:30,
    justifyContent: "flex-end",
    position: "relative"
  },
  // buttonWrapper: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center"
  // },
  icon:{
    color:"#B23850",
    position: "absolute",
    top: "10px",
    right: "10px"
  },
  images:{
    display: "flex",
    flexWrap: " wrap",
    flexDirection: "row",
  },
  collectionaddIcon:{
    position: "absolute",
    top: 0,
    right: 0
  },
  collectionwrap:{
    width: "100%",
    position: "relative",
    paddingTop: "20px"
  },
 
}))

export default function ImageView({onSubmit, onDelete, images, onClick}) {
  const classes = useStyles()
  const [image, setImage] = useState("")
  const submit = event => {
    event.preventDefault()
    onSubmit({imageUrl: image })
    setImage("")
  }
  
  return (
  
  <div onSubmit={submit} className={classes.collectionwrap}>
   <div className={classes.collectionaddIcon}>
        <AddCircleIcon
          className={classes.add}
        ></AddCircleIcon> 
      </div>
    
      {!!images? 
        <CardContent className={classes.images}>
             
        {images.map(image => (
        <Image 
        key={image.imageId} 
        image={image} 
        onDelete={onDelete}
        onClick = {onClick}>
        
        </Image>
        ))}
        </CardContent>
        :""}
        </div>
      
        )
      }