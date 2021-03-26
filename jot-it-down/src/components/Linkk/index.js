import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Link, IconButton, CardActions, CardContent, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    color:"#333",
    backgroundColor:"#eee",
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
  },
  link: {
    fontSize: 14,
  },
  cover: {
    width: 40,
  },
  color:{
    fontSize: '18px'
  },
  cover: {
    padding: 0
  },
  timeStamp: {
    fontSize: '11px',
    marginTop: '15px'
  }
});

export default function Linkk({link, onLinkDelete}) {
  const classes = useStyles();return (<>
  <Typography className={classes.title} color="textSecondary" align="right">
    <div className={classes.timeStamp}>{link.createdTime}</div>
    
    </Typography> 
    <Card className={classes.root}>
      <CardContent className={classes.link}>
      <Link href={link.linkUrl} color="inherit">
      {link.linkUrl}
      </Link>
      </CardContent>
      <CardActions className={classes.cover}>
        <IconButton aria-label="delete">
          <DeleteIcon className={classes.color} onClick={() => onLinkDelete({linkId: link.linkId})}/>
          </IconButton>
          </CardActions>
          </Card>
          </>
          );
        }
