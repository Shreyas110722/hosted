import { FormControl, FormHelperText } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import { default as MuiRadioButton } from "../../mui/RadioButton/radioButton";
const RadioButton = (props) => {
  const { errors, control, options, name, ...rest } = props;
  return (
    <FormControl fullWidth error={errors[name]}>
      <Controller
        render={({ field }) => (
          <FormControl error={errors[name]}>
            <MuiRadioButton
              data={options}
              onChange={field.onChange}
              defaultValue={field.value}
              {...rest}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default RadioButton;
