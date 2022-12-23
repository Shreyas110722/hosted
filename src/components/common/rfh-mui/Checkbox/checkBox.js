import { FormControlLabel, FormHelperText } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import { default as MuiCheckbox } from "../../mui/Checkbox/checkbox";
const CheckBox = (props) => {
  const { errors, control, name, label, ...rest } = props;
  return (
    <FormControlLabel
      control={
        <Controller
          control={control}
          render={({ field }) => (
            <>
              <MuiCheckbox
                {...field}
                {...rest}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                label={label}
              />

              <FormHelperText style={{ color: "red" }}>
                {errors[name] && errors[name]?.message}
              </FormHelperText>
            </>
          )}
        />
      }
      label={label}
      name={name}
    />
  );
};

export default CheckBox;
