import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Auth, Hub}  from 'aws-amplify';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },

});

export default function ButtonAppBar({titleClicked, logOutClicked}) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(()=> {
    setAuthListener();
},[])
   
const setAuthListener = ()=>{
    Hub.listen('auth', (data) => {
        switch (data.payload.event) {
        case 'signOut':
              console.log('user signed out');
              history.push('/')
              break;
        default:
            break;
        }
      });
}

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#B23850"}}>
        <Toolbar >
          <Typography variant="h6" className={classes.title} onClick={()=> titleClicked()}>
            Jot It Down
          </Typography>
          <Button onClick={() => Auth.signOut()} color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
