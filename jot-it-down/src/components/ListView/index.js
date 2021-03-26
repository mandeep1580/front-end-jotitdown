import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, CardContent } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Listt from '../Listt'

const useStyles = makeStyles((theme) => ({
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
  textField: {
    width: "100%",
    color:"#B23850", 
  },
  icon:{
    color:"#B23850"
  },
  add: {
    color: "#b23850"
  },
  links: {
    padding: 0,
    marginTop: '20px'
  },
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
    <div className={classes.root}>
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
    >
      <AddCircleIcon
          className={classes.add}
        ></AddCircleIcon>
      
      </IconButton></div>
    </form>
    <div className="tasks">
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
      </div>
      </ div>
      )
    }