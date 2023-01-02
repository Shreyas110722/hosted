import React, { useEffect } from "react";
// import { UiCardstyles as SS } from "../../../styles/UI page";

// import { CgArrowLongRightR } from "react-icons/cg";
import { FaHandPointRight } from "react-icons/fa";
import { TechonolyDetailStyles as S } from "../../../styles/Technology";
import { RecentWorkStyles as Ss } from "../../../styles/UI page";
import TechnologyDetails from "./DetailedView";
import AnimatedButton from "../../../components/common/button/animatedButton";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { detailedTechnology } from "../../../queries";
import Text from "../../../components/TextRotation/Text";
import { Navbar } from "../../../components/common";
import Parallax from "parallax-js";
export default function DetailedView() {
  const params = useParams();
  const { data } = useQuery(
    detailedTechnology,

    {
      variables: { params: params.heading },
    }
  );

  useEffect(() => {
    var scene = document.getElementById("technologyHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
  }, []);
  return (
    <>
      <S.Container>
        <Navbar />
        <S.Hero>
          <S.Header data-relative-input="true" id="technologyHead">
            <S.Firstheader data-depth="0.6">{params.heading}</S.Firstheader>
          </S.Header>
          <S.Secheader strings={[params.heading]}></S.Secheader>

          <Text data={data} />
          {data?.technologiesCollection?.items?.map((item) => {
            return item.main.map((main) => (
              <S.ImageContent>
                <S.ImageText>
                  <p>{main.heading}</p>

                  <S.SubText>{main.content}</S.SubText>
                </S.ImageText>
              </S.ImageContent>
            ));
          })}
        </S.Hero>
        <S.HeroContent>
          <TechnologyDetails data={data} />
        </S.HeroContent>

        <S.Reason>
          <S.ReasonImage></S.ReasonImage>
          <S.ReasonHeader>
            <h2>
              Why
              <div style={{ fontSize: "3rem" }}>INTERONE ?</div>
            </h2>
          </S.ReasonHeader>

          <S.ReasonList>
            <ul>
              {data?.technologiesCollection?.items?.map((item) => {
                return item?.reasons?.map((reason) => (
                  <li>
                    <FaHandPointRight />
                    {reason.list}
                  </li>
                ));
              })}
            </ul>
          </S.ReasonList>
        </S.Reason>

        <Ss.Question>
          <Ss.QuestionText>
            <p> Have A Question ? We Are Happy to Help</p>
          </Ss.QuestionText>
          <Link to={`/#contact`}>
            <AnimatedButton buttonname="Contact Us">Contact Us</AnimatedButton>
          </Link>
        </Ss.Question>
      </S.Container>
    </>
  );
}
