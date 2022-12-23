import React from "react";
import { default as Toggle } from "./toggleButton";

export default {
  title: "Form/SwitchButton",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const ToggleButton = () => {
  const [toggleState, setToggleState] = React.useState(false);
  const handleToggleChange = () => {
    setToggleState(!toggleState);
  };
  return (
    <Template
      left="OFF"
      right="ON"
      isSelected={toggleState}
      onClick={handleToggleChange}
      bgColor="gray"
      thumbLeftBgColor="lightyellow"
      thumbRightBgColor="orange"
      thumbLeftTextColor="pink"
      thumbRightTextColor="blue"
    />
  );
};
