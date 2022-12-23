import { FormControl, FormHelperText } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import { default as MuiMultiSelect } from "../../mui/MultiSelect/multiSelect";
const MultiSelect = (props) => {
  const { errors, control, name = {}, ...rest } = props;
  return (
    <FormControl fullWidth>
      <Controller
        render={({ field }) => (
          <>
            <MuiMultiSelect
              error={errors[name] && true}
              onChange={(_, value) => field.onChange(value)}
              value={field.value}
              {...rest}
            />
            <FormHelperText style={{ color: "red" }}>
              {errors[name] && errors[name]?.message}
            </FormHelperText>
          </>
        )}
        name={name}
        control={control}
        // defaultValue={defaultValues}
      />
    </FormControl>
  );
};

export default MultiSelect;
