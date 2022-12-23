import React, { useEffect } from "react";
// import Parallax from "parallax-js";
import { SideLine } from "../../assets/svgicon/svgIcons";
import * as S from "./hero.styles";
// import { BackgroundAnimation } from "../../components/common";
// import Ball from "./Ball/ball";
function Hero({ data ,heroref}) {
  useEffect(() => {
    // var scene1 = document.getElementById("hero1");
    // new Parallax(scene1, {
    //   relativeInput: true,
    //   hoverOnly: true,
    // });
    // var head = document.getElementById("heroHead");
    // new Parallax(head, {
    //   relativeInput: true,
    //   hoverOnly: true,
    // });
  }, []);

  return (
    <S.Container ref={heroref}>
      {/* <BackgroundAnimation /> */}
      <S.MainWrapper>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.LeftContainer>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="heroHead">
                {/* <S.FirstHeadLayer data-depth="0.6">
                  {data?.heading}
                </S.FirstHeadLayer> */}
              </S.Head>
              <S.SecHeadLayer
                strings={[data?.heading, data.heading2, data.heading3]}
              ></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>
          <S.Content>
            <S.ContentHead>{data.caption}</S.ContentHead>
            <S.ContentText>{data?.subtext}</S.ContentText>
          </S.Content>
        </S.LeftContainer>
        {/* <S.RightContainer>
          <S.ImageWrapper1> */}
            {/* <div data-relative-input="true" id="hero1">
              <S.Image1
                data-depth="0.1"
                alt={data?.border?.description}
                src={data?.border?.url}
              />
              <S.Image2
                data-depth="0.4"
                alt={data?.yellowbackground?.description}
                src={data?.yellowbackground?.url}
              />
              <S.Image3
                data-depth="0.3"
                alt={data?.laptop?.description}
                src={data?.laptop?.url}
              />
              <S.Image4
                data-depth="0.6"
                alt={data?.border?.description}
                src={data?.border?.url}
              />
            </div>*/}
            {/* <Ball /> */}
          {/* </S.ImageWrapper1>
        </S.RightContainer> */}
      </S.MainWrapper>
    </S.Container>
  );
}

export default Hero;
