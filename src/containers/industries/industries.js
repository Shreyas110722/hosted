import React, { useEffect } from "react";
import * as S from "./industries.style";
import Parallax from "parallax-js";
import { SideLine } from "../../assets/svgicon/svgIcons";
import IndusSwiper from "./industriesSwiper/IndusSwiper";

function Industries({ data }) {
  useEffect(() => {
    var scene = document.getElementById("industriesHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  }, []);

  return (
    <S.Container>
      <S.SideLine>
        <SideLine />
      </S.SideLine>
      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.MainHeading>
            <S.Head data-relative-input="true" id="industriesHead">
              <S.FirstHeadLayer data-depth="0.6">
                {data[0].image.title}
              </S.FirstHeadLayer>
            </S.Head>
            <S.SecHeadLayer strings={[data[0].image.title]}></S.SecHeadLayer>
          </S.MainHeading>
        </S.HeaderWrapper>
        <S.IndustriesWrapper>
          <IndusSwiper data={data} />
        </S.IndustriesWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default Industries;
