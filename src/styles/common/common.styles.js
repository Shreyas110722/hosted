import styled from "styled-components";
import tw from "twin.macro";
const Container = styled.div`
  /* overflow: hidden; */

  ${tw`text-white flex flex-col justify-center items-center  space-y-10 w-9/12 h-full  `}
`;
const HeaderWrapper = styled.div`
  ${tw` w-full  flex justify-start items-center  mt-4 text-left`}
`;
const Header = styled.h1`
  z-index: 20;
  ${tw`text-7xl text-gold relative font-extrabold w-full`}

  &:before {
    content: attr(data-head);
    z-index: -1;
    ${tw`text-8xl absolute -top-5 left-0 opacity-20 w-full `}
    -webkit-text-stroke: 1px yellow;
    -webkit-text-fill-color: black;
  }
`;

export { Container, HeaderWrapper, Header };
