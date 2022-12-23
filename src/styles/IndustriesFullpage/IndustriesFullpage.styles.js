import styled from "styled-components";
import tw from "twin.macro";
const ContentWrapper  = styled.div``;
const Hero = styled.div``;
const HeroHeader = styled.div`
${tw` flex items-center text-gold text-6xl font-semibold`}
p {
    ${tw`text-white text-3xl `}
}
`;
export {
    ContentWrapper,Hero,HeroHeader
}