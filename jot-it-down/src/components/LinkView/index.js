import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, CardContent } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Linkk from '../Linkk'

const useStyles = makeStyles(() => ({
  root:{
width: "100%"
  },
  form: {
    display: "flex",
    width: "100%",
    height: "auto",
    margin: "2%"
  },
  textField: {
    width: "100%",
    backgroundColor:"#E7E3D4",
    color:"#B23850", 
  },
  icon:{
    color:"#B23850"
  },
  linkss: {
    width: "100%",
    overflowY: "scroll"
  }
}))

export default function LinkView({onAddLink, links, onLinkDelete}) {
  const classes = useStyles()
  const [link, setLink] = useState("")
  
  const submit = event => {
    event.preventDefault()
    onAddLink({linkUrl: link})
    setLink("")
  }
  
  return (
  <div className={classes.root}>
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
    <div><IconButton 
    type="submit" 
    ><AddIcon className={classes.icon} /></IconButton></div>
    </form>
    {!!links?
      <CardContent className={classes.linkss}>   
      {links.map(link => (
      <Linkk 
      key={link.linkId} 
      link={link} 
      onLinkDelete={onLinkDelete}></Linkk>
      ))}
      </CardContent>:""}
      </ div>
      )
    }