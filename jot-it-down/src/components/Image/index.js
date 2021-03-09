import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Typography, CardHeader} from '@material-ui/core';



export default function Image({image, onDelete, onClick}) {


    const [show, setShow] = useState("none")
    const [opacity, setOpacity] = useState("1")

    const useStyles = makeStyles({
      root: {
        maxWidth: 145,
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
    <Card className={classes.root}  onMouseEnter={onMouseOver}
    onMouseLeave={onMouseOut}>
        
      <CardActionArea className={classes.card} >
      <CardHeader
        className={classes.header}
        action={
            <IconButton aria-label="delete">
              <CloseIcon className={classes.color} onClick={() => onDelete({imageId: image.imageId})}/>
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
        <CardContent >
          
          <Typography  className={classes.text} variant="body3" component="p">
              {image.timeStamp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
