import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import Parallax from "parallax-js";
import Tilt from "react-parallax-tilt";
import { Navigation } from "swiper";
import "../industriesSwiper/IndusSwipe.css";
import * as S from "./IndusSwiper.style";

const IndusSwiper = ({ data }) => {
  useEffect(() => {
    var scene = document.getElementById("industriesHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  }, []);

  return (
    <S.Container>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        pagination={true}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <S.SwiperCard>
              <S.ImageContainer>
                <Tilt
                  tiltAngleXInitial={2}
                  tiltAngleYInitial={2}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={10}
                >
                  <S.Image src={item?.image?.url} alt={item?.image?.title} />
                </Tilt>
              </S.ImageContainer>

              <S.Card>
                <S.Number>
                  <S.BigNum>{item?.bignumber}</S.BigNum>
                  <S.SmallNum>{item?.smallnumber}</S.SmallNum>
                </S.Number>
                <S.Title>{item?.title}</S.Title>
                <S.Content>
                  <S.Paragraph>{item?.description}</S.Paragraph>
                </S.Content>
              </S.Card>
            </S.SwiperCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};
export default IndusSwiper;
