import React, { useState } from "react";
import * as S from "./navbar.styles";
import { useQuery, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { IOIcon, Loading, SmallIoIcon } from "../../../assets/svgicon/svgIcons";
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    setNav(!nav);
  };

  const mainQuery = gql`
    query {
      navigationBarCollection {
        items {
          home
          services
          industries
          customers
          technologies
          blogs
          contactUs
        }
      }
    }
  `;
  const { loading, data, error } = useQuery(mainQuery, {});

  return (
    <>
      {error ? (
        <h1 className="text-red-800 font-bold text-3xl w-full text-center">
          Error loading from Contentful
        </h1>
      ) : loading ? (
        <div className="w-full h-full flex justify-center items-center p-10">
          <Loading />
        </div>
      ) : (
        <S.Container>
          <S.LogoWrapper1 onClick={() => history.push("/#hello")}>
            <IOIcon />
          </S.LogoWrapper1>
          <S.LogoWrapper2>
            <SmallIoIcon />
          </S.LogoWrapper2>
          <S.NavLinksWrapper nav={nav}>
            <S.NavLink activeClassName="active" onClick={() => history.push("/#hello")}>
              {data.navigationBarCollection.items[0].home}
            </S.NavLink>
            <S.NavLink onClick={() => history.push("/#service")}>
              {data.navigationBarCollection.items[0].services}
            </S.NavLink>
            <S.NavLink onClick={() => history.push("/#industry")}>
              {data.navigationBarCollection.items[0].industries}
            </S.NavLink>
            <S.NavLink onClick={() => history.push("/#customers")}>
              {data.navigationBarCollection.items[0].customers}
            </S.NavLink>
            <S.NavLink onClick={() => history.push("/#technology")}>
              {data.navigationBarCollection.items[0].technologies}
            </S.NavLink>
            <S.NavLink onClick={() => history.push("/#blogs")}>
              {data.navigationBarCollection.items[0].blogs}
            </S.NavLink>
            <S.NavLink onClick={() => history.push("/#contact")}>
              {data.navigationBarCollection.items[0].contactUs}
            </S.NavLink>
          </S.NavLinksWrapper>
          <S.NavLinkContainer>
            <S.HanburgerIcon
              nav={nav}
              onClick={(e) => {
                handleClick(e);
              }}
            ></S.HanburgerIcon>
          </S.NavLinkContainer>
        </S.Container>
      )}
    </>
  );
};

export default Navbar;
