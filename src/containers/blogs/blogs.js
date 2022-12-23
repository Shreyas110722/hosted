import React, { useEffect } from "react";

import { SideLine } from "../../assets/svgicon/svgIcons";
import BlogCard from "./BlogCard/BlogCard";
import * as S from "./blogs.styles";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import AnimatedButton from "../../components/common/button/animatedButton";
// import { BackgroundAnimation } from "../../components/common";
import HorizontalScroll from "react-scroll-horizontal";

const mainQuery = gql`
  query {
    blogCollection(limit: 12) {
      items {
        title
        description {
          json
        }
        image {
          title
          url
        }
        slugUrl
      }
    }
  }
`;
function Hero() {
  useEffect(() => {
    let parallax = document.getElementById("parallaxCustom");
    parallax.addEventListener("mousemove", (e) => {
      parallax.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerWidth - e.pageY * speed) / 650;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
    parallax.addEventListener("mouseout", (e) => {
      parallax.querySelectorAll(".layer").forEach((layer) => {
        layer.style.transform = `translateX(${0}px) translateY(${0}px)`;
      });
    });
  }, []);
  // eslint-disable-next-line
  const { loading, data, error } = useQuery(mainQuery);

  return (
    <>
      <S.HorizontalContainer>
        <S.FirstContainer className="relative">
          <S.Container>
            {/* <BackgroundAnimation /> */}
            <S.MainWrapper>
              <S.SideLine>
                <SideLine />
              </S.SideLine>
              <S.ContentWrapper>
                <S.CardWrapper>
                  <S.MainHeading id="parallaxCustom">
                    <S.FirstHeadLayer data-speed="-6" className="layer">
                      Blogs
                    </S.FirstHeadLayer>
                    <S.SecHeadLayer strings={["Blogs"]}></S.SecHeadLayer>
                  </S.MainHeading>
                  <HorizontalScroll>
                    {data?.blogCollection?.items &&
                      data?.blogCollection?.items.map((blog, index) => {
                        return <BlogCard blog={blog} />;
                      })}
                  </HorizontalScroll>
                </S.CardWrapper>
              </S.ContentWrapper>
            </S.MainWrapper>
          </S.Container>
        </S.FirstContainer>
      </S.HorizontalContainer>
      <S.CardContainer>
        <S.SecondContainer className="relative">
          <S.Container1>
            <S.MainWrapper1>
              <S.SideLine1>
                <SideLine />
              </S.SideLine1>
              <S.ContentWrapper1>
                <S.CardWrapper1>
                  <S.MainHeading1 id="parallaxCustom">
                    <S.FirstHeadLayer1 data-speed="-6" className="layer">
                      Blogs
                    </S.FirstHeadLayer1>
                    <S.SecHeadLayer1 strings={["Blogs"]}></S.SecHeadLayer1>
                  </S.MainHeading1>
                  <S.Cards>
                    {data?.blogCollection?.items &&
                      data?.blogCollection?.items.map((blog, index) => {
                        return <BlogCard blog={blog} />;
                      })}
                  </S.Cards>
                </S.CardWrapper1>
              </S.ContentWrapper1>
              <Link to="/blogs" target="_self">
                <S.ButtonWrapper>
                  <AnimatedButton buttonname="See More" />
                </S.ButtonWrapper>
              </Link>
            </S.MainWrapper1>
          </S.Container1>
        </S.SecondContainer>
      </S.CardContainer>
    </>
  );
}

export default Hero;
