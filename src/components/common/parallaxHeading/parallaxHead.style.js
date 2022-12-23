import tw from "twin.macro";
import styled from "styled-components";
const Head = styled.div`
  ${tw` `}
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-7xl   opacity-20 w-full `}
  -webkit-text-stroke: 1px yellow;
  -webkit-text-fill-color: black;
`;
const SecHeadLayer = styled.div`
  ${tw`text-5xl text-gold absolute bottom-0 left-0 font-bold w-full `};
`;

export { Head, FirstHeadLayer, SecHeadLayer };
