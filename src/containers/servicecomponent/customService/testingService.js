import TestingCards from "./testingcards";
import * as S from "./testing.style";

const TestingServices = () => {
  const testingService = localStorage.getItem("testingService");
  const data = JSON.parse(testingService);

  return (
    <S.Main>
      <S.Container1>
        <S.Header>{data?.title1}</S.Header>
        <S.Paragraph>{data?.title1Content}</S.Paragraph>
      </S.Container1>
      <S.Container2>
        <S.Full>
          <S.Validate>
            <S.Header>{data?.title2}</S.Header>
            <S.Heading>{data?.title2SubContent}</S.Heading>
            <S.Paragraph>{data?.title2Content}</S.Paragraph>
          </S.Validate>
        </S.Full>

        <S.EnsureContainer>
          <S.Ensure>
            <S.Header>{data?.title3}</S.Header>
            <S.Heading>{data?.title3SubContent}</S.Heading>
            <S.Paragraph>{data?.title3Content}</S.Paragraph>
          </S.Ensure>
          {/* <S.Image src={data?.testingImage?.url} alt="" /> */}
        </S.EnsureContainer>
      </S.Container2>
      <S.Container3>
        {data?.testingCard.map((item, index) => (
          <TestingCards
            key={index}
            image={item.image}
            title={item.title}
            cont={item.cont}
          />
        ))}
      </S.Container3>
    </S.Main>
  );
};
export default TestingServices;
