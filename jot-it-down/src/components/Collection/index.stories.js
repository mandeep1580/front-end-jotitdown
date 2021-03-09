import React from "react";
import Collection from "./index";
import { actions } from "@storybook/addon-actions";

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
  <Collection name="Collection note card 1 " {...events}></Collection>
  <Collection name="Collection note card 1 " {...events}></Collection>
  </div>
);