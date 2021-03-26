import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Image from '../Image'
import {
  CardContent,
  Input,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    margin: "5px",
    justifyContent: "flex-end",
    position: "relative"
  },
  icon:{
    color:"#B23850",
    position: "absolute",
    top: "10px",
    right: "10px"
  },
  images:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    boxSizing: 'border-box'
  },
  collectionaddIcon:{
    position: "absolute",
    top: 20,
    right: 20
  },
  collectionwrap:{
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    width: '100%',
    padding: '10px 50px 100px',
    boxSizing: 'border-box',
    boxShadow: '0 0 5px rgba(0,0,0,0.06)',
    minHeight: 'calc(100vh - 130px)',
  position: 'relative'
  },
  add: {
    color: "#b23850"
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
 
}))

export default function ImageView({ onImageDelete, images, onClick,  onImageInsert}) {
  const classes = useStyles()
  const [imageUrl, setImageUrl] = useState("")
  // const submit = event => {
  //   event.preventDefault()
  //   onSubmit({imageUrl: image })
  //   setImage("")
  // }


  return (
  
  <div  className={classes.collectionwrap}>
    <Typography className={classes.header}>Album Name</Typography>
    
   <div className={classes.collectionaddIcon}>
        <AddCircleIcon
          className={classes.add}
          onClick ={() => onImageInsert({imageUrl: imageUrl })}
        ></AddCircleIcon> 
      </div>
      {/* <Input
                  id="image"
                  // className={}
                  defaultValue=""
                  value={imageUrl}
                  placeholder="Enter Image Url"
                  onChange={(e) => setImageUrl(e.target.value)}
                /> */}
    
      {!!images? 
        <CardContent className={classes.images}>
             
        {images.map(image => (
        <Image 
        key={image.imageId} 
        image={image} 
        onImageDelete={onImageDelete}
        onClick = {onClick}>
        </Image>
        ))}
        </CardContent>
        :""}
        </div>
       
      
        )
      }