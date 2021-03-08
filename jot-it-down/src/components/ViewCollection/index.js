import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    add: {
        position: "absolute",
        top: 10,
        right: 10
    }
  })
 
export default function ViewCollection() {
    const classes = useStyles()
  return (
    <div >
        <AddCircleIcon className={classes.add}></AddCircleIcon>
    </div>
  )
}
