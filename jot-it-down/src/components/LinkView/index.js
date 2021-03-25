import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, CardContent } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Linkk from '../Linkk'
import AddCircleIcon from "@material-ui/icons/AddCircle";


const useStyles = makeStyles(() => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    width: '100%',
    padding: '30px 20px 100px',
    boxShadow: '0 0 5px rgba(0,0,0,0.06)',
    minHeight: 'calc(100vh - 130px)',
    boxSizing: 'border-box'
  },
  form: {
    display: 'flex',
    alignItems: 'center'
  },
  tasks: {

  },
  textField: {
    width: "100%",
    color:"#B23850", 
  },
  icon:{
    color:"#B23850"
  },
  linkss: {
    padding: 0,
    marginTop: '20px'
  },
  add: {
    color: "#b23850"
  },
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
    ><AddCircleIcon
          className={classes.add}
        ></AddCircleIcon> </IconButton></div>
    </form>
    <div className="tasks">
    {!!links?
      <CardContent className={classes.linkss}>   
      {links.map(link => (
      <Linkk 
      key={link.linkId} 
      link={link} 
      onLinkDelete={onLinkDelete}></Linkk>
      ))}
      </CardContent>:""}
      </div>
      </ div>
      )
    }
    