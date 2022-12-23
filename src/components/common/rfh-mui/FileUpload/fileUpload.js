import { FormControl, FormHelperText } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import { default as CustomFileUpload } from "../../mui/FileUpload/fileUpload";
const FileUpload = (props) => {
  const { errors, control, name, ...rest } = props;
  // React.useEffect(() => {
  //   return () => {
  //
  //   };
  // }, [errors]);

  return (
    <FormControl fullWidth error={errors[name]}>
      <Controller
        render={() => (
          <CustomFileUpload
            name={name}
            {...rest}
            // getSubmitFiles={(obj) => props.getSubmitFiles(obj)}
          />
        )}
        name={name}
        control={control}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

export default FileUpload;
