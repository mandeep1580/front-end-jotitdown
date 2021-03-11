import React from "react";
import AppHeadings from "./index";
import { actions } from "@storybook/addon-actions";

export default {
  title: "AppHeadings",
  component: AppHeadings,
};

const events = actions({
  onClick: "cardClicked"
});


// 4
export const Default = () => (
  <div>
  <AppHeadings name="Notes" {...events}/>
  </div>
);
