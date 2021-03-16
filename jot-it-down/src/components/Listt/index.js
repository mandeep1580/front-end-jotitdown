import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, IconButton, CardActions, CardContent, Typography, Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 450,
    minHeight: 50,
    color:"#B23850",
    borderBottom: "1px", 
    margin: 20
  },
  title: {
    fontSize: 14,
    color:"#B23850",
    alignItems: "right"
  },
  list: {
    fontSize: 20,
    color:"#B23850",
    alignItems: "right"
  },
  container: {
    flex: '1 0 auto',
    width: 151,
  },
  cover: {
    width: 60,
  },
  color:{
    color:"#B23850"
  }
});

export default function Listt({list, onDelete, onChange, onEdit, checked}) {
  const classes = useStyles();
  const handleChange = () =>{
    onChange({toDoId: list.toDoId})
  }
  
  return (
  <>
  <Card className={classes.root}>
    <Checkbox
    checked={list.completed}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <CardContent className={classes.container}>
      <Typography className={classes.list} color="textSecondary">
        {list.toDoItem}
        </Typography> 
        </CardContent>
        <CardActions className={classes.cover}>
          <IconButton aria-label="delete">
            <EditIcon className={classes.color} onClick={() => onEdit({toDoId: list.toDoId})}/>
            <DeleteIcon className={classes.color} onClick={() => onDelete({toDoId: list.toDoId})}/>
            </IconButton>
            </CardActions>
            </Card>
            </>
            );
          }
