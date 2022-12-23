import styled from "styled-components";
import tw from "twin.macro";
import { TypedAnimation } from "../../components/common";
const Container = styled.div`
  ${tw`text-white h-full flex flex-col justify-center gap-y-8 `};
  width: 87%;
  padding: 5rem 0rem 5rem 0rem;
  z-index: 10;

  @media (max-width: 1024px) {
    width: 86%;
  }
  @media (max-width: 768px) {
    // font:22;
  }
  @media (max-width: 486px) {
    ${tw`p-2 mt-8 w-full`}
    margin-top: 0;
  }
`;
const ContentWrapper = styled.div`
  ${tw` w-full h-full flex justify-center items-center  `};
  z-index: 10;
  @media (max-width: 768px) {
    ${tw` w-full h-full flex  justify-center items-center   `};
  }
  @media (max-width: 520px) {

    margin-top: 10%;
    margin-bottom: 15%;
    ${tw` w-full h-full flex flex-col justify-center items-center   `}
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
  @media (max-width: 370px) {
    ${tw`  space-y-4  `}
  }
`;
const LeftContainer = styled.div`
  ${tw`  flex flex-row  items-baseline   space-y-5 bg-black`}
  @media (max-width: 1024px) {
    padding: 0%;
  }
  @media (max-width: 768px) {
    ${tw` space-y-4  `}
  }
  @media (max-width: 520px) {
    ${tw`h-auto space-y-0  m-0`}
  }
`;
const HeaderWrapper = styled.div`
  ${tw` flex justify-start flex-col `};
  svg {
    width: 50%;
    font-size: 3rem;
    fill: #ffc400;
  }

  @media (max-width: 1024px) {
    padding-left: 0%;
  }
  @media (max-width: 768px) {
    padding-left: 0px;
  }
  @media (max-width: 486px) {
  }
`;
const HeaderText = styled.div`
  ${tw`text-white font-bold`}
  width: 100%;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 23px;
    line-height: normal;
  }
  @media (max-width: 486px) {
    font-size: 25px;
    font-weight: 900;
    width: 100%;
  }
`;

const CustomContent = styled.div`
  margin-top: 3%;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 13px;
    font-weight: 500;
  }
  @media (max-width: 486px) {
    font-size: 15px;
    font-weight: 500;
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
const CardHeader = styled.div`
  ${tw` flex flex-col items-center`}
  height: 0rem;
  border-radius: 4px 4px 0 0;
  svg {
    font-size: 2rem;
    fill: white;
    /* margin-top: 1rem; */
    margin-right: auto;
    @media (max-width: 520px) {
      ${tw` mt-2 ml-auto  `};
    }
  }
  @media (max-width: 520px) {
    // height: 5.1rem;
  }
`;
const CardWrapper = styled.div`
  /* ${tw` flex `} */
  // min-width: 65%;
  width: 100%;
  @media (max-width: 520px) {
    display:none;
  }
`;
const ReviewCard = styled.div`
  ${tw`  flex flex-col rounded-md  border border-gold `}
  svg {
    ${tw`text-3xl -mt-4`}
    @media (max-width: 520px) {
      font-size: 3rem;
      margin-top: 0rem;
    }
    @media (max-width: 374px) {
      font-size: 1.25rem;
      margin-top: 4rem;
      margin-left: -0.5rem;
    }
    @media (max-width: 520px) {
      font-size: 1.25rem;
      margin-top: 4rem;
      margin-left: -0.5rem;
    }
  }
  max-width: 100%;
  @media (max-width: 520px) {
    ${tw`flex flex-row  h-44 `}
  }
`;
const LogoWrapper = styled.div`
  ${tw`w-24 h-24 m-8 
  `}
  display:flex;
  flex: 1 0 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  height: auto;

  /* transition: transform 0.8s;
  position: relative;
  transform-style: preserve-3d; */

  @media (max-width: 1024px) {
    width: 8rem;
  }
  @media (max-width: 768px) {
    margin: 5%;
    width: 6.3rem;
  }
  @media (max-width: 486px) {
    width: 15rem;
  }
`;
const Logo = styled.img`
  ${tw`rounded-md h-full w-full`}/* border-radius: 1rem; */
  /* transition: transform 2.8s;
  position: absolute;
  backface-visibility: hidden; */
`;

const FlipImage = styled.img`
  ${tw`rounded-md h-full w-full`}/* border-radius: 1rem; */
/* position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden; */
`;

const CardHeaderText = styled.p`
  ${tw`text-black font-bold text-lg  text-center bg-gold h-20 `}
`;
const CardContent = styled.p`
  ${tw`text-center font-light text-lg`}
  text-align: center;

  font-size: 1.5rem;
  line-height: 1.75rem;
  z-index: 0;
  opacity: 0;
  display: flex;
  filter: brightness(0);
  min-height: 7rem;
  height: 18rem;
  flex-wrap: wrap;
  align-items: center;

  :hover {
    filter: brightness(1.2);
    cursor: pointer;
    transition: 0.5s;
    background-color: #dab109d1;
    opacity: 2;
    font-weight: 500;
    color: black;
    z-index: 1;
  }

  @media (max-width: 1170px) {
    ${tw`text-center `}
  }
  @media (max-width: 768px) {
    ${tw`text-center   text-xs `}
  }
  @media (max-width: 520px) {
    ${tw`   `};
    :hover {
    }
  }
  @media (max-width: 374px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: horizontal;
    overflow: hidden;
    min-height: 7rem;
    height: 12rem;
    font-size: 10px;
    width: 15rem;
  }
  @media (max-width: 520px) {
    font-size: 10px;
    width: 15rem;
  }
`;
const Footer = styled.footer`
  ${tw`flex items-end ml-auto gap-x-4`}
  svg {
    fill: #ffc400;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      fill: white;
    }
  }
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

const Content = styled.div`
  ${tw` flex items-center border border-gold  rounded-lg`}
  padding: 3rem;
  flex-direction: row;
  padding-right:0;

  @media (max-width: 1024px) {
    padding: 2%;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 3%;
    flex-direction: column;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
  @media (max-width: 326px) {
  }
`;
const ButtonWrapper = styled.div`
  ${tw`w-full  flex  justify-start items-center`}
  @media (max-width: 768px) {
    ${tw``}
  }
  @media (max-width: 520px) {
    ${tw`  `};
  }
`;
const Button = styled.button`
  ${tw` w-3/12 px-3 py-1.5 bg-gold rounded-lg text-black text-lg font-light  transition-all duration-500 ease-in-out border border-black hover:border hover:border-gold hover:bg-black hover:text-white`}
  @media (max-width: 1170px) {
    ${tw`w-4/12 px-2 py-1`}
  }
  @media (max-width: 768px) {
    ${tw`  w-4/12  text-sm`}
  }
  @media (max-width: 520px) {
    ${tw`  `};
  }
`;
const RightContainer = styled.div`
  ${tw` h-full w-full flex justify-start items-center  `}
  @media (max-width: 768px) {
    ${tw`  `}
  }

  @media (max-width: 520px) {
    ${tw` h-auto   flex justify-start items-center`}
  }
`;

const Image1 = styled.img`
  ${tw`rounded-xl   w-full h-full `};
`;
const Image2 = styled.img`
  ${tw`   w-full h-full `};
`;
const SideLine = styled.div`
  ${tw`-ml-8  `}
  @media (max-width:1025px) {
    ${tw`-ml-16`}
  }
  @media (max-width: 768px) {
    ${tw` -ml-16 `};
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const ImageWrapper1 = styled.div`
  ${tw`mt-16 pt-12`};
  transform: scale(0.75);
  @media (max-width: 1170px) {
    transform: scale(0.75);
  }
  @media (max-width: 520px) {
    ${tw` hidden  `};
  }
`;
const ImageWrapper2 = styled.div`
  ${tw`hidden`};

  @media (max-width: 520px) {
    ${tw` block  `};
    transform: scale(1);
  }
`;

const ParralxImage1 = styled.div`
  ${tw``}
`;

const ParralxImage2 = styled.div``;

const ContentWrapper2 = styled.div`
  ${tw`hidden`}
  @media (max-width:520px) {
    ${tw` block   h-auto space-y-5 w-full`};
  }
  @media (max-width: 370px) {
    ${tw` space-y-2`}
  }
`;

const Content2 = styled.div`
  ${tw`text-left w-8/12 font-light text-lg hidden`}

  @media (max-width:520px) {
    ${tw` block w-full text-justify text-base`};
    word-spacing: 1.5px;
  }
  @media (max-width: 425px) {
    ${tw`  w-full text-sm`};
  }
  @media (max-width: 370px) {
    ${tw`  text-xs `}
  }
`;
const ButtonWrapper2 = styled.div`
  ${tw`w-full  flex  justify-start items-center hidden `}

  @media (max-width:520px) {
    ${tw` block  `};
  }
`;
const Button2 = styled.button`
  ${tw` w-3/12 px-3 py-1.5 bg-gold rounded-lg text-black text-lg font-light hidden transition-all duration-500 ease-in-out border border-black hover:border hover:border-gold hover:bg-black hover:text-white`}

  @media (max-width:520px) {
    ${tw` block w-4/12 px-2 py-1 text-base `};
  }
  @media (max-width: 425px) {
    ${tw` block text-sm`};
  }
  @media (max-width: 370px) {
    ${tw`  text-xs `}
  }
`;

const clintNumber = styled.div`
  position: absolute;
  font-size: 30px;
  bottom: 63%;
  color: gold;
  left: 5%;
  background-color: transparent;
  font-weight: 300;
  display: flex;
  align-items: center;
  font-family: "Playfair Display", serif;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 20px;
    bottom: 76%;
  }
  @media (max-width: 486px) {
    font-size: 25px;
    bottom: 70%;
  }
`;
const ProjectCompleted = styled.div`
  padding: 8%;
  font-size: 17px;
  font-weight: 900;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 800;
  }
  @media (max-width: 486px) {
    font-size: 18px;
  }
`;
const Clints = styled.div`
  margin-top: 10%;
  display: flex;
  gap: 20%;
  row-gap: 4rem;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 486px) {
    margin-top: 10%;
    gap: 15%;
  }
`;
const Project = styled.div`
  background-color: #ffd7001a;
  border-radius: 11px;
  flex-basis: 40%;
  display: flex;
  box-shadow: -1px 0px 40px -7px goldenrod;
  flex-direction: column;
  position: relative;
  justify-content: center;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 486px) {
    margin: 5%;
    flex-direction: column;
    flex-basis: 90%;
  }
`;

export {
  Project,
  Clints,
  ProjectCompleted,
  clintNumber,
  Container,
  ContentWrapper,
  LeftContainer,
  CardHeaderText,
  HeaderText,
  CustomContent,
  LogoWrapper,
  Footer,
  CardHeader,
  CardWrapper,
  ReviewCard,
  Logo,
  CardContent,
  Content,
  ButtonWrapper,
  Button,
  Content2,
  ButtonWrapper2,
  Button2,
  RightContainer,
  ImageWrapper1,
  ImageWrapper2,
  Image1,
  Image2,
  Head,
  FirstHeadLayer,
  SecHeadLayer,
  SideLine,
  HeaderWrapper,
  MainHeading,
  ParralxImage2,
  ParralxImage1,
  ContentWrapper2,
  FlipImage,
};
