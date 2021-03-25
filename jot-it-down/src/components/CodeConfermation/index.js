import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
    padding: '15px 25px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.06)'
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1.2, 0, 1.6, 0),
  },
  title: {
    color: "#B23950"
    // background: "#eee"
  },
  input: {
    marginTop: '0',
  },
  input: {
    "& input": {
      background: "transparent",
      padding: "15px!important",
      maxHeight: '40px!important',
      borderRadius: '0px!important',
      fontSize: '14px',
      margin: 0,
    }
  },
  input: {
    "& label": {
      transform: 'translate(14px, 22px) scale(0.9)'
    }
  }
}));

export default function CodeConfermation({ confirmSignUp }) {
  const classes = useStyles();
  const [ code, setCode] = useState("")


  return (
    <Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Typography component="h1" variant="h5" className={classes.title}>
  Confirm Sign Up
</Typography>
<form className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth label="Enter Confirmation Code" name="code" autoComplete="username" autoFocus onChange={e => setCode(e.target.value)}/>
<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{backgroundColor: "#B23850", color: "white"}} onClick={(e)=>{e.preventDefault(); confirmSignUp({code:code})}}> Confirm </Button>
</form>
</div>
</Container>
  );
}