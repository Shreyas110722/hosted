import React from "react";
// import { useHistory } from "react-router-dom";
// import IndustriesFullPage from "../industriesCardFullpage/IndustriesFullpage";
import * as S from "./industriesCard.styles";

const IndustriesCard = ({ title, imgSrc, radius }) => {
  // const history = useHistory();
  const handleClick = () =>{
    console.log("clicked")
   
    window.open(`/industries/${title}`, "_blank");
  }
 
  return (
    <S.IndustriesImageWrapper borderRadius={radius}  onClick={()=>{handleClick()}}>
       {/* <Link to={title}> {<IndustriesFullPage/>}

  </Link> */}
      <S.IndustriesImage src={imgSrc} />
      <S.IndustriesTitle className="industriestitle">{title}</S.IndustriesTitle>
      <S.IndustriesHeading className="industriesheading">
        {title}
      </S.IndustriesHeading>
    </S.IndustriesImageWrapper>
  );
};

export default IndustriesCard;
