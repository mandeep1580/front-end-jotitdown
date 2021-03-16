import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardMedia, IconButton, Typography, CardHeader} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function Image({image, onImageDelete, onClick}) {
  const [show, setShow] = useState("none")
  const [opacity, setOpacity] = useState("1")
  const useStyles = makeStyles({
    root: {
      maxWidth: 145,
      margin:20
    },
    text:{
      color:"#B23850",
      fontSize:11,
    },
    color:{
      color:"#B23850"
    },
    header:{
      display: show,
      paddingTop:0,
      paddingLeft:110,
      position:"absolute",
      zIndex:'10'    
    },
    card:{   
      position:"relative",
    },
    imageOpacity:{
      opacity: opacity
    },
  });
  const classes = useStyles();
  const onMouseOver =()=>{
    setShow("block")
    setOpacity("0.3")
  }
  const onMouseOut = () => {
    setShow("none")
    setOpacity("1")
  }

  return (
  <Card className={classes.root}  onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
    <CardActionArea className={classes.card} >
      <CardHeader
      className={classes.header}
      action={
      <IconButton aria-label="delete">
        <CloseIcon className={classes.color} onClick={() => onImageDelete({imageId: image.imageId})}/>
        </IconButton>
        }
        />
        <CardMedia
        className={classes.imageOpacity}
        component="img"
        height="100"
        image={image.imageUrl}
        onClick={() => onClick({imageId: image.imageId})}
        />
          <Typography align="center" className={classes.text} variant="body3" component="p">
            {image.createdTime}
            </Typography>
            </CardActionArea>
            </Card>
            );
          }
