import styled from "styled-components";
import tw from "twin.macro";
import { keyframes } from "styled-components";

const icon = keyframes`
  0% {
    transform:translate(1200%,350%);
  }
  100% {
    transform:translate(0%,0%);
    
  }`;
const icon1 = keyframes`
  0% {
    transform:translate(300%,500%);
  }
  100% {
    transform:translate(0%,0%);
    
  }`;
const Link = keyframes`
  0% {
   opacity:0;
  }
  100% {
    opacity:1;

    
  }`;
const Container = styled.div`
  background-color: black;
  z-index: 1000;
  position: fixed;
  ${tw`flex bg-black justify-start items-center  py-2 w-full pl-20 pt-8  hover:text-white`}
  &.active {
    ${tw`text-gold`}
  }
  @media (max-width: 768px) {
    ${tw`flex justify-between items-start py-2 pl-5  `}
  }
  @media (max-width: 501px) {
    ${tw`w-full flex justify-between items-start py-2 pl-0`}
  }
`;
const LogoWrapper1 = styled.div`
  /* flex-basis: 20%; */

  ${tw` flex justify-start items-center  `}
  animation: ${icon} 2s ease-in-out 1 forwards;
  @media (max-width: 768px) {
    ${tw`hidden absolute`}
  }
`;
const LogoWrapper2 = styled.div`
  ${tw` flex justify-start items-start hidden  `};
  animation: ${icon1} 2s ease-in-out 1 forwards;
  @media (max-width: 768px) {
    z-index: 10000;

    ${tw`block w-full `}
  }
  @media (max-width: 501px) {
    ${tw`ml-6 `}
  }
`;
const NavLinksWrapper = styled.div`
  &.active {
    ${tw`text-gold `}
  }

  z-index: 50;
  animation: ${Link} 2s ease-in-out 1 forwards;

  ${tw` flex justify-center items-center text-lg space-x-14  w-full `};

  transform: translate(0);
  @media (max-width: 768px) {
    height: 80vh;

    ${tw`  flex flex-col  justify-center items-center space-x-0 -mb-56 mt-14 w-full text-center space-y-5 font-semibold text-xl bg-black `}
    transition: transform 1s linear;

    right: 0;

    ${(props) =>
      props.nav
        ? {
            transform: "translate(0%)",
            position: "absolute",
          }
        : {
            transform: "translateY(-250%)",
            position: "absolute",
          }}
  }

  @media (max-width: 516px) {
    ${tw`mt-14 `}
    height: 85vh;
  }

`;
const MenuList = styled.div`
  &.active {
    ${tw`text-white `}
  }
`;
const NavLink = styled.a`
  ${tw` font-bold text-center flex transition duration-300  hover:text-gold `}
  &.active {
    ${tw`text-white `}
  }
  @media (max-width: 1074px) {
    ${tw` `};
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    ${tw` `};
    font-size: 10px;
  }
  @media (max-width: 768px) {
    ${tw` flex  justify-center items-center w-full text-base`}
  }
  &.active {
    ${tw`bg-gold`}
  }
`;

const NavLinkContainer = styled.div`
  &.active {
    ${tw`text-white `}
  }
  z-index: 100;
  ${tw`hidden cursor-pointer`}
  @media (max-width: 768px) {
    ${tw`  py-2 w-full flex justify-end items-center mt-1    mr-10  `}
  }
  @media (max-width: 520px) {
    ${tw` mt-1  mr-6  `}
  }
`;
const HanburgerIcon = styled.div`
  z-index: 10000;
  ${tw`w-8 h-0.5 bg-gold relative block `};
  transition: transform 0.3s ease-in-out;
  ${(props) => (props.nav ? tw`bg-black` : tw`bg-gold`)}
  &.active {
    ${tw`text-gold `}
  }
  &:before {
    content: "";
    ${tw`w-8 h-0.5 bg-gold absolute left-0 -top-2.5 `};
    transition: transform 0.3s ease-in-out;

    ${(props) =>
      props.nav
        ? {
            transform: "rotate(135deg)",
            top: "0",
          }
        : null}
  }
  &:after {
    content: "";

    ${tw`w-8 h-0.5 bg-gold absolute left-0 top-2.5`};
    transition: transform 0.3s ease-in-out;

    ${(props) =>
      props.nav
        ? {
            transform: "rotate(45deg)",
            top: "0",
          }
        : null}
  }
`;

const Blogs = styled.div`
  @media (max-width: 550px) {
    margin-bottom: 5rem;
  }
`;

const Technology = styled.div`
@media(max-width:450px){
  margin-bottom: 40%;
}
`;

const Customers = styled.div``;
const Industry = styled.div``;
const Service = styled.div``;
const Contact = styled.div``;
const Hero = styled.div``;

export {
  Container,
  Technology,
  Customers,
  Industry,
  Service,
  Contact,
  Hero,
  Blogs,
  LogoWrapper1,
  LogoWrapper2,
  NavLinksWrapper,
  NavLink,
  NavLinkContainer,
  HanburgerIcon,
  MenuList,
};
