import { FormControl, FormHelperText, InputLabel } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import { default as MuiSelect } from "../../mui/Select/select";
const Select = (props) => {
  const { errors, control, options, name, label, ...rest } = props;
  return (
    <FormControl fullWidth error={errors[name]}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <>
            <MuiSelect
              // {...field}
              {...rest}
              data={options}
              value={field.value}
              onChange={field.onChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
          </>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default Select;
