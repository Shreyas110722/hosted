import styled from "styled-components";
import tw from "twin.macro";
import { TypedAnimation } from "../../components/common";
const Container = styled.div`
  ${tw`text-white w-full h-full flex justify-start items-start pr-10`};
  z-index: 10;
  margin-top: -20%;
  @media (max-width: 520px) {
    ${tw`pr-6`}
  }
`;
const MainWrapper = styled.div`
  ${tw` w-full h-full flex justify-start items-center   `};
  z-index: 10;
  @media (max-width: 520px) {
    ${tw`  flex flex-col  justify-center items-center pl-6   `};
  }
`;

const MainHeading = styled.div`
  ${tw`  relative mt-16`};
  margin-bottom: 5%;
  @media (max-width: 550px) {
    ${tw`mt-0`}
  }
  /* @media (max-width: 350px) {
    ${tw`mt-6`}
  } */
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full  font-bold `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  transition: transform 0.1s linear;

  @media (max-width: 768px) {
    font-size: 100px;
  }
  @media (max-width: 590px) {
    font-size: 80px;
  }
  @media (max-width: 520px) {
    font-size: 60px;
  }
`;
const SecHeadLayer = styled(TypedAnimation)`
  ${tw`text-7xl text-gold font-bold w-full absolute top-4 left-0 `};

  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 590px) {
    font-size: 50px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
  }
`;

const SideLine = styled.div`
  ${tw`-ml-0  `}
  margin-top:13%;
  @media (max-width: 768px) {
    ${tw`-ml-16 -mt-10 `}
    margin-left:5%;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
const CardWrapper = styled.div`
  ${tw` space-x-2 ml-3 flex justify-start items-start w-full `};
  margin-top: 10rem;
  margin-bottom: 2rem;
  height: 34rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1250px) {
    > * {
      &:nth-child(4) {
        display: none;
      }
    }
  }
  @media (max-width: 995px) {
    > * {
      &:nth-child(3) {
        display: none;
      }
    }
  }
  @media (max-width: 660px) {
    ${tw`ml-0 `}
    > * {
      &:nth-child(2) {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 520px) {
    ${tw`ml-0 space-x-0  w-full`}
    /* z-index: 1000; */
    > * {
      &:nth-child(1) {
        ${tw`w-full `}
      }
    }
  }
`;
const ButtonWrapper = styled.div`
  ${tw`absolute -bottom-16 left-1/2 `};
  @media (max-width: 768px) {
    left: 48%;
    bottom: -15%;
  }
  @media (max-width: 550px) {
    left: 38%;
  }
  @media (max-width: 450px) {
    ${tw` left-1/3`}
    left:35%;
  }
`;

const ContentWrapper = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-start space-y-10`};

  @media (max-width: 350px) {
    ${tw`space-y-3`}
  }
`;

const SecondContainer = styled.div`
  @media (min-width: 770px) {
    display: none;
  }
  @media (max-width: 768px) {
    margin-left: 1%;
  }

  @media (max-width: 550px) {
    ${tw`mx-2`}
    margin-top: 22%;
  }
`;

const FirstContainer = styled.div`
  margin-top: 3%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CardWrapper1 = styled.div`
  ${tw`  `};

  @media (max-width: 768px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

const Container1 = styled.div`
  ${tw`text-white w-full h-full flex justify-start items-start `};
  z-index: 10;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const MainWrapper1 = styled.div`
  ${tw` w-full h-full flex justify-start items-center   `};
  z-index: 4;

  @media (max-width: 520px) {
    ${tw`  flex flex-col  justify-center items-center    `};
  }
`;

const MainHeading1 = styled.div`
  ${tw`  relative`};
  @media (max-width: 550px) {
    ${tw`mt-0`}
  }
  @media (max-width: 450px) {
    ${tw`mt-6`}
    margin-left:5%;
  }
`;

const FirstHeadLayer1 = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full  font-bold `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  transition: transform 0.1s linear;
  @media (max-width: 768px) {
    font-size: 100px;
  }
  @media (max-width: 590px) {
    font-size: 80px;
  }
  @media (max-width: 520px) {
    font-size: 60px;
    margin-left: -2%;
  }
`;
const SecHeadLayer1 = styled(TypedAnimation)`
  ${tw`text-7xl text-gold font-bold w-full absolute top-4 left-0 `};
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 590px) {
    font-size: 50px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
  }
`;

const ButtonWrapper1 = styled.div`
  ${tw`absolute -bottom-16 left-1/2 `};
  @media (max-width: 768px) {
    ${tw` left-1/3`}
  }
`;

const ContentWrapper1 = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-start space-y-10`};
  margin-left: 1%;
`;
const SideLine1 = styled.div`
  ${tw`-ml-0  `}
  margin-top:13%;
  @media (max-width: 768px) {
    ${tw`-ml-16 -mt-10 `}
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const Cards = styled.div`
  margin-top: 1%;
  display: flex;
  @media (max-width: 550px) {
    margin-top: 10%;
  }
`;

const HorizontalContainer = styled.div``;
const CardContainer = styled.div``;
export {
  Container,
  HorizontalContainer,
  CardContainer,
  Cards,
  SideLine1,
  SecHeadLayer1,
  ContentWrapper1,
  ButtonWrapper1,
  Container1,
  FirstContainer,
  SecondContainer,
  MainHeading1,
  MainWrapper,
  MainHeading,
  FirstHeadLayer,
  FirstHeadLayer1,
  MainWrapper1,
  SideLine,
  SecHeadLayer,
  CardWrapper,
  ButtonWrapper,
  ContentWrapper,
  CardWrapper1,
};
