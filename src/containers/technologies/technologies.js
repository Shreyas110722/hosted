import React, { useEffect } from "react";
import Parallax from "parallax-js";
import * as S from "./technologies.styles";
import { SideLine } from "../../assets/svgicon/svgIcons";
import CustomTechnologies from "./customTechnologies/customTechnologies";
function Technologies({ data, data1 }) {
  useEffect(() => {
    var scene = document.getElementById("technologyHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
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
            <S.Head data-relative-input="true" id="technologyHead">
              <S.FirstHeadLayer data-depth="0.6">
                {data[0].__typename}
              </S.FirstHeadLayer>
            </S.Head>
            <S.SecHeadLayer strings={[data[0].__typename]}></S.SecHeadLayer>
          </S.MainHeading>
        </S.HeaderWrapper>
        <S.TechnologyContainer>
          <CustomTechnologies data={data1} />
        </S.TechnologyContainer>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default Technologies;
