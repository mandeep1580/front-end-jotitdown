// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import React from 'react';
import CollectionPage from "./layouts/CollectionPage";


export default function App() {
  return (

    <CollectionPage />

    // <Router>
    //   <HeaderNavigation></HeaderNavigation>
    //   <main style={{marginTop: 100}}></main>
    //   <Switch>
    //     <Route path="/login">
    //     <LoginPage></LoginPage>
    //     </Route>
    //     <Route path="/profile">
    //       <p>profile</p>
    //     </Route>
    //     <Route path="/newPost">
    //       <CreatePostPage></CreatePostPage>
    //     </Route>
    //     <Route path="/posts/:postId">
    //       <PostDetailsPage></PostDetailsPage>
    //     </Route>
    //     <Route path="/">
    //       <PostsPage></PostsPage>
    //     </Route>
    //   </Switch>
    // </Router>
  )
}
