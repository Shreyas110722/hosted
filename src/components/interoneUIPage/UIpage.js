import React, { useState } from "react";
import "./menu.css";
import Ui from "./ui";

import { UiPagestyles as S } from "../../styles/UI page";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

import RecentWork from "./UiRecentWork";
import { useQuery } from "@apollo/client";
import { serviceContent } from "../../queries";
import { Navbar } from "../common";

const uiData = [
  {
    number: "01",
    stepheader: "  Requirement Analysis",
    stepcontent:
      "First level scope discussionand target definition formsthe base of our process",
  },
  {
    number: "02",
    stepheader: "  Market + User Resarch",
    stepcontent:
      "Based on the requirement, we gather information through market research, competition analysis and identify the target audience",
  },
  {
    number: "03",
    stepheader: " Scope Documentation",
    stepcontent:
      "This is the holy grail of our project activity and this will have all our efforts and information on strategies used",
  },
  {
    number: "04",
    stepheader: "  Creative Process Tracking",
    stepcontent:
      "This is the phase of action where activities pertaining to the project are done every day and the results are closely",
  },
  {
    number: "05",
    stepheader: "  Result Tracking and Reporting",
    stepcontent:
      "Every month, cumulative efforts are analyzed, recalibrated if necessary. Regular check on targets are done",
  },
  {
    number: "06",
    stepheader: "  Interaction Design",
    stepcontent:
      "We understand the what, who, why and when of a project to build user centric designs for different user personas",
  },
];
export function UiWebPage(props) {
  const servciceData = localStorage.getItem("servicesList");
  const parsed = JSON.parse(servciceData);

  const [style, setStyle] = useState("menu");
  const [menuStatus, setMenuStatus] = useState("open");

  const params = useParams();
  const { data } = useQuery(serviceContent, {
    variables: { params: params.id },
  });

  const handleChange = (item) => {
    localStorage.setItem("service", JSON.stringify(item));
    setMenuStatus("open");
    setStyle("menu");
  };

  const handleClick = () => {
    switch (menuStatus) {
      case "open":
        setMenuStatus("close");
        setStyle("menu active");

        break;
      case "close":
        setMenuStatus("open");
        setStyle("menu");

        break;
      default:
        setMenuStatus("");
        setStyle("");
    }
  };
  return (
    <>
      <S.SmoothScroll>
        <S.Container>
          <Navbar />
          <S.Header></S.Header>
          <S.HeroContent>
            <S.HeroMenu>
              <S.Param>{params.id}</S.Param>

              <IoIosArrowDropdown
                style={{ cursor: "pointer", width: "2rem" }}
                onClick={() => {
                  handleClick();
                }}
              />
              <S.MenuWrapper className={style}>
                <AiOutlineCloseCircle
                  style={{
                    fill: "white",
                    marginLeft: "auto",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleClick();
                  }}
                />

                <ul>
                  {parsed?.length &&
                    parsed?.map((item) => (
                      <li key={item?.id} onClick={() => handleChange(item)}>
                        <div>
                          <Link to={`/service/${item.title}`}>
                            <h1>{item.title}</h1>
                          </Link>
                        </div>
                      </li>
                    ))}
                </ul>
              </S.MenuWrapper>
            </S.HeroMenu>
            {data?.servicesCollection?.items.map((item) => (
              <S.HeroText>{item.content}</S.HeroText>
            ))}
          </S.HeroContent>
        </S.Container>
        <S.MethodologyWrapper>
          <S.MethodologyHeader>Our {params.id} Methodology</S.MethodologyHeader>
          <S.Wrapper>
            {uiData.map((obj) => (
              <Ui
                number={obj.number}
                stepheader={obj.stepheader}
                stepcontent={obj.stepcontent}
              ></Ui>
            ))}
          </S.Wrapper>
        </S.MethodologyWrapper>
        <RecentWork />
      </S.SmoothScroll>
    </>
  );
}

export default UiWebPage;
