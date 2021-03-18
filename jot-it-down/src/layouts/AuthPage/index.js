import React, {useState, useEffect} from 'react'
import { Auth,Hub } from 'aws-amplify';
import { useHistory } from "react-router-dom"
import SignUp from '../../components/SignUp'
import HomePage from '../HomePage'
import Login from '../../components/Login'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import logo from "./logo.png";

// import useLocalStorage from "react-use-localstorage";


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
        background: "#C4DBF6",
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
  

export default function AuthPage() {
    const history = useHistory()
    const classes = useStyles();
    // const [ token,setToken ] = useLocalStorage("")
    const [formType, setFormType] = useState('signUp')
    const [ username,setUsername] = useState("")
    const [ password,setPassword] = useState("")
    const [ email,setEmail] = useState("")
    const [ code, setCode] = useState("")
    const [user, setUser] =useState(null)
    const [sendUser, setSendUser] = useState(null)


    useEffect(()=> {
        checkUser();
        // setAuthListener();
    },[])
       
    // const setAuthListener = ()=>{
    //     Hub.listen('auth', (data) => {
    //         switch (data.payload.event) {
    //         case 'signOut':
    //               console.log('user signed out');
    //               setFormType('signIn')
    //               break;
    //         default:
    //             break;
    //         }
    //       });

    // }
        const checkUser = async () =>{
        try{
            const userinfo= await Auth.currentAuthenticatedUser()
            console.log(userinfo)
            // setUser(userinfo)
            const sendUser = await Auth.currentUserInfo();
            setUser(sendUser.username)
            // setToken(sendUser.username)
            // console.log(token)
            setSendUser(sendUser.username)
            setFormType("signedIn")
        }catch(err){
            
        }
        // CognitoIdentityServiceProvider.1is9n6evvrnv94l9ijcho43mnv.LastAuthUser
        
    }
    // localStorage.setItem('username',user)

      const signUp = async (e) => {
          e.preventDefault();
        try {
            // cognito register api
            console.log(username,email)
            const signUpResponse = await Auth.signUp({
                username,
                password,
                attributes:{
                    email: email
                }
            })
            setFormType("confirmSignUp")  
          } catch (error){
              console.log("Error occured")
          }
    }

    async function confirmSignUp(e){
        e.preventDefault();

        try {
            await Auth.confirmSignUp(username, code);
            setFormType("signIn")  

          } catch (error) {
              console.log('error confirming sign up', error);
          }
    }
    async function signIn(e){
        e.preventDefault();

        try {
            const user = await Auth.signIn(username, password);
            setFormType("signedIn")  
        } catch (error) {
            console.log('error signing in', error);
        }
    }
    async function signOut(){
        Auth.signOut();
    }

    // const myuser = localStorage.getItem('username')
    // console.log(myuser)

return (
    <div>
         {
            formType === "signUp" && (
    <Grid container>
      <Grid item xs={3}>
        <div className={classes.sidebar}>
          <img src={logo} className={classes.applogo} alt="logo" />
        </div>
      </Grid>
      <Grid item xs={9}>
      <div className={classes.main}>
       
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                    Sign Up
                    </Typography>
                    <form className={classes.form} noValidate>
                    <TextField variant="outlined" margin="normal" required fullWidth label="User Name" name="username" autoComplete="username" autoFocus onChange={e => setUsername(e.target.value)}/>
                    <TextField variant="outlined" margin="normal" required fullWidth label="Email Id" name="email" autoComplete="email"  onChange={e => setEmail(e.target.value)} />
                    <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{backgroundColor: "#B23850", color: "white"}} onClick={signUp}> Sign Up </Button>
                    <Link  type= "login" variant="body2" onClick={()=>{setFormType("signIn")}}> Have an account? Log In </Link>
                    </form>
                </div>
                </Container>
        </div>
      </Grid>
    </Grid>
    )
    }
    {
       formType === "confirmSignUp" && (
        <Grid container>
        <Grid item xs={3}>
          <div className={classes.sidebar}>
            <img src={logo} className={classes.applogo} alt="logo" />
          </div>
        </Grid>
        <Grid item xs={9}>
        <div className={classes.main}>
         
        <Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Typography component="h1" variant="h5">
  Confirm Sign Up
</Typography>
<form className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth label="Enter Confirmation Code" name="code" autoComplete="username" autoFocus onChange={e => setCode(e.target.value)}/>
<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{backgroundColor: "#B23850", color: "white"}} onClick={confirmSignUp}> Confirm </Button>
</form>
</div>
</Container>
          </div>
        </Grid>
      </Grid>
       ) 
    }

{
formType === "signIn" && (
    <Grid container>
        <Grid item xs={3}>
          <div className={classes.sidebar}>
            <img src={logo} className={classes.applogo} alt="logo" />
          </div>
        </Grid>
        <Grid item xs={9}>
        <div className={classes.main}>
        <Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Typography component="h1" variant="h5">
  Sign In
</Typography>
<form className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth label="User Name" name="username" autoComplete="username" autoFocus onChange={e => setUsername(e.target.value)}/>
<TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)} />
<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{backgroundColor: "#B23850", color: "white"}} onClick={signIn}> Sign In </Button>
<Link  type= "login" variant="body2" onClick={()=>{setFormType("signUp")}}> New user? Register </Link>
</form>
</div>
</Container>
          </div>
        </Grid>
      </Grid>
)
}
{
    formType === "signedIn" && (
        history.push({
            pathname: '/home',
            user: sendUser,
            // token: token,
            // setToken: {setToken},
            signOut: {signOut}
        })
        // <div>
        // <button onClick={() => Auth.signOut()}>SignOut</button>
        // {/* {history.push('/home')} */}
        //     <HomePage username={sendUser}/>
        // </div>
    )
}

    </div>
)
}


