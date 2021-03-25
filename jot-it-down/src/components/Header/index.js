import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "./logo.png";
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import PanToolIcon from '@material-ui/icons/PanTool';


const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    zIndex:"10",
    margin:"0",
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '64px',
    alignItems: 'center'

  },
  applogo: {
    padding: '10px',
    width: '80px'
  },
  headertext: {
    fontSize: '13px', 
    fontWeight: 'bolder',
    textTransform: 'uppercase'
  }
});

export default function Header({user, titleClicked, logOutClicked}) {
  const classes = useStyles();
console.log(user)
  return (
    <AppBar className={classes.root} style={{backgroundColor: "#B23850"}}>
      <img src={logo} onClick={titleClicked} className={classes.applogo} alt="logo" />
        <span className={classes.headertext}>
            
        Good Morning! {user} 
              </span>
          <Button onClick={logOutClicked} color="inherit" className={classes.headertext}><SettingsPowerIcon /> &nbsp;Log out</Button>
      </AppBar>
  );
}
