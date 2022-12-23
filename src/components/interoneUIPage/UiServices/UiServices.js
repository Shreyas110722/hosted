import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { detailedServices } from "../../../queries";
import { UiServiceStyles as SS } from "../../../styles/UI page";
// import { UiPagestyles as S } from "../../../styles/UI page";
import Ball from "../../../containers/hero/Ball/ball";
import { Navbar } from "../../common";
import RecentWork from "../UiRecentWork";
import Background from "../../background/background";
import Mobilebg from "../../background/MobileBg";
import Webbg from "../../background/WebBackground";
import Ecommbg from "../../background/EcommBg";

export default function Services() {
  const params = useParams();
  const { data } = useQuery(detailedServices, {
    variables: { params: params.id },
  });


  //   const {data:Data} = useQuery(serviceContent)
  debugger;
  //   if(params.id === "UI&UX Design"){
  //       <Ball/>
  //   }
  //   else{
  //       <BackgroundAnimation/>
  //   }
  return (
    <>
      <SS.Wrapper>
        <Navbar />
        <SS.Container>
          {/* {(()=>{
 if(params.id === "UI&UX Design"){
    <SS.BallWrapper>
    <Ball />
  </SS.BallWrapper>
 }
 else{
   <BackgroundAnimation/>} 
            })} */}

          <SS.BallWrapper>
            {params.id === "UI&UX Design" ? (
              <Ball />
            ) : params.id === "App Maintainance" ? (
              <Background />
            ) : params.id === "Mobile Development" ? (
              <Mobilebg />
            ) : params.id === "Web Development" ? (
              <Webbg />
            ) : params.id === "E-Commerce Services" ? (
              <Ecommbg />
            ) : (
              <Background />
            )}
          </SS.BallWrapper>

          <SS.HeroContent>
            <SS.HeroMenu>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "300",
                  color: "white",
                }}
              >
                {params.id}
              </div>

              <p>{params.header}</p>
            </SS.HeroMenu>
          </SS.HeroContent>
        </SS.Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "8rem",
            padding: "2rem",
          }}
        >
          <SS.SubText>
            <p>Establish And Escalate Brand Value</p>
            <SS.SubContent>
              {/* {Data.servicesCollection.items.map ((item)=>(
              <p>{item.content}</p>))} */}
              {params.id}/{params.header}
            </SS.SubContent>
          </SS.SubText>

          <SS.ContentWrapper>
            <SS.Content>
              {data?.servicesCollection?.items?.map((item) => {
                return item.details.map((detail) => (
                  <SS.TextCard>
                    <SS.CardHeader>
                      <p>{detail.heading}</p>
                    </SS.CardHeader>
                    <SS.CardText>
                      <p>{detail.content}</p>
                    </SS.CardText>
                    <SS.CardLogo></SS.CardLogo>
                  </SS.TextCard>
                ));
              })}
            </SS.Content>
          </SS.ContentWrapper>
        </div>
        <RecentWork />
      </SS.Wrapper>
    </>
  );
}
