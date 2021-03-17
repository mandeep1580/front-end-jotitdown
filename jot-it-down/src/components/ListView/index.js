import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, CardContent } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Listt from '../Listt'

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    margin:30
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

export default function ListView({onAddToDo, lists, onListDelete, onChecked, onListEdit}) {
  const classes = useStyles()
  const [item, setItem] = useState("")
  const submit = event => {
    event.preventDefault()
    onAddToDo({todoItem: item })
    setItem("")
  }
  return (
  <>
  <form onSubmit={submit} className={classes.form}>
    <TextField className={classes.textField} 
    value={item} 
    multiline 
    onChange={e => setItem(e.target.value)} 
    label="Add new task"
    rowsMax={4}
    variant="outlined"
    color = "secondary"
    ></TextField>
    <div className={classes.buttonWrapper}><IconButton 
    type="submit" 
    ><AddIcon className={classes.icon} /></IconButton></div>
    </form>
    {!!lists?
      <CardContent className={classes.links}>   
      {lists.map(list => (
      <Listt 
      key={list.toDoId} 
      list={list} 
      onListDelete={onListDelete}
      onChecked = {onChecked}
      onListEdit = {onListEdit}></Listt>
      ))}
      </CardContent>:""}
      </>
      )
    }