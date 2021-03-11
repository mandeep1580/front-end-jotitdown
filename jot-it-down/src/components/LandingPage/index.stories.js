import React from "react";
import LandingPage from "./index";
import getCurrentDateTime from "../../util/getCurrentDateTime";

const list = [{
    toDoId: "list1",
    toDoItem: "milk",
    toDoCollectionId: "listCollection1",
    completed: true,
    timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
  },
  {
    toDoId: "list1",
    toDoItem: "tea",
    toDoCollectionId: "listCollection1",
    completed: true,
    timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
  }]

  const link = [{
    linkId: "link1",
    linkUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    linkCollectionId: "linkCollection1",
    timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
  },
  {
    linkId: "link2",
    linkUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    linkCollectionId: "linkCollection1",
    timeStamp: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now())
  }]

  const Notes = [
    {
      noteId: 1,
      name: "note1",
      description:
        "Test ---- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      userId: 1,
      timeStamp: getCurrentDateTime(),
    },
    {
      noteId: 2,
      name: "note2",
      description:
        "Test1 ---- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      userId: 1,
      timeStamp: getCurrentDateTime(),
    },
  ];

  

export default {
  title: "LandingPage",
  component: LandingPage,
};

export const Default = () => <LandingPage  notes={Notes} />;
