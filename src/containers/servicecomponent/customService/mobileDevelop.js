import * as S from "./mobileDevelop.style";

const MobileDevelop = () => {
  const mobile = localStorage.getItem("mobileDevelopment");
  const data = JSON.parse(mobile);

  console.log("data of mobile", data);
  return (
    <S.Main>
      <S.FirstContainer>
        <S.Heading>{data?.headding1}</S.Heading>
        <S.ImageContainer>
          <S.Image1 src={data?.image1?.url} alt="" />
        </S.ImageContainer>
      </S.FirstContainer>

      <S.SecondContainer>
        <S.Heading>{data?.title2}</S.Heading>
        <S.Container>
          <S.Paragraph>{data?.title2Content}</S.Paragraph>
          <S.Paragraph>{data?.title2Cont1}</S.Paragraph>
        </S.Container>
      </S.SecondContainer>
      <S.ThirdContainer>
        <S.Heading>{data?.title3}</S.Heading>
        <S.ImageContainer>
          <S.Image1 src={data?.imageKey.url} alt="" />
        </S.ImageContainer>
      </S.ThirdContainer>
      <S.FourthContainer>
        <S.Heading>{data?.title4}</S.Heading>
        <S.Paragraph>{data?.title4Content}</S.Paragraph>
      </S.FourthContainer>
      <S.FifthContainer>
        <S.Heading>{data?.title5}</S.Heading>
        <S.Paragraph>{data?.title5Content}</S.Paragraph>
        <S.CardContainer>
          {data?.mobileappJson.map((item, index) => (
            <S.Card key={index}>
              <S.Image src={item.image} alt="" />
              <S.Title>{item.title}</S.Title>
              <S.Content>{item.content}</S.Content>
            </S.Card>
          ))}
        </S.CardContainer>
      </S.FifthContainer>
      <S.SixthContainer>
        <S.Heading>{data?.title6}</S.Heading>
        <S.Paragraph>{data?.title6Content}</S.Paragraph>
        <S.Heading>{data?.title7}</S.Heading>
        <S.ImageContainer>
          <S.Image1 src={data?.title7Image.url} alt="" />
        </S.ImageContainer>
      </S.SixthContainer>
      <S.SeventhContainer>
        <S.Heading>{data?.title8}</S.Heading>
        <S.Paragraph>{data?.title8Content}</S.Paragraph>
        <S.ImageContainer>
          <S.Image2 src={data?.title8Image?.url} alt="" />
        </S.ImageContainer>
      </S.SeventhContainer>
    </S.Main>
  );
};
export default MobileDevelop;
