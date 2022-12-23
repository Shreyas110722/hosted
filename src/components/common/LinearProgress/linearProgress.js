import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "0",
    height: "100%",
    width: "100%",
    borderRadius: "3rem",
    padding: "3rem",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#FFC400",
    },
  },
}));

const LinearIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default LinearIndeterminate;
