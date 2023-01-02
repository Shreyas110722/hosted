import React, { useEffect } from "react";
import * as S from "./service.styles";
import Parallax from "parallax-js";
import { SideLine } from "../../assets/svgicon/svgIcons";

import { withRouter } from "react-router-dom";

function Service({
  data,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  updateData,
  fullpageApi,
  ...rest
}) {
  useEffect(() => {
    var scene = document.getElementById("serviceHead");
    localStorage.setItem("servicesList", JSON.stringify(data));
    localStorage.setItem("customService", JSON.stringify(data1));
    localStorage.setItem("devopsService", JSON.stringify(data2));
    localStorage.setItem("testingService", JSON.stringify(data3));
    localStorage.setItem("webDevelopment", JSON.stringify(data4));
    localStorage.setItem("mobileDevelopment", JSON.stringify(data5));
    localStorage.setItem("eCommerce", JSON.stringify(data6));
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  }, [data,data1,data2,data3,data4,data5,data6]);
  const handleClick = (item) => {
    localStorage.setItem("service", JSON.stringify(item));
    window.open(`/service/${item.title}`, "_self");
  };


  return (
    <S.Container>
      <S.ServiceContainer>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.ContentWrapper>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="serviceHead">
                <S.FirstHeadLayer data-depth="0.6">
                  {data[0].__typename}
                </S.FirstHeadLayer>
              </S.Head>

              <S.SecHeadLayer strings={[data[0].__typename]}></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>

          <S.ServiceListContainer>
            {data?.map((item) => (
              <S.ServiceList
                key={item?.sys?.id}
                onClick={() => handleClick(item)}
              >
                <S.IconHeadingWrapper className="line">
                  <S.mmm>
                    <S.IconWrapper>
                      <img
                        className="image"
                        alt={item?.icon?.description}
                        src={item?.icon?.url}
                      />
                    </S.IconWrapper>
                    <S.Heading>
                      <S.Title>{item.title}</S.Title>
                    </S.Heading>
                    <S.Cont>
                      <S.Content>{item.content}</S.Content>
                    </S.Cont>
                  </S.mmm>
                </S.IconHeadingWrapper>
              </S.ServiceList>
            ))}
            {data?.map((item) => (
              <S.ServiceList_1
                key={item?.sys?.id}
                onClick={() => handleClick(item)}
              >
                <S.IconHeadingWrapper_1 className="line">
                  <S.mmmm>
                    <S.IconWrapper_1>
                      <img
                        className="image"
                        alt={item?.icon?.description}
                        src={item?.icon?.url}
                      />
                    </S.IconWrapper_1>
                    <S.Heading>
                      <S.Title>{item.title}</S.Title>
                    </S.Heading>
                    <S.Cont>
                      <S.Content>{item.content}</S.Content>
                    </S.Cont>
                  </S.mmmm>
                </S.IconHeadingWrapper_1>
              </S.ServiceList_1>
            ))}
            
          </S.ServiceListContainer>
        </S.ContentWrapper>
      </S.ServiceContainer>
    </S.Container>
  );
}

export default withRouter(Service);
