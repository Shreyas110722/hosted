import styled from "styled-components";
import tw from "twin.macro";
import { TypedAnimation } from "../../components/common";
const Container = styled.div`
  ${tw`flex justify-center items-center h-full w-full mt-0 pr-5  `};
  z-index: 10;
  @media (max-width: 768px) {
    ${tw`   `}
  }
  @media (max-width: 486px) {
    padding: 0;
  }
`;
const ContentWrapper = styled.div`
  ${tw`text-white flex flex-col justify-center items-center  space-y-0 w-full h-full mt-4  `};
  z-index: 10;
  width: 92%;
  @media (max-width: 1235px) {
    ${tw`   `}
    width:90%;
  }
  @media (max-width: 768px) {
    ${tw`   `}
    width:95%;
    margin: 0;
  }
  @media (max-width: 550px) {
    ${tw` pl-0 pr-0  w-full space-y-4 justify-center items-start `}
    margin-top:-10%;
    display: flex;
    align-items: center;
  }
`;
const HeaderWrapper = styled.div`
  ${tw`text-left w-full flex justify-start items-end mt-10 pb-5`};
  z-index: 10;
  @media (max-width: 1120px) {
    ${tw``};
  }
  @media (max-width: 768px) {
    ${tw`h-auto justify-start items-center `}
  }

  @media (max-width: 486px) {
    ${tw`mt-10 justify-start items-start pb-0  `}
    margin-top: 5rem;
  }
`;
const MainHeading = styled.div`
  ${tw`  flex justify-start items-center  relative  `};
  @media (max-width: 1120px) {
    ${tw``};
  }
  @media (max-width: 520px) {
    ${tw`mt-0 `}
    margin-left:5%;
  }
`;
const Head = styled.div`
  ${tw` `};
  @media (max-width: 768px) {
    ${tw`    `}
  }
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full  `}
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

const IndustriesWrapper = styled.div`
  ${tw`w-auto flex justify-start items-start `};

  @media (min-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    margin-top: 10%;
  }
  @media (max-width: 468px) {
    width: 90%;
    padding-right: 0;
  }

  /* @media (max-width: 1090px) {
    ${tw` -ml-0`};
  } */
  /* @media (max-width: 768px) {
    ${tw` p-0 pr-3 space-x-2 justify-start items-center -ml-0 mr-0 `}
  }

  @media (max-width: 520px) {
    ${tw`p-0 pr-0 flex flex-col justify-start items-start -ml-0  space-x-0  space-y-1.5`};
    width: 100%;
    /* padding-left: 10px; */
  /* }  */
`;
const ImagesWrapper = styled.div`
  ${tw` flex flex-col  h-full justify-center items-center space-y-5    `}
  @media (max-width: 1120px) {
    ${tw` `};
  }
  @media (max-width: 1020px) {
    ${tw`  `};
  }
  @media (max-width: 768px) {
    ${tw` items-start justify-start   space-y-1 space-x-0 mt-48`}
  }
  @media (max-width: 520px) {
    ${tw`h-auto w-full flex flex-row justify-start items-start  m-0 space-y-0 space-x-1.5 `}
  }

  &:nth-child(2) {
    ${tw`  h-full flex flex-row justify-between items-center space-x-4 space-y-0 `};
    @media (max-width: 1120px) {
      ${tw`  `};
    }
    @media (max-width: 1020px) {
      ${tw`  `};
    }
    @media (max-width: 768px) {
      ${tw`  space-x-1 space-y-0 justify-between items-start mt-48 `};
    }
    @media (max-width: 520px) {
      ${tw`  h-auto w-full flex flex-col justify-start items-start mt-0 space-x-0 space-y-1.5`}
    }
  }
`;

const IndustryImage1 = styled.div`
  /* transform:scale(); */
  ${tw``}
  @media (max-width: 768px) {
    ${tw`transform  `}
  }
  @media (max-width: 520px) {
    ${tw`hidden `}
  }
`;
const IndustryImage2 = styled.div`
  ${tw`hidden `}

  @media (max-width: 520px) {
    ${tw`block w-full`};
    /* transform:scaleX(1.1); */
  }
`;
const SideLine = styled.div`
  ${tw`-ml-0 mt-8  `};
  z-index: 10;
  @media (max-width: 1230px) {
    ${tw` -ml-0  mt-10`};
  }
  @media (max-width: 1120px) {
    ${tw` -ml-0  mt-20`};
  }
  @media (max-width: 768px) {
    ${tw` -ml-16  mt-20`};
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
export {
  Container,
  HeaderWrapper,
  MainHeading,
  IndustriesWrapper,
  ImagesWrapper,
  Head,
  FirstHeadLayer,
  SecHeadLayer,
  SideLine,
  IndustryImage1,
  IndustryImage2,
  ContentWrapper,
};
