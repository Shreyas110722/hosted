import * as S from "./eCommerce.style";

const ECommerce = () => {
  const eCommerce = localStorage.getItem("eCommerce");
  const data = JSON.parse(eCommerce);

  return (
    <S.Main>
      <S.Heading>{data?.title1}</S.Heading>
      <S.ImageContainer>
        <S.Image src={data?.title2Image.url} alt="" />
      </S.ImageContainer>
      <S.Para>{data?.title1Content}</S.Para>
      <S.Para>{data?.title1Cont1}</S.Para>
      <S.FirstContainer>
        <S.Heading>{data?.title2}</S.Heading>
        <S.Container1>
          {data?.title2Json.map((el, index) => (
            <S.Card1 key={index}>
              <S.Title>{el.name}</S.Title>
              <S.Para>{el.para}</S.Para>
            </S.Card1>
          ))}
        </S.Container1>
      </S.FirstContainer>

      <S.SecondContainer>
        <S.Heading>{data?.title3}</S.Heading>
        <S.Container2>
          {data?.title3Json.map((item, index) => (
            <S.Card2 key={index}>
              <S.Img src={item.image} />
              <S.Title>{item.title}</S.Title>
            </S.Card2>
          ))}
        </S.Container2>
      </S.SecondContainer>
    </S.Main>
  );
};
export default ECommerce;
