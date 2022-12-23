import React from "react";
import * as S from "./blogs.styles";
import Parallax from "parallax-js";
import { gql, useQuery } from "@apollo/client";
import BlogCard from "../blogs/BlogCard/BlogCard";
// import { LinearProgress } from "../../components/common";
import { Loading } from "../../assets/svgicon/svgIcons";
import Navbar from "../../components/common/navbar/navbar";
import { Link } from "react-router-dom";
import AnimatedButton from "../../components/common/button/animatedButton";

const mainQuery = gql`
  query {
    blogCollection {
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

const Blogs = (props) => {
  React.useEffect(() => {
    var scene = document.getElementById("blogsPage");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
  }, []);
  // eslint-disable-next-line
  const { loading, data, error } = useQuery(mainQuery);

  return (
    <S.Main>
      <Navbar />
      <S.Container>
        <S.HeaderWrapper>
          <S.MainHeading>
            <S.Head data-relative-input="true" id="blogsPage">
              <S.FirstHeadLayer data-depth="0.6"> Blogs</S.FirstHeadLayer>
            </S.Head>
            <S.SecHeadLayer strings={["Blogs"]}></S.SecHeadLayer>
          </S.MainHeading>
        </S.HeaderWrapper>

        {loading ? (
          <div className="w-full h-full flex justify-center items-center p-10">
            <Loading />
          </div>
        ) : (
          <>
            <S.CardWrapper>
              {data?.blogCollection?.items &&
                data?.blogCollection?.items.map((blog, index) => {
                  return <BlogCard blog={blog} />;
                })}
            </S.CardWrapper>
          </>
        )}
      </S.Container>
      <S.QuestionWrapper>
        <S.Question>
          <S.QuestionText>
            <p> Have A Question ? We Are Happy to Help</p>
          </S.QuestionText>
          <Link to={`/#contact`}>
            <AnimatedButton buttonname="Contact Us">Contact Us</AnimatedButton>
          </Link>
        </S.Question>
      </S.QuestionWrapper>
    </S.Main>
  );
};

export default Blogs;
