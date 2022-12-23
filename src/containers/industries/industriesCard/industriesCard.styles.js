import styled from "styled-components";
import tw from "twin.macro";

const IndustriesImageWrapper = styled.div`
  ${(props) =>
    props.borderRadius === "top-left"
      ? tw`h-full w-full relative bg-gold border border-gold rounded-tl-xl  `
      : props.borderRadius === "bottom-left"
      ? tw`h-full w-full relative bg-gold border border-gold rounded-bl-xl`
      : props.borderRadius === "top-right"
      ? tw`h-full w-full relative bg-gold border border-gold rounded-tr-xl`
      : props.borderRadius === "bottom-right"
      ? tw`h-full w-full relative bg-gold border border-gold rounded-br-xl`
      : tw`h-full w-full relative bg-gold border border-gold`};

  /* ${tw`h-full w-full relative bg-gold border border-gold`}; */

  z-index: 5;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  &:hover .industriesheading {
    width: 100%;
    right: 2.5%;
    text-align: center;
    overflow: hidden;
  
    /* transform: translateX(-10%); */
  }
`;
const IndustriesImage = styled.img`
  overflow: hidden;

  ${tw`h-full w-full `};

  transition: all 0.5;
  &:hover {
    ${tw`rounded-xl`}
    overflow:hidden;

    transition: all 1s;
    mix-blend-mode: screen;

    filter: brightness(0.3);
  }
`;

const IndustriesTitle = styled.h4`
  font-size: calc(1vw + 0.5rem);
  transition: all 0.3s;
  transform: translateX(0%);
  ${tw`text-black font-semibold absolute bottom-5 left-2`};

  display: none;
`;
  const IndustriesHeading = styled.h2`
  font-size: calc(1vw + 1rem);
  transition: all 1s;
  opacity: 0.8;
  word-break: break-all;
  user-select: none;
  z-index: -1;
  ${tw`text-black text-right font-semibold absolute top-1/2 -right-1/2`};
`;
export {
  IndustriesImageWrapper,
  IndustriesImage,
  IndustriesTitle,
  IndustriesHeading,
};
