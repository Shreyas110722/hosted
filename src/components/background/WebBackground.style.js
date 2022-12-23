import styled from "styled-components";
import tw from "twin.macro";
const Bgwrapper = styled.div``;
const Icon = styled.div`
  svg {
    font-size: 25rem;
    ${tw`text-gold absolute `}
    opacity: 0.5;
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    /* 50%{transform: rotate(360deg);}    */

    100% {
      transform: scale(2);
      opacity: 0.5;
    }
  }
`;
export { Bgwrapper, Icon };
