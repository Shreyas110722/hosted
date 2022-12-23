import "./customTechnologies.css";
import * as S from "./customTechnologies.styles";

const CustomTechnologies = ({ data }) => {
  return (
    <S.Technologies>
      <S.Main>
        <S.TransformationJourney>
          <S.Circle>
            <S.MobileDetails>
              <S.IconJourney>
                <S.Icon src={data?.icon1?.url} alt="" />
              </S.IconJourney>
              <S.Content>
                <S.Heading>{data?.title1}</S.Heading>
                <S.Para>{data?.title1Content}</S.Para>
                <S.Container>
                  <S.Image src={data?.title1Image1?.url} alt="" />
                  <S.Image src={data?.title1Image2?.url} alt="" />
                  <S.Image src={data?.title1Image3?.url} alt="" />
                  <S.Image src={data?.title1Image4?.url} alt="" />
                  <S.Image src={data?.title1Image5?.url} alt="" />
                </S.Container>
              </S.Content>
            </S.MobileDetails>

            <S.DBDetails>
              <S.IconJourney1>
                <S.Icon src={data?.icon2?.url} alt="" />
              </S.IconJourney1>

              <S.Content1>
                <S.Heading>{data?.title2}</S.Heading>
                <S.Para>{data?.title2Content}</S.Para>
                <S.Container>
                  <S.Image src={data?.title2Image1?.url} alt="" />
                  <S.Image src={data?.title2Image2?.url} alt="" />
                  <S.Image src={data?.title2Image3?.url} alt="" />
                </S.Container>
              </S.Content1>
            </S.DBDetails>
            <S.AnimationCircle></S.AnimationCircle>
            <S.BackendDetails>
              <S.IconJourney2>
                <S.Icon src={data?.icon3?.url} alt="" />
                <S.Content2>
                  <S.Heading2>{data?.title3}</S.Heading2>
                  <S.Para>{data?.title3Content}</S.Para>
                  <S.Container>
                    <S.Image src={data?.title3Image1?.url} alt="" />
                    <S.Image src={data?.title3Image2?.url} alt="" />
                    <S.Image src={data?.title3Image3?.url} alt="" />
                  </S.Container>
                </S.Content2>
              </S.IconJourney2>
            </S.BackendDetails>
            <S.FrontendDetails>
              <S.IconJourney3>
                <S.Icon src={data?.icon4?.url} alt="" />
                <S.Content3>
                  <S.Heading2>{data?.title4}</S.Heading2>
                  <S.Para>{data?.title4Content}</S.Para>
                  <S.Container>
                    <S.Image src={data?.title4Image1?.url} alt="" />
                    <S.Image src={data?.title4Image2?.url} alt="" />
                    <S.Image src={data?.title4Image3?.url} alt="" />
                  </S.Container>
                </S.Content3>
              </S.IconJourney3>
            </S.FrontendDetails>
          </S.Circle>
        </S.TransformationJourney>
        <S.MobileTransformation>
          <S.CardDetails>
            <S.IconContainer>
              <S.IconImage src={data?.icon1?.url} alt="" />
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title1}</S.Header>
              <S.Paragraph>{data?.title1Content}</S.Paragraph>
              <S.ImageContainer>
                <S.Images src={data?.title1Image1?.url} alt="" />
                <S.Images src={data?.title1Image2?.url} alt="" />
                <S.Images src={data?.title1Image3?.url} alt="" />
                <S.Images src={data?.title1Image4?.url} alt="" />
                <S.Images src={data?.title1Image5?.url} alt="" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>

          <S.CardDetails>
            <S.IconContainer>
              <S.IconImage src={data?.icon2?.url} alt="" />
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title2}</S.Header>
              <S.Paragraph>{data?.title2Content}</S.Paragraph>
              <S.ImageContainer>
                <S.Images src={data?.title2Image1?.url} alt="" />
                <S.Images src={data?.title2Image2?.url} alt="" />
                <S.Images src={data?.title2Image3?.url} alt="" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>
          <S.CardDetails>
            <S.IconContainer>
              <S.IconImage src={data?.icon3?.url} alt="" />
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title3}</S.Header>
              <S.Paragraph>{data?.title3Content}</S.Paragraph>
              <S.ImageContainer>
                <S.Images src={data?.title3Image1?.url} alt="" />
                <S.Images src={data?.title3Image2?.url} alt="" />
                <S.Images src={data?.title3Image3?.url} alt="" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>
          <S.CardDetails>
            <S.IconContainer>
              <S.IconImage src={data?.icon4?.url} alt="" />
            </S.IconContainer>
            <S.CardContent>
              <S.Header>{data?.title4}</S.Header>
              <S.Paragraph>{data?.title4Content}</S.Paragraph>
              <S.ImageContainer>
                <S.Images src={data?.title4Image1?.url} alt="" />
                <S.Images src={data?.title4Image2?.url} alt="" />
                <S.Images src={data?.title4Image3?.url} alt="" />
              </S.ImageContainer>
            </S.CardContent>
          </S.CardDetails>
        </S.MobileTransformation>
      </S.Main>
    </S.Technologies>
  );
};
export default CustomTechnologies;
