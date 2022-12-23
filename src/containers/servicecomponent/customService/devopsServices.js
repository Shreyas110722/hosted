import "./devopsService.css";
import * as S from "./devopsService.style";

const DevopsServices = () => {
  const devops = localStorage.getItem("devopsService");
  const data = JSON.parse(devops);

  return (
    <S.Main>
      <S.FirstContainer>
        <S.Content>
          <S.Heading>{data?.title1}</S.Heading>
          <S.Para>{data?.title1Content}</S.Para>
        </S.Content>
        <S.Container>
          <S.Image src={data?.title1Image?.url} alt="" />
        </S.Container>
      </S.FirstContainer>
      <S.SecondContainer>
        <S.Container>
          <S.Image src={data?.title2Image?.url} alt="" />
        </S.Container>
        <S.Container>
          <S.Heading>{data?.title2}</S.Heading>
          <S.Para>{data?.title2Content}</S.Para>
          <S.Para>{data?.title2Content1}</S.Para>
        </S.Container>
      </S.SecondContainer>
      <S.ThirdContainer>
        <S.Heading>{data?.title3}</S.Heading>
        <S.ThirdImageContainer>
          <S.Image src={data?.title3Image.url} alt="" />
        </S.ThirdImageContainer>
      </S.ThirdContainer>
      <S.FourthContainer>
        <S.FifthContainer>
          <S.Heading>{data?.title4}</S.Heading>
          <S.Para>{data?.title4Content}</S.Para>
        </S.FifthContainer>
        <S.ImageContainer>
          {data?.title4Card?.map((item, index) => (
            <S.Wrapper key={index}>
              <S.Figure>
                <S.CardImage src={item.image} alt="" />
                <S.FigCaption>{item.heading}</S.FigCaption>
              </S.Figure>
            </S.Wrapper>
          ))}
        </S.ImageContainer>
      </S.FourthContainer>
      <S.FifthContainer>
        <S.Heading>
          {data?.title5} <br />
          {data?.title5H1}
        </S.Heading>
        <S.Para>{data?.title5Content}</S.Para>
        <S.SecondImageContainer>
          <S.Image src={data?.title5Image?.url} alt="" />
        </S.SecondImageContainer>
      </S.FifthContainer>
      <S.SixthContainer>
        <S.Heading>{data?.title6}</S.Heading>
        <S.SecondImageContainer>
          <S.Image src={data?.title6Image?.url} alt="" />
        </S.SecondImageContainer>
        <S.Para>{data?.title6Content}</S.Para>
        <br />
        <S.Para>{data?.title6Content1}</S.Para>
        <S.SecondImageContainer>
          <S.Image src={data?.title7Image?.url} alt="" />
        </S.SecondImageContainer>
      </S.SixthContainer>
      <S.SeventhContainer>
        <S.Heading>{data?.title7}</S.Heading>
        <S.Para>{data?.title7Content}</S.Para>
        <S.Heading>{data?.title8}</S.Heading>
        {data?.title8Content?.map((item) => (
          <S.UnorderedList style={{ listStyleType: "disc", color: "white" }}>
            <li>{item.name}</li>
          </S.UnorderedList>
        ))}
        <S.SecondImageContainer>
          <S.Image src={data?.title8Image?.url} alt="" />
        </S.SecondImageContainer>
      </S.SeventhContainer>
    </S.Main>
  );
};
export default DevopsServices;
