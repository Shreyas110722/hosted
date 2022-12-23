import React from "react";
import CheckBox from "./checkbox";

export default {
  title: "Form/CheckBox",
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const SingleCheckbox = Template.bind({});
SingleCheckbox.args = {
  label: "CheckBox1",
  name: "checkbox1",
  disabled: false,
  unCheckedColor: "red",
  checkedColor: "green",
  indeterminate: false,
};

export const MultiCheckbox = (args) => (
  <div>
    <CheckBox
      {...args}
      label="Checkbox"
      name="Checkbox"
      unCheckedColor="red"
      checkedColor="green"
    />
    <CheckBox
      {...args}
      label="Checkbox1"
      name="Checkbox1"
      unCheckedColor="red"
      checkedColor="green"
    />
    <CheckBox
      {...args}
      label="Checkbox2"
      name="Checkbox2"
      unCheckedColor="red"
      checkedColor="green"
    />
  </div>
);
