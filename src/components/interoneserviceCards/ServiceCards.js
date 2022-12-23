import React, { Component } from "react";
import { ServiceCards as S } from "../../styles";
import Card from "./Cards";
import UXdesign from "../CardIcons/ui.png";
import appMaintainance from "../CardIcons/app-maintainance.png";
import webDevop from "../CardIcons/web-devolpment.png";
import mobileDevops from "../CardIcons/mobile-development.png";
import appDevops from "../CardIcons/app-development (2).png";
import eCommerce from "../CardIcons/ecommerce.png";
import testing from "../CardIcons/testing.png";
import Devops from "../CardIcons/devops (2).png";

export class CardService extends Component {
  render() {
    const Data = [
      {
        logo: UXdesign,
        headertext: "UI &UX Design",
        contenttext:
          " We craft subtle yet elegant design, which offers innovativeexperienceOur capabilities include elegant designs and user..",
      },
      {
        logo: appMaintainance,
        headertext: "App Maintainance",
        contenttext:
          "Evolving business needs make organizations to drive change in the application environment, while mission critical application and....",
      },
      {
        logo: webDevop,
        headertext: "Web Development",
        contenttext:
          "Offering profound innovation information and wide broadness of experience over different enterprises to assist customers with their...",
      },
      {
        logo: mobileDevops,
        headertext: "Mobile Development",
        contenttext:
          "We provide top notch mobile app development solutions. With capabilities in Hybrid and Native mobile apps we help our clients ..",
      },
      {
        logo: appDevops,
        headertext: "App Development",
        contenttext:
          "We craft enterprise grade, adaptable and scalable applications across platforms, covering all stages SDLC staring from discovery of ..",
      },
      {
        logo: eCommerce,
        headertext: "E-Commerce",
        contenttext:
          "We deliver a full-suite of e-commerce development services which offer seamless digital shopping experience. We focus on creating...",
      },
      {
        logo: testing,
        headertext: "Testing Service",
        contenttext:
          "In fast paced business world, there is no room for error. Clients around the world join hands with us to accomplish the best quality.",
      },
      {
        logo: Devops,
        headertext: "Devops Service",
        contenttext:
          "In fast paced business world, there is no room for error. Clients around the world join hands with us to accomplish the best quality.",
      },
    ];

    return (
      <>
        <S.Container>
          <S.Header>
            <p>Services</p>
          </S.Header>
          <S.CardWrapper>
            {Data.map((Obj) => (
              <Card
                logo={Obj.logo}
                headertext={Obj.headertext}
                contenttext={Obj.contenttext}
              ></Card>
            ))}
          </S.CardWrapper>
        </S.Container>
      </>
    );
  }
}

export default CardService;
