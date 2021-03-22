import React, {useState, useEffect} from 'react'
import { Auth } from 'aws-amplify';
import BackgroundView from '../../components/BackgroundView';

export default function AuthPage({checkUser}) {
    const [formType, setFormType] = useState('signUp')
    const [ username,setUsername] = useState("")
       

        const checkUsers = async () =>{
        try{
          await Auth.currentAuthenticatedUser()
          await Auth.currentUserInfo();
      
            setFormType("signedIn")
        }catch(err){
            
        }
        
    }

      const signUp = async (data) => {
        try {
            // cognito register api
            await Auth.signUp({
                username:data.username,
                password:data.password,
                attributes:{
                    email: data.email
                }
            })
            setFormType("confirmSignUp")  
            setUsername(data.username)
          } catch (error){
              console.log("Error occured")
          }
    }

    async function confirmSignUp(data){

        try {
            await Auth.confirmSignUp(username, data.code);
            setFormType("signIn") 

          } catch (error) {
              console.log('error confirming sign up', error);
          }
    }
    async function signIn(data){
        try {
            await Auth.signIn(data.username, data.password);
            await checkUser ();
            setFormType("signedIn")  
            setUsername(data.username) 
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const onLoginClick = async() => {
      setFormType("signIn")
    }

    const onRegisterClicked = () => {
      setFormType("signUp")
    }
    useEffect(()=> {
      checkUsers();
  },[])

return (
    <div>
      <BackgroundView 
      formType = {formType}
      signUp = {signUp}
      onLoginClick = {onLoginClick}
      confirmSignUp = {confirmSignUp}
      onRegisterClicked = {onRegisterClicked}
      signIn = {signIn} 
      
      />
    </div>
)
}


