import React, { useEffect } from "react";
import * as S from "../../../form/form.styles";
import PropTypes from "prop-types";

const ToggleButton = (props) => {
  const { isSelected, right = "ON", left = "OFF", onClick } = props;

  useEffect(() => {}, [props.isSelected]);

  return (
    <>
      <S.ToggleButtonWrapper
        onClick={onClick}
        data-left={left}
        data-right={right}
        {...props}
      >
        <div className={`dialog-button ${isSelected ? "" : "disabled"}`}>
          {isSelected ? right : left}
        </div>
      </S.ToggleButtonWrapper>
    </>
  );
};

export default ToggleButton;

ToggleButton.prototype = {
  right: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  thumbLeftBgColor: PropTypes.string,
  thumbRightBgColor: PropTypes.string,
  thumbRightTextColor: PropTypes.string,
  thumbLeftTextColor: PropTypes.string,
};
