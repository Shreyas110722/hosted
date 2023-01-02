import styled from "styled-components";
import tw from "twin.macro";
import { TypedAnimation } from "../../components/common";
import Cube from "./cube";
import { keyframes } from "styled-components";

const Container = styled.div`
  ${tw`text-white w-full h-full flex justify-center items-center   `};
  z-index: 0;
`;
const MainWrapper = styled.div`
  ${tw` w-full h-screen flex justify-center items-center    `};
  /* background-image: url(${(<Cube />)}); */
  background-repeat: repeat;
  background-blend-mode: lighten;
  background-size: 50px 50px;
  /* background-position: 50%; */
  animation: animatedBackground 20s linear infinite;
  background-image: black;

  @keyframes animatedBackground {
    0% {
      background-position: 10 0;
    }
    100% {
      background-position: 100%;
    }
  }

  /* z-index: 10; */
  @media (max-width: 520px) {
    ${tw`  flex flex-col  justify-center items-center px-6 `};
  }
`;

const LeftContainer = styled.div`
  ${tw` text-left h-full w-full flex  flex-col justify-center items-start  `};
  position: relative;
  @media (max-width: 768px) {
    ${tw``};
  }
  @media (max-width: 520px) {
    ${tw` flex-col justify-center items-start h-full mb-0  `};
    margin-top: 15rem;
  }
`;
const HeaderWrapper = styled.div`
  ${tw` w-full  flex justify-start items-end h-auto   `};
`;
const MainHeading = styled.div`
  background-color: black;
  ${tw`  flex justify-start items-center  relative  `};
`;

const Head = styled.div`
  ${tw` `}
`;

const FirstHeadLayer = styled.div`
  /* z-index: -1; */
  ${tw`text-7xl  text-gold  w-full  font-bold`}
  /* -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black; */
  font-size: 120px;
  @media (max-width: 768px) {
    font-size: 100px;
  }
  @media (max-width: 590px) {
    font-size: 90px;
  }
  @media (max-width: 520px) {
    font-size: 85px;
  }
`;
const SecHeadLayer = styled(TypedAnimation)`
  ${tw`text-7xl text-gold bottom-0 left-0 font-bold w-full `};
  font-size: 120px;
  z-index: 5;
  @media (max-width: 768px) {
    font-size: 90px;
  }
  @media (max-width: 590px) {
    font-size: 80px;
  }
  @media (max-width: 520px) {
    font-size: 70px;
  }
`;

const Content = styled.div`
  ${tw`w-full space-y-2  `};
  position: absolute;
  background-color: black;
  top: 65%;
  animation: mymove 3s;
  animation-timing-function: ease-out;
  overflow: hidden;

  @media (max-width: 768px) {
    top: 56%;
  }
  @media (max-width: 450px) {
    top: 62%;
  }

  @keyframes mymove {
    from {
      left: -1000px;
    }
    to {
      left: 0px;
    }
  }
`;
const ContentHead = styled.h4`
  ${tw`text-3xl font-extrabold`};
  @media (max-width: 768px) {
    ${tw`text-2xl`};
  }
  @media (max-width: 590px) {
    ${tw`text-xl`};
  }
`;
const ContentText = styled.span`
  ${tw`font-light text-2xl`};
  position: absolute;
  font-weight: 600;
  display: flex;
  width: 100%;
  z-index: 10;
  :last-child {
    left: 100%;
  }

  @media (max-width: 768px) {
  }
  @media (max-width: 590px) {
  }
`;
const RightContainer = styled.div`
  ${tw`h-full   w-full overflow-hidden flex justify-center items-center `};
`;
const ImageWrapper1 = styled.div`
  ${tw`w-full h-full flex justify-center items-center  `};

  @media (max-width: 768px) {
    ${tw`flex justify-center items-center mt-0 `};

    height: 400px;
  }
  @media (max-width: 520px) {
    ${tw` flex justify-center items-center `};
  }
  @media (max-width: 425px) {
    ${tw` flex-col justify-center items-center `};
    height: 350px;
  }
`;

const Image1 = styled.img`
  ${tw`h-full  w-full  `};
`;
const Image2 = styled.img`
  ${tw`h-full  w-full `};
`;
const Image3 = styled.img`
  ${tw`h-full  w-full`};
`;
const Image4 = styled.img`
  ${tw`h-full  w-full`};
`;

const SideLine = styled.div`
  ${tw`-ml-0 -mt-8 `}
  z-index:1;
  @media (max-width: 768px) {
    ${tw`-ml-16 -mt-10 `}
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

const TextTranslate = styled.div`
  height: 100px;
  font-size: 2rem;
  display: flex;
  overflow: hidden;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
  @media (max-width: 520px) {
    margin-top: 5%;
  }
`;

const Translate = styled.div`
  position: relative;
  width: 200%;

  @keyframes tagTranslate {
    0% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-100%);
    }
    90% {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }
`;
const animate = keyframes`
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
`;
const Cubediv = styled.div`
  position: absolute;
  display: flex;
  width: 96vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 1px;
  flex-wrap: wrap;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#000, goldenrod, #000);
    animation: ${animate} 3s linear infinite;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Box = styled.span`
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  background: black;
  z-index: 1;
  transition: 1.5s;

  @media (min-width: 1540px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 920px) {
    width: 50.5px;
    height: 50.5px;
  }

  @media (max-width: 821px) {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 550px) {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 440px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 400px) {
    width: 42px;
    height: 42px;
  }
  @media (max-width: 376px) {
    width: 40.5px;
    height: 40.5px;
  }

  &:hover {
    background: goldenrod;
    transition: 0s;
    cursor: pointer;
  }
`;

export {
  TextTranslate,
  Box,
  Cubediv,
  Translate,
  Container,
  MainWrapper,
  LeftContainer,
  HeaderWrapper,
  MainHeading,
  Content,
  ContentHead,
  ContentText,
  RightContainer,
  ImageWrapper1,
  Image1,
  Image2,
  Image3,
  Image4,
  Head,
  FirstHeadLayer,
  SecHeadLayer,
  SideLine,
};
