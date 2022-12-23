import React from "react";

import { UiMethodlogystyles as S } from "../../styles";

// import {makeStyle} from "@material-ui/core/styles";

export default function UiMethodology(props) {
  const { no, name, overlayText } = props;
  return (
    <>
      <S.Content>
        <S.No>{no}</S.No>

        <S.Text>
          {name}
          <S.TextOverlay>
            {overlayText}
            {/* First level scope discussion
            <br />
            and target definition forms
            <br /> the base of our process */}
          </S.TextOverlay>
        </S.Text>
      </S.Content>
    </>
  );
}
