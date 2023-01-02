import React, { useEffect } from "react";
import * as S from "./customers.styles";
import Parallax from "parallax-js";
import { Swiper } from "../../components/Swiper";
import { SideLine } from "../../assets/svgicon/svgIcons";

function Customers({ data, animateCursor, mouseLeave }) {
  useEffect(() => {
    var scene = document.getElementById("customers");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
  }, []);

  return (
    <>
      <S.ContentWrapper>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.Container>
          <S.MainHeading>
            <S.Head data-relative-input="true" id="customers">
              <S.FirstHeadLayer data-depth="0.6">
                {data.customers}
              </S.FirstHeadLayer>
            </S.Head>
            <S.SecHeadLayer strings={[data.customers]}></S.SecHeadLayer>
          </S.MainHeading>

          <S.Content>
            <S.LeftContainer>
              <S.HeaderWrapper>
                <S.HeaderText>
                  <p>{data.heading}</p>
                </S.HeaderText>
                <S.CustomContent>
                  <p>{data.customContent}</p>
                  <S.Clints>
                    {data?.projects.map((item, index) => (
                      <S.Project key={index}>
                        <S.clintNumber>
                          <div className="number">{item.bignumber}</div>
                          <div className="num">{item.smallnumber}</div>
                        </S.clintNumber>
                        <S.ProjectCompleted>{item.title}</S.ProjectCompleted>
                      </S.Project>
                    ))}
                  </S.Clints>
                </S.CustomContent>
              </S.HeaderWrapper>
            </S.LeftContainer>
            <S.CardWrapper>
              <Swiper data={data} />
            </S.CardWrapper>
          </S.Content>
        </S.Container>
      </S.ContentWrapper>
    </>
  );
}
export default Customers;
