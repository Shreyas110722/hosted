import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
const CustomSwitch = (props) => {
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: props.checkedColor || "lightgreen",
        "& + $track": {
          backgroundColor: props.bgColor || "lightgray",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: props.bgColor || "lightgray",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: props.bgColor || "lightgray",
      opacity: 1,
      transition: theme.transitions.create([
        "background-color",
        "border",
        "all",
      ]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={props.checked}
            onChange={props.onChange}
            name={props.name}
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
};
export default CustomSwitch;

CustomSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  checkedColor: PropTypes.string,
  bgColor: PropTypes.string,
};
