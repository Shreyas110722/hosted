import React, { useEffect } from "react";
// , { useRef, useState }
import * as S from "./customers.styles";
// import { FaRegComments } from "react-icons/fa";
// import {BsChatRightQuoteFill} from "react-icons/bs"ip
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Parallax from "parallax-js";
// import { Swiper,SwiperSlide } from "swiper/react";
// import SwiperCore,{ Pagination, Navigation,Mousewheel, Keyboard } from "swiper/core";

import { Swiper } from "../../components/Swiper";
// import ReviewCards from "./ReviewCards";
import { SideLine } from "../../assets/svgicon/svgIcons";
// import AnimatedButton from "../../components/common/button/animatedButton";
// import { BackgroundAnimation } from "../../components/common";

function Customers({ data, animateCursor, mouseLeave }) {
  useEffect(() => {
    var scene = document.getElementById("customers");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });

    //   var customerPhoto1 = document.getElementById("customerPhoto1");
    //   new Parallax(customerPhoto1, {
    //     relativeInput: true,
    //     hoverOnly: true,
    //     calibrate: (true, true),
    //   });
    //   var customerPhoto2 = document.getElementById("customerPhoto2");
    //   new Parallax(customerPhoto2, {
    //     relativeInput: true,
    //     hoverOnly: true,
    //     calibrate: (true, true),
    //   });
  }, []);
  // const [scroll, setScroll] = useState(0)
  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY < 100
  //     if (scrollCheck !== scroll) {
  //       setScroll(scrollCheck)
  //     }
  //   })
  // })
  // const ref = useRef(null);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
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
                {/* <BsChatRightQuoteFill/> */}
                {/* <FaRegComments /> */}
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
/* <BackgroundAnimation />
      <S.ContentWrapper>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.LeftContainer>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="customers">
                <S.FirstHeadLayer data-depth="0.6">
                  {data.__typename}
                </S.FirstHeadLayer>
              </S.Head>
              <S.SecHeadLayer strings={[data.__typename]}></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>
          <S.Content>{data.content}</S.Content>
          <S.ButtonWrapper>
            <AnimatedButton buttonname={data.buttonname} />
          </S.ButtonWrapper>
        </S.LeftContainer>
        <S.RightContainer>
          <S.ImageWrapper1>
            <S.ParralxImage1 data-relative-input="true" id="customerPhoto1">
              <S.Image1
                data-depth="0.6"
                src={data.image?.url}
                alt={data.image?.description}
              />
              <S.Image2
                data-depth="0.4"
                src={data.borderimage?.url}
                alt={data.borderimage?.description}
              />
            </S.ParralxImage1>
          </S.ImageWrapper1>
          <S.ImageWrapper2>
            <S.ParralxImage2 data-relative-input="true" id="customerPhoto2">
              <S.Image1
                data-depth="0.6"
                src={data.smallimage?.url}
                alt={data.smallimage?.description}
              />
              <S.Image2
                data-depth="0.4"
                src={data.smallborderimage?.url}
                alt={data.smallborderimage?.description}
              />
            </S.ParralxImage2>
          </S.ImageWrapper2>
        </S.RightContainer>
        <S.ContentWrapper2>
          <S.Content2>{data.content}</S.Content2>
          <S.ButtonWrapper2>
            <S.Button2>{data.buttonname}</S.Button2>
          </S.ButtonWrapper2>
        </S.ContentWrapper2>
      </S.ContentWrapper> */
export default Customers;
