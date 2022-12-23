import React from "react";
import RadioButton from "./radioButton";

export default {
  title: "Form/RadioButton",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const Radiobutton = Template.bind({});
Radiobutton.args = {
  unCheckedColor: "red",
  checkedColor: "green",
  disabled: false,
  title: "Radio Demo",
  data: [
    {
      id: 1,
      name: "radio1",
      label: "Radio1",
    },
  ],
  direction: "column",
};
const RadioButtons = [
  {
    id: 1,
    name: "radio1",
    label: "Radio1",
  },
  {
    id: 2,
    name: "radio2",
    label: "Radio2",
  },
  {
    id: 3,
    name: "radio3",
    label: "Radio3",
  },
];
export const MultiRadioButton = (args) => (
  <div>
    <RadioButton
      {...args}
      unCheckedColor="red"
      checkedColor="green"
      data={RadioButtons}
      direction="row"
    />
  </div>
);
