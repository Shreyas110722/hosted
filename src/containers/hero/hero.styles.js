import styled from "styled-components";
import tw from "twin.macro";
import { TypedAnimation } from "../../components/common";
import bgimage from "../../components/interoneUIPage/Ui-images/backyellow.png";

const Container = styled.div`
  ${tw`text-white w-full h-full flex justify-center items-center   `};
  z-index: 10;
`;
const MainWrapper = styled.div`
  ${tw` w-full h-screen flex justify-center items-center    `};
  background-image: url(${bgimage});
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

  z-index: 10;
  @media (max-width: 520px) {
    ${tw`  flex flex-col  justify-center items-center px-6 `};
  }
`;

const LeftContainer = styled.div`
  ${tw` text-left h-full w-full flex  flex-col justify-center items-start  `};
  @media (max-width: 768px) {
    ${tw``};
  }
  @media (max-width: 520px) {
    ${tw` flex-col justify-center items-start h-full mt-20 mb-0  `};
  }
`;
const HeaderWrapper = styled.div`
  ${tw` w-full  flex justify-start items-end h-auto   `};
`;
const MainHeading = styled.div`
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
const ContentText = styled.h6`
  ${tw`font-light text-2xl`};
  @media (max-width: 768px) {
    ${tw`text-xl`};
  }
  @media (max-width: 590px) {
    ${tw`text-base`};
  }
`;
const RightContainer = styled.div`
  ${tw`h-full   w-full overflow-hidden flex justify-center items-center `};
  @media (max-width: 768px) {
    ${tw` justify-center items-center `};

    @media (max-width: 520px) {
      ${tw` justify-center items-end    `};
    }
  }
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
  /* @media (max-width: 360px) {
    ${tw` flex-col justify-start items-start `};

    transform: scale(0.7);
  } */
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
  @media (max-width:768px) {
    ${tw`-ml-16 -mt-10 `}
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

export {
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
