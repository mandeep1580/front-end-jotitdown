import React from "react";
import Collection from "./index";
import { actions } from "@storybook/addon-actions";
import getCurrentDateTime from "../../util/getCurrentDateTime";

const Notes = [
  {
  noteId: 1,
  name: "note1",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  userId: 1,
  timeStamp: getCurrentDateTime()
},
{
noteId: 2,
  name: "note2",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  userId: 1,
  timeStamp: getCurrentDateTime()
},
]

export default {
  title: "Collection",
  component: Collection,
};

const events = actions({
  editClicked: "Edit Clicked",
  deleteClicked: "Delete Clicked",
});

// 4
export const Default = () => (
  <div>
  <Collection notes={Notes} {...events}></Collection>
  </div>
);