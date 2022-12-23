import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import * as S from "./navbar.styles";
// import ReactFullpage from "@fullpage/react-fullpage";
import { IOIcon, SmallIoIcon } from "../../assets/svgicon/svgIcons";
import { Customers } from "../customers";
import { Contact } from "../contact";
import { Hero } from "../hero";
import { Industries } from "../industries";
import { Service } from "../servicecomponent";
import { Technologies } from "../technologies";
import { Blogs } from "../blogs";
import { TimelineMax, CSSPlugin, gsap } from "gsap/all";
import { withRouter } from "react-router-dom";
gsap.registerPlugin(CSSPlugin);

class FullpageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    };
    this.section = React.createRef();
  }

  onLeave(origin, destination, direction) {
    const sectioncell = destination.item;
    const modalTween = new TimelineMax({ delay: 0.8 });
    modalTween.from(sectioncell, 0.8, { opacity: 0 }, { opacity: 1 });
  }
  afterLoad(origin, destination, direction) {
    // setTimeout(() => {
    //   window.fullpage_api.moveSectionDown()
    // }, 2000)
    // console.log("afterload")
  }
  handleClick = (e) => {
    this.setState({ nav: !this.state.nav });
  };

  componentDidMount() {
    if (this.props.location.hash) {
      let elem = document.getElementById(this.props.location.hash.slice(1));
      if (elem) {
        const yOffset = -10;
        const y =
          elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }

  render() {
    const {
      home,
      services,
      industries,
      customers,
      technologies,
      contactUs,
      blogs,
    } = this.props?.data?.navigationBarCollection?.items[0];

    // data?.navigationBarCollection?.items[0]
    return (
      <div className="relative">
        <S.Container
          id="myMenu"
          className="absolute top-0 left-0 bg-blue-500 flex text-white"
        >
          <div data-menuanchor="hello">
            <S.LogoWrapper1>
              <a href="#hello">
                <IOIcon />
              </a>
            </S.LogoWrapper1>
          </div>

          <div data-menuanchor="hello">
            <S.LogoWrapper2>
              <a href="#hello">
                <SmallIoIcon />
              </a>
            </S.LogoWrapper2>
          </div>
          <S.NavLinksWrapper nav={this.state.nav}>
            <S.MenuList
              data-menuanchor="hello"
              className="active"
              onClick={(e) => {
                this.setState({ nav: false });
              }}
            >
              <S.NavLink href="#hello">{home}</S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="service" className="active">
              <S.NavLink
                href="#service"
                onClick={(e) => {
                  this.setState({ nav: false });
                }}
              >
                {services}
              </S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="industry" className="active">
              <S.NavLink href="#industry">{industries}</S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="customer" className="active">
              <S.NavLink href="#customer">{customers}</S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="technology" className="active">
              <S.NavLink href="#technology">{technologies}</S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="blogs" className="active">
              <S.NavLink href="#blogs">{blogs}</S.NavLink>
            </S.MenuList>
            <S.MenuList data-menuanchor="contact" className="active">
              <S.NavLink href="#contact">{contactUs}</S.NavLink>
            </S.MenuList>
          </S.NavLinksWrapper>
          <S.NavLinkContainer
            onMouseEnter={() => {}}
            onClick={(e) => {
              this.handleClick(e);
            }}
            onTouchStart={(e) => {
              this.handleClick(e);
            }}
            onTouchEnd={(e) => {
              this.handleClick(e);
            }}
          >
            <S.HanburgerIcon
              nav={this.state.nav}
              onClick={(e) => {
                this.handleClick(e);
              }}
              onTouchStart={(e) => {
                this.handleClick(e);
              }}
              onTouchEnd={(e) => {
                this.handleClick(e);
              }}
            ></S.HanburgerIcon>
          </S.NavLinkContainer>
        </S.Container>

        <S.Hero
          className="section"
          id="hello"
          // data-percentage="100"
          // data-centered="true"
        >
          <Hero
            data={this.props.data?.heroPageCollection?.items[0]}
            heroref={this.section}
          />
        </S.Hero>

        <S.Service className="section " id="service">
          <Service
            data={this.props.data?.servicesCollection?.items}
            // fullpageApi={props.fullpageApi}
            data1={this.props.data?.customServiceCollection?.items[0]}
            data2={this.props.data?.customDevopsCollection?.items[0]}
            data3={this.props.data?.custTestingServiceCollection?.items[0]}
            data4={this.props.data?.customeWebDevelopmentCollection?.items[0]}
            data5={this.props.data?.custMpbileAppCollection?.items[0]}
            data6={this.props.data?.customEcommerceCollection?.items[0]}
          />
        </S.Service>

        <S.Industry className="section " id="industry">
          <Industries
            data={this.props.data?.customIndustriesCollection?.items}
          />
        </S.Industry>
        <S.Customers className="section" id="customer">
          <Customers
            data={this.props.data?.customCustomersCollection?.items[0]}
          />
        </S.Customers>
        <S.Technology className="section" id="technology">
          <Technologies
            data={this.props.data?.technologiesCollection?.items}
            data1={this.props.data?.customeTechnologyCollection?.items[0]}
          />
        </S.Technology>

        <S.Blogs className="section" id="blogs">
          <Blogs />
        </S.Blogs>
        <S.Contact className="section" id="contact">
          <Contact
            data={this.props.data?.contactCollection?.items[0]}
            footerData={this.props.data?.footerCollection?.items}
          />
        </S.Contact>
      </div>
    );
  }
}

export default withRouter(FullpageWrapper);
