import React from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { default as MuiTextField } from "../../mui/TextField/TextField";
const TextField = (props) => {
  const { errors, control, name, ...rest } = props;
  return (
    <Controller
      render={({ field }) => {
        return (
          <MuiTextField
            {...field}
            {...rest}
            name={name}
            onChange={field.onChange}
            error={Boolean(errors[name])}
            helperText={errors[name]?.message}
          />
        );
      }}
      control={control}
      name={name}
    />
  );
};

export default TextField;
TextField.propTypes = {
  name: PropTypes.string.isRequired,
};
