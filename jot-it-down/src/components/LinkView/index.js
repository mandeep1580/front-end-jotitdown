import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
  },
  textField: {
    flexGrow: 2,
    backgroundColor:"#E7E3D4",
    color:"#B23850", 
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  icon:{
    color:"#B23850"
  }
}))

export default function LinkView({onSubmit}) {
  const classes = useStyles()
  const [link, setLink] = useState("")

  const currentTime = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())

  const submit = event => {
    event.preventDefault()
    onSubmit({link: link, timeStamp: currentTime })
    setLink("")
  }

  return (
      <form onSubmit={submit} className={classes.form}>
        <TextField className={classes.textField} 
        value={link} 
        multiline 
        onChange={e => setLink(e.target.value)} 
        label="Add Link"
        rowsMax={4}
        variant="outlined"
        color = "secondary"
        ></TextField>
        <div className={classes.buttonWrapper}><IconButton 
        type="submit" 
        ><AddIcon className={classes.icon} /></IconButton></div>
      </form>
  )
}