import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`border border-gold flex flex-col justify-center  items-start p-5  space-y-8 rounded-tl-lg rounded-bl-lg h-full w-full`};
  @media (max-width: 768px) {
    ${tw`p-5  space-y-7 `};
  }
  @media (max-width: 501px) {
    ${tw` pt-6   space-y-0 rounded-bl-none rounded-tr-lg justify-between `}
  }
  @media (max-width: 425px) {
    ${tw` rounded-bl-none rounded-tr-lg justify-start items-start p-2.5 `}
  }
`;
const Heading = styled.div`
  ${tw`text-2xl text-gold font-bold -mt-0`}
  @media (max-width: 768px) {
    ${tw`text-xl `}
  }
  @media (max-width: 520px) {
    ${tw`text-lg`}
  }
  @media (max-width: 360px) {
    ${tw`text-lg`}
  }
  @media (max-width: 325px) {
    ${tw`text-base`}
  }
`;
const About = styled.div`
  ${tw`text-left`};
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;
  z-index: 50;
  @media (max-width: 987px) {
    ${tw`  text-sm `}
  }
  @media (max-width: 768px) {
    ${tw`text-left w-11/12  text-xs`}
  }
  @media (max-width: 520px) {
    font-size: 11px;
    ${tw``}
  }
  @media (max-width: 360px) {
    ${tw`w-full `}
    font-size:10px;
  }
`;
const TechnologyList = styled.div`
  ${tw` w-full flex justify-start items-center flex-wrap`}
  @media (max-width: 768px) {
    ${tw` w-full flex justify-between items-center flex-wrap`}
  }
`;
const IconName = styled.div`
  width: 15%;
  ${tw`flex flex-col justify-center items-center space-y-2   `}
  @media (max-width: 768px) {
    width: 20%;
    ${tw`flex flex-col justify-center items-center space-y-1   `}
  }
`;

const ImageWrapper = styled.div`
  ${tw`border border-gold bg-gold p-3  rounded-xl`}
  @media (max-width: 987px) {
    ${tw` p-2 `}
  }
  @media (max-width: 768px) {
    ${tw`border border-gold bg-gold p-1  rounded-lg `}
  }
  @media (max-width: 520px) {
    ${tw`p-0.5 mt-4`}
  }
`;
const img = styled.img`
  ${tw`w-full h-full`}
  @media (max-width: 768px) {
    ${tw`w-full h-full`}
  }
  @media (max-width: 520px) {
    transform: scale(0.7);
    ${tw` `}
  }
`;
const Name = styled.div`
  ${tw`text-center h-full w-full font-extralight text-xs `}
  @media (max-width: 987px) {
    font-size: 11px;

    ${tw`   `}
  }
  @media (max-width: 910px) {
    font-size: 9px;

    ${tw`  `}
  }
  @media (max-width: 768px) {
    ${tw` font-light text-xs w-full `};
    font-size: 9px;
  }
  @media (max-width: 610px) {
    font-size: 7px;
  }
  @media (max-width: 501px) {
    font-size: 9px;
    ${tw`mb-4 pb-4`}
  }
  @media (max-width: 329px) {
    font-size: 9px;
    ${tw`pb-4`}
  }
`;
const Button = styled.button`
  ${tw`bg-gold text-black py-2 px-5 w-3/12 rounded-lg  transition-all duration-500 ease-in-out border border-black hover:border hover:border-gold hover:bg-black hover:text-white`}
  @media (max-width: 987px) {
    ${tw` py-1.5 px-4 text-sm  `}
  }
  @media (max-width: 875px) {
    ${tw`py-2.5 px-2 text-sm  `}
  }
  @media (max-width: 768px) {
    ${tw`bg-gold text-black py-1 px-3 w-4/12 rounded-lg`}
  }
  @media (max-width: 580px) {
    ${tw`  w-5/12   `}
  }
  @media (max-width: 501px) {
    ${tw`  py-2 px-1 rounded-xl text-xs`}
  }
  @media (max-width: 520px) {
    ${tw`py-1 px-0`}
  }
`;
const ButtonWrapper = styled.div`
  cursor: pointer;
`;

export {
  Container,
  Heading,
  About,
  TechnologyList,
  IconName,
  ImageWrapper,
  ButtonWrapper,
  img,
  Name,
  Button,
};
