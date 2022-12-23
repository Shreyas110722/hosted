import WebCard from "./webCard";
import * as S from "./webTechnology.style";

const WebTechnology = () => {
  const webDevelopment = localStorage.getItem("webDevelopment");
  const data = JSON.parse(webDevelopment);

  console.log("data of wevDev", data);

  return (
    <S.Main>
      <S.FirstContainer>
        <S.ContentContainer>
          <S.Header>{data?.title1}</S.Header>
          <S.Paragraph>{data?.title1Content}</S.Paragraph>
        </S.ContentContainer>
        <S.ImageContainer>
          <S.Image src={data?.title1Image.url} alt="" />
        </S.ImageContainer>
      </S.FirstContainer>
      <S.Header>{data?.title2}</S.Header>
      <S.SecondContainer>
        {data?.title2Content?.map((item, index) => (
          <WebCard
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </S.SecondContainer>
    </S.Main>
  );
};
export default WebTechnology;
