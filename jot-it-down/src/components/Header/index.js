import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "./logo.png";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    position:"fixed",
    zIndex:"10",
    margin:"0"

  },
  title: {
    flexGrow: 1,
  },
  applogo: {
    width: "60px",
    paddingTop: "8px"
  },
  logOut:{
    fontSize: "10px",
    padding: "2px"
  },
  username:{
    fontSize: "12px"
  }

});

export default function Header({user, titleClicked, logOutClicked}) {
  const classes = useStyles();
console.log(user)
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#B23850"}}>
        <Toolbar >
          <Typography variant="h6" className={classes.title} onClick={titleClicked}>
           
          <img src={logo} className={classes.applogo} alt="logo" />
          </Typography>
          <p className={classes.username}>
            
        {user}
          </p>
          <Button onClick={logOutClicked} color="inherit" className={classes.logOut}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
