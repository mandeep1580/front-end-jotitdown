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

  },

  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CodeConfermation({ confirmSignUp }) {
  const classes = useStyles();
  const [ code, setCode] = useState("")


  return (
    <Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Typography component="h1" variant="h5">
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