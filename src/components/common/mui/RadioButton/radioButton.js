import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

export default function RadioButton(props) {
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     "& .MuiFormGroup-root": {
  //       flexDirection: props.direction || "column !important",
  //     },
  //     "& .MuiFormLabel-root.Mui-focused": {
  //       color: "gray",
  //     },
  //   },
  // }));

  const ColoredRadio = withStyles({
    root: {
      color: props.unCheckedColor || "red",
      "&$checked": {
        color: props.checkedColor || "red",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  return (
    <>
      <FormLabel component="legend">{props.title}</FormLabel>
      <RadioGroup
        onChange={props.onChange}
        value={props.defaultValue}
        row={props.direction === "row" ? true : false}
      >
        {props.data &&
          props.data.map((data) => {
            return (
              <FormControlLabel
                key={data.id}
                value={data.name}
                control={<ColoredRadio />}
                label={data.label}
                {...props}
              />
            );
          })}
      </RadioGroup>
    </>
  );
}

RadioButton.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  checkedColor: PropTypes.string,
  unCheckedColor: PropTypes.string,
  direction: PropTypes.string,
};
