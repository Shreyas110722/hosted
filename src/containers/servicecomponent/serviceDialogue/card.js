import React from "react";
import * as S from "./card.styles";
import UiWebPage from "../../../components/interoneUIPage/UIpage";
import { withRouter } from "react-router-dom";

function Card() {
  const [data, setData] = React.useState(
    JSON.parse(localStorage.getItem("service"))
  );
  React.useEffect(() => {
    setData(JSON.parse(localStorage.getItem("service")));
  }, []);


  return (
    <S.Container>
      <UiWebPage data={data} />
    </S.Container>
  );
}

export default withRouter(Card);

