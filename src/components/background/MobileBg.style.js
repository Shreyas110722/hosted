import styled from "styled-components";
import tw from "twin.macro";
const Bgwrapper = styled.div`
`;
const Icon = styled.div`
svg{
font-size: 25rem;
${tw`text-white absolute `}
animation: rotation 2s infinite linear;
}

@keyframes rotation {
  100%{transform: rotateY(360deg);}     
      }
`;
export {
Bgwrapper,Icon
} 