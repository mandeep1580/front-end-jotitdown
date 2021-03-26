import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";
import SignUp from "../SignUp";
import Login from "../Login";
import CodeConfermation from "../CodeConfermation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sidebar: {
    background: "#b23850",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    background: "#eee",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  applogo: {
    width: "200px",
  },
}));

export default function BackgroundView({formType, signUp, onLoginClick, confirmSignUp, onRegisterClicked, signIn }) {
  const classes = useStyles();
  const history = useHistory()

  return (
    <Grid container>
    <Grid item xs={3}>
      <div className={classes.sidebar}>
        <img src={logo} className={classes.applogo} alt="logo" />
      </div>
    </Grid>
    <Grid item xs={9}>
    <div className={classes.main}>
      {formType === "signUp" &&
      <SignUp 
      signUp= {signUp}
      onLoginClick= {onLoginClick}/>}
      {formType === "confirmSignUp" &&
       <CodeConfermation 
       confirmSignUp={confirmSignUp} />}
       {formType === "signIn" && 
        <Login 
        onRegisterClicked={onRegisterClicked}
        signIn={signIn}/>}
        {
    formType === "signedIn" && (
      history.push('/home')
      // window.location.href = '/home'
    )
}
      </div>
    </Grid>
  </Grid>
  );
}
