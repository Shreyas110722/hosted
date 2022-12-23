import styled from "styled-components";
import tw from "twin.macro";
import { TypedAnimation } from "../../components/common";
const Container = styled.div`
  ${tw`py-4 pr-10 pl-20`}

  @media (max-width: 550px) {
    ${tw`py-4 pr-10 pl-6`}
  }
`;
const HeaderWrapper = styled.div`
  ${tw` w-full flex justify-start items-center`};

  @media (max-width: 768px) {
    margin-top: 20%;
  }
`;

const MainHeading = styled.div`
  ${tw`  flex justify-start items-center  relative `};
  @media (max-width: 768px) {
    ${tw`  `}
  }
`;
const Head = styled.div`
  ${tw` `}
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  @media (max-width: 1170px) {
    ${tw`text-7xl`}
  }
  @media (max-width: 768px) {
    ${tw`text-6xl`}
  }

  @media (max-width: 520px) {
    ${tw`text-5xl `}
  }
`;
const SecHeadLayer = styled(TypedAnimation)`
  ${tw`text-7xl text-gold absolute bottom-0 left-0 font-bold w-full `};
  @media (max-width: 1170px) {
    ${tw`text-6xl`}
  }
  @media (max-width: 768px) {
    ${tw`text-5xl`}
  }
  @media (max-width: 520px) {
    ${tw`text-4xl `}
  }
`;
const CardWrapper = styled.div`

  @media (max-width: 768px) {
    margin-top: 15%;
    display: grid;
    gap:2rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }
  @media (max-width: 550px) {
    margin-top: 15%;
    row-gap: 2%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(300px, auto);
    margin-bottom: 34rem;
  }
`;

const Main = styled.div`
  @media (min-width: 770px) {
    display: none;
  }
`;
const QuestionWrapper = styled.div`
  padding-top: 0rem;
`;
const Question = styled.div`
  ${tw`flex flex-col items-center gap-y-4`}
`;
const QuestionText = styled.div`
  ${tw`text-gold text-4xl font-semibold`}

  @media (max-width:768px) {
    font-size: 2.3rem;
    font-weight: 900;
    padding-left: 1%;
    text-align: center;
  }

  @media (max-width: 550px) {
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
    font-size: 1.8rem;
  }
  @media (max-width: 430px) {
    text-align: center;
  }
`;
export {
  QuestionWrapper,
  QuestionText,
  Question,
  Container,
  MainHeading,
  Main,
  Head,
  HeaderWrapper,
  FirstHeadLayer,
  SecHeadLayer,
  CardWrapper,
};
