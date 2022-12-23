import React from "react";
import { Controller } from "react-hook-form";
import { default as CustomToggleButton } from "../../mui/Switch/toggleButton";
const ToggleButton = (props) => {
  const { control, name, setValue, getValues, ...rest } = props;
  return (
    <>
      <Controller
        render={({ field }) => (
          <CustomToggleButton
            isSelected={field.value}
            onClick={() => setValue(name, !getValues(name))}
            {...rest}
          />
        )}
        control={control}
        name={name}
      />
      {/* <p style={{ color: "red", fontSize: "0.75rem" }}>
        {errors[name] && errors[name]?.message}
      </p> */}
    </>
  );
};

export default ToggleButton;
