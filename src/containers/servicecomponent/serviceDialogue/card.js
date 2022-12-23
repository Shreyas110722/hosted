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

  // const headerData =[
  //     {
  //       menu:"UI & UX DESIGN THINKING",
  //       text:"STRATEGY MADE VISUAL"
  //     },
  //     {
  //       menu:"APP MAINTAINENCE",
  //       text:"ENSURE PERFORMANCE, SCALABILITY, AND RELIABILITY"
  //     },
  //     {
  //       menu:"WEB DEVELOPMENT",
  //       text:"BUILD ASSETS THAT DRIVE RESULTS"
  //     },
  //   {menu:"APP MAINTAINENCE",
  //   text:"ENSURE PERFORMANCE, SCALABILITY, AND RELIABILITY"
  // },
  // {
  //   menu:"APP MAINTAINENCE",
  //     text:"ENSURE PERFORMANCE, SCALABILITY, AND RELIABILITY"
  // },
  // {
  //   menu:"APP MAINTAINENCE",
  //     text:"ENSURE PERFORMANCE, SCALABILITY, AND RELIABILITY"
  // },
  // ]

  return (
    <S.Container>
      {/* <S.Heading>Services</S.Heading>

      <S.IconWrapper>
        <S.Icon>
          <img alt={data?.icon?.description} src={data?.icon?.url} />
        </S.Icon>
        <S.Name>
          {data.heading} {data.description}{" "}
        </S.Name>
      </S.IconWrapper>
      <S.Content> {data.content} </S.Content>
      <S.ButtonWrapper>
        <S.Button
          onClick={() => {
            window.open("about:blank", "_self");
            window.close();
          }}
        >
          Go Back
        </S.Button>
      </S.ButtonWrapper>
      <S.StrokeHead>Services</S.StrokeHead> */}

      <UiWebPage data={data} />
    </S.Container>
  );
}

const HOC = withRouter(Card);

export default HOC;
// export default Card
