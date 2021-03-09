import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Card, CardContent } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Image from '../Image'

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    margin:30,
    justifyContent: "flex-end"
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  icon:{
    color:"#B23850"
  },
  images:{
    display: "flex",
    flexWrap: " wrap",
    flexDirection: "row",
  },
 
}))

export default function ImageView({onSubmit, onDelete, images, onClick}) {
  const classes = useStyles()
  const [item, setItem] = useState("")

  const submit = event => {
    event.preventDefault()
    onSubmit({imageUrl: item })
    setItem("")
  }

  return (
    <>
      <form onSubmit={submit} className={classes.form}>
        
        <div className={classes.buttonWrapper}><IconButton 
        type="submit" 
        ><AddIcon className={classes.icon}  /></IconButton></div>
      </form>
      <Card  >
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
      </Card>
      </>
  )
}