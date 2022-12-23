import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBox = (props) => {
  const { unCheckedColor, checkedColor } = { ...props };

  const ColoredCheckbox = withStyles({
    root: {
      color: unCheckedColor,
      "&$checked": {
        color: checkedColor,
      },
      "& .MuiFormControlLabel-root": {
        margin: 0,
        marginLeft: 0,
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <FormControlLabel
      control={<ColoredCheckbox {...props} name={props.name} />}
      style={{ margin: 0 }}
    />
  );
};

export default CheckBox;

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
};
