import styled from "styled-components";
import tw from "twin.macro";
// import { AiOutlineCloseCircle } from "react-icons/ai"

const Container = styled.div`
  z-index: 100;

  ${tw`  w-full flex flex-col justify-center space-y-0 bg-black `}
  /* @media (max-width:650px) {
    ${tw` pl-6 pr-14   `}
  } */
  @media (max-width: 585px) {
    justify-content: initial;
  }
`;
const Heading = styled.div`
  ${tw`font-extrabold text-gold text-7xl mt-24 mb-0`}
  @media (max-width: 1201px) {
    ${tw` mt-28 `}
  }
  @media (max-width: 768px) {
    ${tw` text-6xl `}
  }
  @media (max-width: 650px) {
    ${tw` text-5xl `}
  }
  @media (max-width: 585px) {
    ${tw` text-4xl `}
  }
  @media (max-width: 425px) {
    ${tw` text-3xl `}
  }
`;
const IconWrapper = styled.div`
  z-index: 100;

  ${tw` flex flex-col justify-center items-center space-y-3 `}
`;
const Icon = styled.div`
  z-index: 100;

  ${tw`border border-gold p-8 rounded-xl bg-black mt-10  `}
`;
const Name = styled.div`
  ${tw`font-extralight text-xl text-gold mb-10`}
`;
const Content = styled.div`
  ${tw`text-white font-light text-center w-9/12  mt-10`}
  @media (max-width: 650px) {
    ${tw` text-center w-11/12  mt-10`}
  }
  @media (max-width: 500px) {
    ${tw`w-full text-sm`}
  }
  @media (max-width: 425px) {
    ${tw`w-full text-xs`}
  }
`;

const StrokeHead = styled.div`
  z-index: -1;
  ${tw`text-9xl   opacity-40 w-full text-center font-extrabold absolute top-0`}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  font-size: 200px;
  top: 30%;
  @media (max-width: 1201px) {
    top: 32%;
  }
  @media (max-width: 840px) {
    ${tw``}
    font-size:175px;
    top: 35%;
  }
  @media (max-width: 768px) {
    ${tw`text-7xl`}
    top:39%;
    font-size: 140px;
  }
  @media (max-width: 650px) {
    top: 38%;

    font-size: 120px;
  }
  @media (max-width: 585px) {
    ${tw`text-7xl`}
    top:40%;
    font-size: 100px;
  }
  @media (max-width: 425px) {
    ${tw`text-7xl`}
    top:14%;
    font-size: 60px;
  }
`;

const ButtonWrapper = styled.div`
  ${tw`w-full flex justify-center items-center `}
`;
const Button = styled.div`
  ${tw`mt-10 w-1/12  text-center px-3 py-1.5 bg-gold rounded-lg text-black font-light  transition-all duration-500 ease-in-out border border-black hover:border hover:border-gold hover:bg-black hover:text-white`}
  @media (max-width: 1201px) {
    ${tw`w-1/12 mt-6 text-sm`}
  }
  @media (max-width: 1090px) {
    ${tw`px-2.5`}
  }
  @media (max-width: 1044px) {
    ${tw`px-2`}
  }
  @media (max-width: 990px) {
    ${tw`px-1.5 text-xs`}
  }
  @media (max-width: 840px) {
    ${tw`px-2.5`}
    width:12%;
  }
  @media (max-width: 840px) {
    ${tw``}
    width:20%;
  }
  @media (max-width: 500px) {
    ${tw`w-3/12`}
  }
  @media (max-width: 425px) {
    ${tw`w-4/12`}
  }
`;
const CloseIcon = styled.div`
  ${tw` w-full flex justify-end items-center pr-10 pb-0`}
  @media (max-width:500px) {
    ${tw` w-full flex justify-end items-center pr-0 pb-0`}
  }
`;
const Icon2 = styled.div`
  ${tw` w-auto mt-6 `}
  font-size:20px;
`;
const BackButton = styled.div`
  ${tw`mt-0 w-1/12  text-center px-3 py-1.5 bg-gold rounded-lg text-black font-light absolute top-2 left-2  transition-all duration-500 ease-in-out border border-black hover:border hover:border-gold hover:bg-black hover:text-white `}
  @media (max-width: 1201px) {
    ${tw`w-1/12 mt-6 text-sm`}
  }
  @media (max-width: 1090px) {
    ${tw`px-2.5`}
  }
  @media (max-width: 1044px) {
    ${tw`px-2`}
  }
  @media (max-width: 990px) {
    ${tw`px-1.5 text-xs`}
  }
  @media (max-width: 840px) {
    ${tw`px-2.5`}
    width:12%;
  }
  @media (max-width: 840px) {
    ${tw``}
    width:20%;
  }
  @media (max-width: 500px) {
    ${tw`w-3/12`}
  }
  @media (max-width: 425px) {
    ${tw`w-4/12`}
  }
`;
export {
  BackButton,
  Container,
  Heading,
  IconWrapper,
  Icon,
  Name,
  Content,
  StrokeHead,
  CloseIcon,
  ButtonWrapper,
  Button,
  Icon2,
};
