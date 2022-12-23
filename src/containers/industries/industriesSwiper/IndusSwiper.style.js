import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* @media(min-width:1024px){
      width:80%;
      margin-left: 5%;
      
      } */

  /* @media(max-width:1024px){
      width:100%;
      
      } */
  /* @media(max-width:768px){
    // margin-left: 8%;
    }
    @media(max-width:486px){
    width:100%;
    
    } */
`;

const SwiperCard = styled.div`
  display: flex;
  justify-content: space-evenly;

  /*
  @media(max-width:486px){
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 81%;
    margin-left: 9.4%;
}
  
  @media (max-width:486px){
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 81%;
    margin-left: 9.4%;

  } */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  @media screen and (max-width: 486px) {
    width: 100%;
    object-fit: cover;
  }

  /* @media screen  and (max-width:768px) {
    
  }
  @media screen  and (max-width:486px) {
    margin-bottom: 10%;
    max-width: 98%;
    object-fit: cover;
    
  } */
`;
const ImageContainer = styled.div`
  flex-basis: 25%;

  @media screen and (max-width: 1280px) {
    flex-basis: 25%;
  }

  @media screen and (max-width: 486px) {
    flex-basis: 100%;
    filter: brightness(0.5);
    position: absolute;
    height: -webkit-fill-available;
  }
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 65%;
  border: 2px solid gold;
  padding: 1%;
  border-radius: 18px;

  @media screen and (max-width: 1024px) {
    flex-basis: 60%;
  }

  @media screen and (max-width: 486px) {
    position: relative;
    flex-basis: 90%;
    border: none;
    padding:2%;
  }
`;
const Number = styled.div`
  display: flex;
`;
const BigNum = styled.div`
  font-size: 65px;
  color: goldenrod;
  font-weight: 600;

  @media screen and (max-width: 1300px) {
    font-size: 65px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 55px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }

  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 486px) {
    font-size: 30px;
  }
`;
const SmallNum = styled.div`
  font-size: 26px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.01px;
  color: #c6c6c6;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1300px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 28px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 486px) {
    font-size: 15px;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: goldenrod;

  @media screen and (min-width: 1024px) {
    font-size: 47px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 486px) {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
const Content = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 3%;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 486px) {
    font-size: 12px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;

  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
  @media screen and (max-width: 486px) {
    font-size: 15px;
    font-weight: 500;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    padding-left: 2%;
  }
`;
export {
  Container,
  SwiperCard,
  Image,
  Card,
  Number,
  BigNum,
  SmallNum,
  Title,
  Content,
  ImageContainer,
  Paragraph,
};
