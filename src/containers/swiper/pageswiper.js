import React, { lazy, Suspense } from "react";
import "fullpage.js/vendors/scrolloverflow";
import * as S from "./navbar.styles";
import { IOIcon, SmallIoIcon } from "../../assets/svgicon/svgIcons";
import { TimelineMax, CSSPlugin, gsap } from "gsap/all";
import { withRouter } from "react-router-dom";
gsap.registerPlugin(CSSPlugin);

const Service = lazy(() => import("../servicecomponent/service.js"));
const Industries = lazy(() => import("../industries/industries.js"));
const Technologies = lazy(() => import("../technologies/technologies.js"));
const Blogs = lazy(() => import("../blogs/blogs.js"));
const Hero = lazy(() => import("../hero/hero.js"));
const Contact = lazy(() => import("../contact/contact.js"));
const Customers = lazy(() => import("../customers/customers.js"));

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
      careers,
      blogs,
    } = this.props?.data?.navigationBarCollection?.items[0];

    return (
      <Suspense
        fallback={
          <S.Greetings>
            <S.Greetgif
              src="https://images.ctfassets.net/7q3wfja5yi7p/aMlhuIamv3y5ZrojdFOdp/d03ba6306ede85ae6922f9fb37c16d46/Your_para.gif?h=250"
              alt=""
            />
          </S.Greetings>
        }
      >
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
                <S.NavLink
                  href="#industry"
                  onClick={(e) => {
                    this.setState({ nav: false });
                  }}
                >
                  {industries}
                </S.NavLink>
              </S.MenuList>

              <S.MenuList data-menuanchor="customer" className="active">
                <S.NavLink
                  href="#customer"
                  onClick={(e) => {
                    this.setState({ nav: false });
                  }}
                >
                  {customers}
                </S.NavLink>
              </S.MenuList>

              <S.MenuList data-menuanchor="technology" className="active">
                <S.NavLink
                  href="#technology"
                  onClick={(e) => {
                    this.setState({ nav: false });
                  }}
                >
                  {technologies}
                </S.NavLink>
              </S.MenuList>

              <S.MenuList data-menuanchor="blogs" className="active">
                <S.NavLink
                  href="#blogs"
                  onClick={(e) => {
                    this.setState({ nav: false });
                  }}
                >
                  {blogs}
                </S.NavLink>
              </S.MenuList>
              <S.MenuList data-menuanchor="careers" className="active">
                <S.NavLink
                  href="https://interfaceone.grovehr.com/careers/job?id=620619f560ed7100262021ce"
                  target="_blank"
                  onClick={(e) => {
                    this.setState({ nav: false });
                  }}
                >
                  {careers}
                </S.NavLink>
              </S.MenuList>
              <S.MenuList data-menuanchor="contact" className="active">
                <S.NavLink
                  href="#contact"
                  onClick={(e) => {
                    this.setState({ nav: false });
                  }}
                >
                  {contactUs}
                </S.NavLink>
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

          <S.Hero className="section" id="hello">
            <Hero
              data={this.props.data?.heroPageCollection?.items[0]}
              ref={this.section}
            />
          </S.Hero>

          <S.Service className="section " id="service">
            <Service
              data={this.props.data?.servicesCollection?.items}
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
      </Suspense>
    );
  }
}

export default withRouter(FullpageWrapper);
