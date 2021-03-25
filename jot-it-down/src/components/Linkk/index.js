import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Link, IconButton, CardActions, CardContent, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: 475,
    minHeight: 50,
    color:"#B23850",
    backgroundColor:"#E7E3D4"
  },
  title: {
    fontSize: 14,
    color:"#B23850",
    alignItems: "right"
  },
  link: {
    flex: '1 0 auto',
    width: "140px",
  },
  cover: {
    width: 40,
  },
  color:{
    color:"#B23850"
  }
});

export default function Linkk({link, onLinkDelete}) {
  const classes = useStyles();return (<>
  <Typography className={classes.title} color="textSecondary" align="right">
    {link.createdTime}
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
