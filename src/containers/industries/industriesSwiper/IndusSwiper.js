import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper";
import "../industriesSwiper/IndusSwipe.css";
import * as S from "./IndusSwiper.style";

// import {Card,QuoteIcon,Container,CardContainer,ImageContainer,Content,CredentialContainer,Image,Name,Paragraph,Title} from './styles';

const IndusSwiper = ({data}) => {
  return (
    <S.Container >
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}  
        className="mySwiper"
      >
{data?.map((item,index)=>
        <SwiperSlide key={index}>
          <S.SwiperCard>
            <S.ImageContainer>
              <S.Image
                src={item?.image?.url}
                alt={item?.image?.title}
              />
            
            </S.ImageContainer>
            <S.Card>
              <S.Number>
                <S.BigNum>{item?.bignumber}</S.BigNum>
                <S.SmallNum>{item?.smallnumber}</S.SmallNum>
              </S.Number>
              <S.Title>{item?.title}</S.Title>
              <S.Content>
                <S.Paragraph>{item?.description}</S.Paragraph>
              </S.Content>
            </S.Card>
          </S.SwiperCard>
        </SwiperSlide>
        )}
      </Swiper>
    </S.Container>
  );
};
export default IndusSwiper;
