import styled from "styled-components";
const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 366px;
  height: 200px;
  padding: 20px;
  gap: 10px;
  background-color: black;
  box-shadow: 0 5px 15px rgb(124 116 116 / 50%);
  overflow: hidden;
  border: 1px solid rgb(255, 196, 0);
  @media (max-width:374px) {
    width: 280px;
    
  }
`;
const CardLogo = styled.img`
  width: 50px;
`;
const CardText = styled.div`
  color: rgb(255, 196, 0);
  text-align: center;
  font-size: 1.5rem;
  font-family: sans-serif;
  transition: all 0.5s;
`;
const CardOverlay = styled.div`
  background: #ffd700;
  left: 0;
  top: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 350ms cubic-bezier(0, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  ${CardsContent}:hover & {
    top: 0;
  }
`;
const Text = styled.div`
text-align: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 550;
  font-family: sans-serif;
`;
const SubText = styled.div`
display: flex;
align-items: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 200;
  font-family: sans-serif;
  column-gap: 1rem;
  
  svg{
    cursor: pointer;
    font-size: 2rem;
    :hover{
        animation-name: moveInleft;
  animation-duration: 2s;
  @keyframes moveInleft {
    0% {
       
        transform: translateX(0);
    }

    80% {
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }


}
  }}
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
export { CardsContent, CardLogo, CardText, CardOverlay, Text, SubText };
