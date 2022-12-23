import React from "react";
import { default as CustomSwitch } from "./switch";

export default {
  title: "Form/SwitchButton",
  component: CustomSwitch,
};

const Template = (args) => <CustomSwitch {...args} />;

export const Switch = Template.bind({});
Switch.args = {
  name: "switch1",
  label: "Switch",
  checkedColor: "pink",
  bgColor: "lightgray",
};
