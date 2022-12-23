import styled from "styled-components";
import tw from "twin.macro";
const Wrapper  =styled.div`
${tw`flex flex-col `}
@media (max-width:426px){
    width: fit-content;
}
`;
const Container = styled.div`
position: relative;
  height: 30rem;
  @media (max-width:430px){
  height: 15rem;
}
`;
const HeroContent = styled.div`
margin-top: 10%;
display: flex;
position: absolute;
  flex-direction: column;
  row-gap: 1.5rem;
  animation-name: moveInleft;
  animation-duration: 3s;
  align-items: flex-start;
  /* height: 50rem; */
  padding: 2rem;
  


@media(max-width:426px) {
align-items: center;
}
  


  @keyframes moveInleft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

const HeroMenu = styled.div`
 
  margin: -11px;
 
  ${tw`text-7xl font-bold flex flex-col ml-4  gap-y-4 text-gold `}
  @media (max-width:430px){
 font-size:3rem;
}
`;
const BallWrapper  =styled.div`
/* height: 20rem; */
width: 40rem;
position: relative;
margin-left: auto;
@media (max-width:780px){
    padding-left: 15rem;
}
@media (max-width:430px){
    width:20rem;
    padding: 0rem;
}

`;
const SubContent = styled.div`
${tw`text-2xl text-white `}

`;

const SubText = styled.div`
${tw` flex flex-col gap-y-8 text-gold text-4xl text-center`}
margin-top: 15%;
`;
const Content = styled.div`
${tw`p-12 rounded-md border border-gold`}
@media (max-width:430px){
   padding: 1rem;
}

`;
const ContentWrapper = styled.div``;
const CardHeader = styled.div`
${tw`text-gold text-4xl font-semibold`}
`;
const TextCard = styled.div`
${tw`p-4 rounded-md flex flex-col gap-y-8 ` }
&:hover{
    cursor: pointer;
   box-shadow: 0 0 5px  #D3D3D3;

}

`;
const CardText = styled.div`
${tw`text-white text-3xl font-normal`}
`;
const CardLogo = styled.img``;

export {
    Wrapper,Container,BallWrapper,HeroContent,HeroMenu,SubText,SubContent,CardHeader,TextCard,CardText,Content,ContentWrapper,CardLogo
}