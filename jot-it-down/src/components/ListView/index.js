import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Card, CardContent } from '@material-ui/core'
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

export default function ListView({onSubmit, lists, onDelete, onChange, onEdit, checked}) {
  const classes = useStyles()
  const [item, setItem] = useState("")
  const submit = event => {
    event.preventDefault()
    onSubmit({todoItem: item })
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
    <Card>
      <CardContent className={classes.links}>   
      {lists.map(list => (
      <Listt 
      key={list.toDoId} 
      list={list} 
      onDelete={onDelete}
      onChange ={onChange} 
      onEdit = {onEdit}
      checked= {checked}></Listt>
      ))}
      </CardContent>
      </Card>
      </>
      )
    }