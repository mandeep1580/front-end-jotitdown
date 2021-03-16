import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Image from '../Image'
import {
  CardContent,
  Input
} from "@material-ui/core";
import {insertImage} from '../../network'

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    margin:30,
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

export default function ImageView({onSubmit, onImageDelete, images, onClick, selectedId}) {
  const classes = useStyles()
  const [imageUrl, setImageUrl] = useState("")
  // const submit = event => {
  //   event.preventDefault()
  //   onSubmit({imageUrl: image })
  //   setImage("")
  // }


  const imageInsert = async () => {
    // event.preventDefault();
    await insertImage(imageUrl,selectedId)
  }

  return (
  
  <div  className={classes.collectionwrap}>
   <div className={classes.collectionaddIcon}>
        <AddCircleIcon
          className={classes.add}
          onClick ={imageInsert}
        ></AddCircleIcon> 
        {/* <Button onClick ={imageInsert }>Add image </Button> */}
      </div>
      <Input
                  id="image"
                  // className={}
                  defaultValue=""
                  value={imageUrl}
                  placeholder="Enter Image Url"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
    
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