import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
// import { Height } from "@material-ui/icons";
import * as S from "./dialogue.styles";
import { ServicePageIcon } from "../../../assets/svgicon/svgIcons";

import { AiOutlineCloseCircle } from "react-icons/ai"

const useStyles = makeStyles({
  dialog: {
    backgroundColor: "black",
    color: "white",
    width: "fit-Content",
    height: "fit-Content",
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: "black"
  },
}))(MuiDialogActions);

export default function ServiceDialogue(props) {
  const handleClose = () => {
    props.close();
  };

  const classes = useStyles();
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogContent className={classes.dialog}>
          <S.Container>
            <S.Heading>Services</S.Heading>
            <S.StrokeHead>Services</S.StrokeHead>

            <S.IconWrapper>
              <S.Icon>
                {" "}
                <ServicePageIcon />{" "}
              </S.Icon>
              <S.Name> {props.head} </S.Name>
            </S.IconWrapper>
            <S.Content>
              {props.content}
            </S.Content>
          </S.Container>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            onTouchEnd={handleClose}
            color="primary"
            className="focus:outline-none  bg-green-400 "
          >
            <IconButton
              aria-label="close"
              className="focus:outline-none text-4xl"
              onClick={handleClose}
              onTouchEnd={handleClose}

            >
              <AiOutlineCloseCircle fill="gold" fontSize="2rem" />
            </IconButton>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
