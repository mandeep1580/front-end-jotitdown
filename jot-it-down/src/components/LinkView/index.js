import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import {  Card, CardContent} from '@material-ui/core'


import LinkForm from '../LinkForm'
import Linkk from '../Linkk'

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        height: 400,
        display: "flex",
      },
      container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
      },
      linkForm: {
        margin:20
      },
    
      links: {
        width: "100%",
        overflowY: "scroll"
      }
})

export default function PostDetails({post,submitComment, deleteLink}) {


const classes = useStyles()

  const onComment = data => {
    submitComment({timeStamp: data.timeStamp, link: data.link})
  }

  const onDelete = data =>{
      deleteLink({linkId: data.linkId})
  }

return (
<Card className={`${classes.root}`}>
<div className={classes.container}>
    <div className={classes.linkForm}>
                <LinkForm  onSubmit={onComment}></LinkForm>
                </div>
      <CardContent className={classes.links}>   
      {post.map(link => (
      <Linkk key={link.linkId} link={link} onDelete={onDelete}></Linkk>
      ))}
      </CardContent>
      </div>
     
            
                </Card>
                )
              }