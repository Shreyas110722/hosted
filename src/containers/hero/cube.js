import React from "react";
import * as S from "./hero.styles";

const Cube = React.memo(() => {
  const boxes = [];
  for (let i = 0; i < 800; i++) {
    boxes.push(<S.Box key={i}></S.Box>);
  }

  return <React.Fragment>{boxes}</React.Fragment>;
});
export default Cube;
