import React, {useState, useEffect} from 'react'
import LandingPage from '../../components/LandingPage'
import { Auth } from 'aws-amplify';
import { Link, useHistory } from "react-router-dom"
import SignUp from '../../components/SignUp'
import HomePage from '../HomePage'
import Login from '../../components/Login'


export default function AuthPage() {
    const [formType, setFormType] = useState('signUp')
    const [ username,setUsername] = useState("")
    const [ password,setPassword] = useState("")
    const [ email,setEmail] = useState("")
    const [ code, setCode] = useState("")
    
      const signUp = async () => {
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
            console.log(await Auth.currentUserInfo());
          } catch (error){
              console.log("Error occured")
          }
    }

    async function confirmSignUp(){
        try {
            await Auth.confirmSignUp(username, code);
            setFormType("signIn")  

          } catch (error) {
              console.log('error confirming sign up', error);
          }
    //    setFormState(() => ({...formState, formType:"signIn" }))  
    }
    async function signIn(){
        try {
            const user = await Auth.signIn(username, password);
            setFormType("signedIn")  

        } catch (error) {
            console.log('error signing in', error);
        }
    //    setFormState(() => ({...formState, formType:"signedIn" })) 
    }

return (
    <div>
        {
            formType === "signUp" && (
                <div>
                    <input name="username" onChange={e => setUsername(e.target.value)} placeholder="Username"/>
                    <input name="password"  type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                    <input name="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                    <button onClick={signUp}>SignUp</button>
                </div>
            )
        }
        {
            formType === "confirmSignUp" && (
                <div>
                    <input name="code" onChange={e => setCode(e.target.value)} placeholder="Enter Confirmation Code"/>
                    <button onClick={confirmSignUp}>Confirm SignUp</button>
                </div>
            )
        }
        {
            formType === "signIn" && (
                <div>
                <input name="username" onChange={e => setUsername(e.target.value)} placeholder="Username"/>
                <input name="password"  type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                <button onClick={signIn}>SignIn</button>
                </div>
            )
            
        }
        {
            formType === "signedIn" && <HomePage />
        }
    </div>
)
}