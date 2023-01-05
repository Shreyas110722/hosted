import "./customService.css";
import * as S from "./customService.style";

const CustomService = () => {
  const custService = localStorage.getItem("customService");
  const data = JSON.parse(custService);

  return (
    <S.Main id="customService">
      <S.FirstContainer>
        <S.LeftContent>
          <S.Heading>{data?.uiTitle}</S.Heading>
          <S.Paragraph>{data?.uiContent}</S.Paragraph>
        </S.LeftContent>
        <S.RightImage>
          <S.Image src={data?.uximage.url} alt="" />
        </S.RightImage>
      </S.FirstContainer>
      <S.SecondContainer>
        <S.LeftContainer>
          <S.SubContent>
            <S.Heading>{data?.methodology}</S.Heading>
            <S.Paragraph>{data?.methodologyContent}</S.Paragraph>
          </S.SubContent>
          <S.SubContent>
            <S.Image src={data?.methodologyImage.url} alt="" />
          </S.SubContent>
        </S.LeftContainer>
        <S.RightContainer>
          {data?.uiCards.map((item, index) => (
            <S.ContentContainer key={index}>
              <S.ImageContainer>
                <S.Imagecard src={item.image} alt="" />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>{item.header}</S.Heading>
                <S.Paragraph>{item.para}</S.Paragraph>
              </S.SubContent>
            </S.ContentContainer>
          ))}
        </S.RightContainer>
      </S.SecondContainer>
      <S.ThirdContainer></S.ThirdContainer>
    </S.Main>
  );
};
export default CustomService;
