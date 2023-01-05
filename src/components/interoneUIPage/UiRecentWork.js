import React from "react";
import { RecentWorkStyles as S } from "../../styles/UI page";
import { Link, useParams } from "react-router-dom";
import AnimatedButton from "../common/button/animatedButton";
import CustomService from "../../containers/servicecomponent/customService/customService";
import WebTechnology from "../../containers/servicecomponent/customService/webTechnology";
import DevopsServices from "../../containers/servicecomponent/customService/devopsServices";
import TestingServices from "../../containers/servicecomponent/customService/testingService";
import MobileDevelop from "../../containers/servicecomponent/customService/mobileDevelop";
import ECommerce from "../../containers/servicecomponent/customService/eCommerce";

export default function RecentWork() {
  const params = useParams();

  return (
    <>
      {params.id === "UI & UX Design" ? (
        <CustomService />
      ) : params.id === "Web Development" ? (
        <WebTechnology />
      ) : params.id === "Testing Services" ? (
        <TestingServices />
      ) : params.id === "DevOps Services" ? (
        <DevopsServices />
      ) : params.id === "Mobile Development" ? (
        <MobileDevelop />
      ) : params.id === "E-Commerce Services" ? (
        <ECommerce />
      ) : (
        ""
      )}

      <S.QuestionWrapper>
        <S.Question>
          <S.QuestionText>
            <p> Have A Question ? We Are Happy to Help</p>
          </S.QuestionText>
          <Link to={`/#contact`}>
            <AnimatedButton buttonname="Contact Us">Contact Us</AnimatedButton>
          </Link>
        </S.Question>
      </S.QuestionWrapper>
    </>
  );
}
