import React from "react";
import { Controller } from "react-hook-form";
import { default as MuiSwitch } from "../../mui/Switch/switch";
const Switch = (props) => {
  const { name, control, ...rest } = props;
  return (
    <Controller
      render={({ field }) => (
        <MuiSwitch
          {...field}
          {...rest}
          checked={field.value}
          onChange={(e) => field.onChange(e.target.checked)}
        />
      )}
      control={control}
      name={name}
    />
  );
};

export default Switch;
