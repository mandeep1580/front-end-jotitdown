import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },

});

export default function Header({titleClicked, logOutClicked}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#B23850"}}>
        <Toolbar >
          <Typography variant="h6" className={classes.title} onClick={titleClicked}>
            Jot It Down
          </Typography>
          <Button onClick={logOutClicked} color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
