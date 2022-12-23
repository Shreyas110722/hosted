import styled from "styled-components";
import tw from "twin.macro";
import { TypedAnimation } from "../../components/common";
const Container = styled.div``;
const Hero = styled.div`
  ${tw`flex flex-col gap-y-20 p-8`}
`;
const Header = styled.div`
  /* text-align: center;
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black; */
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
const ImageContent = styled.div`
  ${tw`flex `}
`;
const ImageText = styled.div`
  ${tw`text-4xl text-gold font-semibold`}
`;
const Image = styled.img`
  /* width: 100%;
height: 100%; */
`;
const SubText = styled.div`
  ${tw`text-2xl text-white font-medium`}
`;
const ImageWrapper = styled.div`
  width: 20rem;
  height: 20rem;
`;
const CardWrapper = styled.div`
  ${tw`flex gap-x-8 w-full `}
  @media (max-width: 520px) {
    ${tw`flex-wrap gap-y-8  `}
  }
`;
const DetailsCard = styled.div`
  ${tw` flex flex-col items-center  rounded-md  gap-4 p-4`}
  width: 33.3%;
  border: 2px solid #ffc400;
  @media (max-width: 520px) {
    ${tw`w-full  `}
  }
`;
const CardHeader = styled.div`
  ${tw`text-gold text-3xl font-semibold`}
`;
const CardLogo = styled.div`
  svg {
    fill: white;
    font-size: 3rem;
    background-color: #ffc400;
    border-radius: 0.5rem;
  }
`;
const CardContent = styled.div`
  ${tw` text-center text-white text-2xl font-medium`}
`;
const HeroContent = styled.div`
  ${tw`mt-20 p-10`}
  @media (max-width: 520px) {
    ${tw`p-0  `}
  }
`;
const MainHeader = styled.div`
  ${tw`text-gold text-4xl font-semibold p-8`}
  border: 2px solid #FFC400;
  border-radius: 1rem;
`;
const SubHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 3rem;
  
  
`;
const Content = styled.div`
width: 47%;
@media (max-width:769px){
  width: 45%;
}
@media (max-width: 520px) {
    ${tw`w-full  `}
}
`;
const HeaderText = styled.div`
  ${tw`text-gold text-3xl font-semibold `}
`;
const SubContent = styled.div`
  ${tw`text-white text-2xl font-medium`}
`;
const Heading = styled.div`
  ${tw`text-gold text-4xl font-semibold p-8 text-center`}
`;
const Reason = styled.div`
  ${tw`flex flex-col gap-y-8 p-8`}
`;
const ReasonImage = styled.img``;
const ReasonHeader = styled.div`
  ${tw`text-gold text-4xl font-bold`}
  h2 {
    ${tw`flex gap-x-4`}
    @media (max-width: 520px) {
    ${tw`flex-col `}
  }
  }
 
`;
const ReasonList = styled.div`
  ul {
    ${tw`text-white text-2xl font-semibold flex flex-col gap-y-8`}
  }
  li {
    ${tw`flex items-center gap-x-4`}
    svg {
      fill: #ffc400;
    }
  }
`;
const Firstheader = styled.div`
 z-index: -1;
  ${tw`text-8xl text-center  opacity-40 w-full `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  @media (max-width: 1170px) {
 font-size: 4rem;
  }
  @media (max-width: 768px) {
  font-size: 3.5rem;
}
  @media (max-width: 520px) {
    font-size:3rem;
  }
 
`;
const Secheader = styled(TypedAnimation)`
  /* position: relative; */
  ${tw`text-7xl text-gold  absolute  text-center font-bold w-full -ml-28 mt-4 `}
  @media (max-width: 1170px) {
    ${tw`text-6xl`}
    text-align: end;
  }


  @media (max-width: 768px) {
    ${tw`text-5xl`}
    text-align: end;
  }
  @media (max-width: 520px) {
    ${tw`text-4xl `}
    text-align: end;
  }
`;
export {
  Container,
  Hero,
  Header,
  Firstheader,
  Secheader,
  Heading,
  Content,
  ImageContent,
  ImageText,
  Image,
  SubText,
  ImageWrapper,
  CardWrapper,
  DetailsCard,
  CardContent,
  CardHeader,
  CardLogo,
  HeroContent,
  HeaderText,
  MainHeader,
  SubHeader,
  SubContent,
  Reason,
  ReasonHeader,
  ReasonList,
  ReasonImage,
};
