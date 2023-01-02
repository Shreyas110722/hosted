import React, { useEffect } from "react";
import { SideLine } from "../../assets/svgicon/svgIcons";
import Cube from "./cube";
import * as S from "./hero.styles";
function Hero({ data, heroref }) {
  useEffect(() => {}, []);

  return (
    <S.Container ref={heroref}>
      <S.Cubediv>
        <Cube />
      </S.Cubediv>
      <S.MainWrapper>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.LeftContainer>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="heroHead"></S.Head>
              <S.SecHeadLayer
                strings={[data?.heading, data.heading2, data.heading3]}
              ></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>
          <S.Content>
            <S.TextTranslate>
              <S.Translate>
                <S.ContentText>{data?.subtext}</S.ContentText>
                <S.ContentText>{data?.caption}</S.ContentText>
              </S.Translate>
            </S.TextTranslate>
          </S.Content>
        </S.LeftContainer>
        <S.RightContainer></S.RightContainer>
      </S.MainWrapper>
    </S.Container>
  );
}

export default Hero;
