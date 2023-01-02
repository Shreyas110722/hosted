import React from "react";
import * as S from "./notFound.style";
import AnimatedButton from "../../components/common/button/animatedButton";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <S.ImageContainer>
        <S.Image
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
      </S.ImageContainer>
      <S.Container>
        <S.Content>
          <S.Header>404 page not found</S.Header>
          <S.Heading>404</S.Heading>
          <S.Paragraph>
            We are sorry but the page you are looking for does not exist.
          </S.Paragraph>
        </S.Content>
        <Link to={`/#hello`}>
          <AnimatedButton buttonname="Go to Home"></AnimatedButton>
        </Link>
      </S.Container>
    </>
  );
};

export default NotFound;
