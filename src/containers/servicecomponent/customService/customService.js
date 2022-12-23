import "./customService.css";
// import Carousel from "react-grid-carousel";
import * as S from "./customService.style";
// import { useQuery } from "@apollo/client";
// import { useParams } from "react-router-dom";
// import { customService } from "../../../queries";

const CustomService = () => {
  const custService = localStorage.getItem("customService");
  const data = JSON.parse(custService);

  return (
    <S.Main id="customService">
      <S.FirstContainer>
        <S.LeftContent>
          <S.Heading>{data?.uiTitle}</S.Heading>
          <S.Paragraph>{data?.uiContent}</S.Paragraph>
          {/* <button style={{color:"red"}}>Our Portfolio</button> */}
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
          {data?.uiCards.map((item,index) => (
            <S.ContentContainer key={index}>
              <S.ImageContainer>
                <S.Image src={item.image} alt="" />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>{item.header}</S.Heading>
                <S.Paragraph>{item.para}</S.Paragraph>
              </S.SubContent>
            </S.ContentContainer>
          ))}
        </S.RightContainer>
      </S.SecondContainer>

      <S.ThirdContainer>
        {/* <Carousel cols={2} rows={2} gap={5} loop>
          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.SecondImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/02/ui-ux-design-sec-img.jpg"
                  alt=""
                />
              </S.ImageContainer>
            </S.Card>
          </Carousel.Item>

          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.ThirdImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/04/ui-ux-app-icon.png"
                  alt=""
                />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>Mobile App Design</S.Heading>
                <S.Paragraph>
                  We build beautiful, user-centric, engaging and responsive
                  applications with a coalesce of strategy, design and
                  development. Our mobile app development follows agile
                  development process that leverages and delivers project at
                  maximal quality.
                </S.Paragraph>
              </S.SubContent>
            </S.Card>
          </Carousel.Item>

          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.ThirdImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/04/ui-ux-responsive-icon.png"
                  alt=""
                />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>Responsive Web Design</S.Heading>
                <S.Paragraph>
                  Responsive web design (RWD) is a web design approach to make
                  web pages that render well on all screen sizes and resolutions
                  while ensuring good usability. It is the way to design for a
                  multi-device web. In this article, we'll help you understand
                  some techniques that can be used to master it.
                </S.Paragraph>
              </S.SubContent>
            </S.Card>
          </Carousel.Item>
          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.ThirdImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/04/ui-ux-web-design-icon.png"
                  alt=""
                />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>Web Application Design</S.Heading>
                <S.Paragraph>
                  Our website development services turn ideas and designs into
                  functional, reliable products and services with latest
                  technology solutions using trending programming languages and
                  robust databases. We design and build pixel perfect websites
                  that are creatively and technologically inclined.
                </S.Paragraph>
              </S.SubContent>
            </S.Card>
          </Carousel.Item>
          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.SecondImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/02/ui-ux-design-sec-img.jpg"
                  alt=""
                />
              </S.ImageContainer>
            </S.Card>
          </Carousel.Item>

          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.ThirdImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/04/ui-ux-app-icon.png"
                  alt=""
                />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>Mobile App Design</S.Heading>
                <S.Paragraph>
                  Web Application design enables the layout of your web
                  application to adapt to any screen size. Web Application
                  design enables the layout of your web application to adapt to
                  any screen size.
                </S.Paragraph>
              </S.SubContent>
            </S.Card>
          </Carousel.Item>

          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.ThirdImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/04/ui-ux-web-design-icon.png"
                  alt=""
                />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>Responsive Web Design</S.Heading>
                <S.Paragraph>
                  Responsive web design enables the layout of your web
                  application to adapt to any screen size. Responsive web design
                  enables the layout of your web application to adapt to any
                  screen size.
                </S.Paragraph>
              </S.SubContent>
            </S.Card>
          </Carousel.Item>
          <Carousel.Item>
            <S.Card>
              <S.ImageContainer>
                <S.ThirdImage
                  src="https://www.mobinius.com/wp-content/uploads/2020/04/ui-ux-web-design-icon.png"
                  alt=""
                />
              </S.ImageContainer>
              <S.SubContent>
                <S.Heading>Web Application Design</S.Heading>
                <S.Paragraph>
                  Web Application design enables the layout of your web
                  application to adapt to any screen size. Web Application
                  design enables the layout of your web application to adapt to
                  any screen size.
                </S.Paragraph>
              </S.SubContent>
            </S.Card>
          </Carousel.Item>
        </Carousel> */}
      </S.ThirdContainer>
    </S.Main>
  );
};
export default CustomService;
