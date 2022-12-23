import styled from "styled-components";

const BallWrapper = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%;
    height: 80%;
    /* background-color: black; */
  }

  & .animation-wrapper {
    width: 100%;
  }

  & .sphere-animation {
    position: absolute;
    top: 10%;
    left: 0%;
    width: 100%;
    height: 100%;
  }

  & .sphere path {
    fill: url(#sphereGradient);
    stroke-width: 1px;
    stroke: rgba(80, 80, 80, 0.35);
    backface-visibility: hidden;
  }
`;

export { BallWrapper };
