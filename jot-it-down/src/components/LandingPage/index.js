import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppHeadings from "../AppHeadings";
import NewCollection from "../NewCollection"
import NoteDescription from "../NoteDescription"
import ImageView from "../../components/ImageView"
import ListView from "../ListView";
import LinkView from "../LinkView";
import { useHistory, useLocation } from "react-router-dom";
import Header from '../../components/Header'
import {Auth}  from 'aws-amplify';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: "2px solid grey",
  },
  sidebar: {
    background: "#C4DBF6",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    marginTop: "63px"

    },
  main: {
    background: "#ffff",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    borderLeft: "2px solid grey",
    padding: "5px 10px",
    marginTop: "63px"

  },
  
  
}));

export default function LandingPage({
  onAddLink,
  onLinkDelete,
  onAddToDo,
  onListEdit,
  onChecked,
  onListDelete,
  onImageInsert,
  details, 
  selectedType, 
  type,
  data,
  addNote,
  addCollection,
  onEditCollection,
  onCollectionDelete,
  onCollectionClicked,
  onClickNotes,
  onClickImages,
  onClickLinks,
  onClickToDos,
  onImageDelete,
  onImageClick,
  token, setToken,signOut
}, ) {

  
const history = useHistory()
const location = useLocation();

// console.log(location.pathname)
// console.log(location.user)

const [user, setUser] = useState()
  
useEffect(()=> {
  checkUser();
},[])
 
  const checkUser = async () =>{
  try{
      const userinfo= await Auth.currentAuthenticatedUser()
      // console.log(userinfo)
      const sendUser = await Auth.currentUserInfo();
      const u = sendUser.username
      setUser(u)
      // debugger
      // // setToken(sendUser.username)
      // // console.log(token)
      // setSendUser(sendUser.username)
      // setFormType("signedIn")
  }catch(err){

  }
}
// console.log(user)
// const myuser = localStorage.getItem('CognitoIdentityServiceProvider.1is9n6evvrnv94l9ijcho43mnv.LastAuthUser')
// console.log(myuser)
// token = (location && location.token) || {};
//   setToken = (location && location.setToken) || {};
//   signOut = (location && location.signOut) || {};
//   console.log(token);

  let body 
  const classes = useStyles();
  if(selectedType === "notes"){
    body =
    <NoteDescription 
    name={details.name}
    description={details.description}>
    </NoteDescription>
  }
  else if(selectedType === "images"){
   body= <ImageView 
    onImageDelete = {onImageDelete}
    images = {details} 
    onClick = {onImageClick}
    onImageInsert = { onImageInsert}
    />
  }
  else if(selectedType === "links"){
    body=   <LinkView
     links = {details}
     onLinkDelete = {onLinkDelete}
     onAddLink = {onAddLink}
     />
   }

   else if(selectedType === "todos"){
    body=   <ListView 
    onAddToDo = {onAddToDo}
     lists = {details}
     onListDelete = {onListDelete}
     onChecked = {onChecked}
     onListEdit = {onListEdit}
     />
   }

  else {
    body = ""
  }

const titleClicked =() =>{
  history.push(`/home`)
}

return (
<div>
  <Header titleClicked={titleClicked} logOutClicked={signOut}/>

    <Grid container className={classes.root}> 
      <Grid item xs={2}>
        <div className={classes.sidebar}>
          {/* <h1>{token}</h1> */}
        <AppHeadings name="Notes" onClick={onClickNotes} ></AppHeadings>
            <AppHeadings name= "Images" onClick={onClickImages}></AppHeadings>
            <AppHeadings name= "Links" onClick={onClickLinks}></AppHeadings>
            <AppHeadings name= "ToDos" onClick={onClickToDos}></AppHeadings>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.main}>
          <NewCollection 
          user ={user}
          type= {type}
          addNote ={addNote}
          onCollectionClicked = {onCollectionClicked}
          onCollectionDelete = {onCollectionDelete}
          onEditCollection = {onEditCollection}
          addCollection = { addCollection}
          data= {data} >
        </NewCollection>
          {/* </div> */}
        </div>
      </Grid>
      <Grid item xs={7}>
        <div className={classes.main}>
        {body}
        </div>
      </Grid>
    </Grid>

    </div>
  );
}