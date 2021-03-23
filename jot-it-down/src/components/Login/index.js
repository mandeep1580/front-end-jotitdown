import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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

export default function LogIn({onRegisterClicked, signIn}) {
  const classes = useStyles();
  const [ username,setUsername] = useState("")
    const [ password,setPassword] = useState("")

  return (

    <Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Typography component="h1" variant="h5">
  Sign In
</Typography>
<form className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth label="User Name" name="username" autoComplete="username" autoFocus onChange={e => setUsername(e.target.value)}/>
<TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} />
<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{backgroundColor: "#B23850", color: "white"}} onClick={(e)=>{e.preventDefault(); signIn({username:username, password:password})}}> Sign In </Button>
<Link  type= "login" variant="body2" onClick= {onRegisterClicked}> New user? Register </Link>
</form>
</div>
</Container>
);
}