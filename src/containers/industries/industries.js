import React, { useEffect } from "react";
import * as S from "./industries.style";
// import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
// import IndustriesCard from "./industriesCard/industriesCard";
import { SideLine } from "../../assets/svgicon/svgIcons";
import { BackgroundAnimation } from "../../components/common";
import IndusSwiper from "./industriesSwiper/IndusSwiper";

function Industries({ data }) {
  useEffect(() => {
    var scene = document.getElementById("industriesHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      // calibrate:(true, true)
    });
  }, []);

  return (
    <S.Container>
      <BackgroundAnimation />
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
          {/* <S.ImagesWrapper>
            <Tilt
              tiltAngleXInitial={2}
              tiltAngleYInitial={2}
              tiltMaxAngleX={5}
              tiltMaxAngleY={10}
            >
              <S.IndustryImage1>
                <IndustriesCard
                  title={data[0]?.title}
                  imgSrc={data[0]?.image?.url}
                  radius="top-left"
                />
              </S.IndustryImage1>
              <S.IndustryImage2>
                <IndustriesCard
                  title={data[6]?.image.description}
                  imgSrc={data[6].image?.url}
                  radius="top-left"
                />  
              </S.IndustryImage2>
            </Tilt>
            <Tilt
              tiltAngleXInitial={2}
              tiltAngleYInitial={2}
              tiltMaxAngleX={5}
              tiltMaxAngleY={10}
            >
              <S.IndustryImage1>
                <IndustriesCard
                  title={data[3]?.title}
                  imgSrc={data[3]?.image?.url}
                  radius="bottom-left"
                />
              </S.IndustryImage1>
              <S.IndustryImage2>
                <IndustriesCard
                  title={data[7]?.image.description}
                  imgSrc={data[7]?.image.url}
                  radius="top-right"
                />
              </S.IndustryImage2>
            </Tilt>
          </S.ImagesWrapper> */}
          {/* <S.ImagesWrapper>
            <Tilt
              tiltAngleXInitial={2}
              tiltAngleYInitial={2}
              tiltMaxAngleX={5}
              tiltMaxAngleY={10}
            >
              <S.IndustryImage1 className=" transform scale-y-105">
                <IndustriesCard
                  title={data[1]?.title}

                  imgSrc={data[1]?.image?.url}
                />
              </S.IndustryImage1>
              <S.IndustryImage2>
                <IndustriesCard
                  title={data[8]?.image.description}
                  imgSrc={data[8]?.image.url}
                />
              </S.IndustryImage2>
            </Tilt>
            <Tilt
              tiltAngleXInitial={2}
              tiltAngleYInitial={2}
              tiltMaxAngleX={5}
              tiltMaxAngleY={10}
            >
              <S.IndustryImage1 className=" transform scale-y-105">
                <IndustriesCard
                  title={data[4]?.title}
                  imgSrc={data[4]?.image?.url}
                />
              </S.IndustryImage1>
              <S.IndustryImage2>
                <IndustriesCard
                  title={data[9]?.image.description}
                  imgSrc={data[9]?.image.url}
                />
              </S.IndustryImage2>
            </Tilt>
          </S.ImagesWrapper>
          <S.ImagesWrapper>
            <Tilt
              tiltAngleXInitial={2}
              tiltAngleYInitial={2}
              tiltMaxAngleX={5}
              tiltMaxAngleY={10}
            >
              <S.IndustryImage1>
                <IndustriesCard
                  title={data[5]?.title}
                  imgSrc={data[5]?.image?.url}
                  radius="top-right"
                />
              </S.IndustryImage1>
              <S.IndustryImage2>
                <IndustriesCard
                  title={data[10]?.image.description}
                  imgSrc={data[10]?.image.url}
                  radius="bottom-left"
                />
              </S.IndustryImage2>
            </Tilt>
            <Tilt
              tiltAngleXInitial={2}
              tiltAngleYInitial={2}
              tiltMaxAngleX={5}
              tiltMaxAngleY={10}
            >
              <S.IndustryImage1>
                <IndustriesCard
                  title={data[2]?.title}
                  imgSrc={data[2]?.image?.url}
                  radius="bottom-right"
                />
              </S.IndustryImage1>
              <S.IndustryImage2>
                <IndustriesCard
                  title={data[11]?.image.description}
                  imgSrc={data[11]?.image.url}
                  radius="bottom-right"
                />
              </S.IndustryImage2>
            </Tilt>
          </S.ImagesWrapper> */}
          <IndusSwiper data={data}/>
        </S.IndustriesWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default Industries;
