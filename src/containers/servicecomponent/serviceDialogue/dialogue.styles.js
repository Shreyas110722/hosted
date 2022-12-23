import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  z-index: 100;

${tw`flex flex-col justify-center items-center space-y-10 relative`}
`;
const Heading = styled.div`
${tw`font-extrabold text-gold text-5xl`}
`;
const IconWrapper = styled.div`
  z-index: 100;

${tw`flex flex-col justify-center items-center space-y-3 `}
`;
const Icon = styled.div`
  z-index: 100;

${tw`border border-gold p-6 rounded-xl bg-black `}
`;
const Name = styled.div`
${tw`font-extralight text-xl text-gold`}
`;
const Content = styled.div`
${tw` text-center`}
`;

const StrokeHead = styled.div`
  z-index: 10;
  ${tw`text-8xl   opacity-40 w-full text-center font-extrabold absolute top-14`}
  -webkit-text-stroke: 1px yellow;
  -webkit-text-fill-color: black;

  @media (max-width: 501px) {
    ${tw`text-7xl`}
  }
 
`;
export { Container, Heading, IconWrapper, Icon, Name, Content, StrokeHead }