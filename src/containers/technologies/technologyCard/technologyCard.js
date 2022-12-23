import React from "react";
import * as S from "./technologyCard.styles";

import Tooltip from "@material-ui/core/Tooltip";
import AnimatedButton from "../../../components/common/button/animatedButton";

// eslint-disable-next-line
function TechnologyCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleTooltip = () => {
    setOpen(!open);
  };
  const handleClick = () =>{
    console.log("clicked")
    
    window.open(`/technology/${props.heading}`,"_blank")
   
  }
  return (
    <S.Container onChange={() => console.log("@@@##$%%&^%", props.heading)}>
      <S.Heading>{props.heading}</S.Heading>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltip}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={props.about}
        placement="bottom"
        arrow
      >
        <S.About onClick={handleTooltip}>{props.about}</S.About>
      </Tooltip>
      <S.TechnologyList>
        {props.language.map((item) => {
          return (
            <S.IconName key={item.id}>
              <S.ImageWrapper>
                <S.img src={item.Icon} />
              </S.ImageWrapper>
              <S.Name>{item.name}</S.Name>
            </S.IconName>
          );
        })}
      </S.TechnologyList>
      <S.ButtonWrapper onClick ={()=>handleClick()}>
      <AnimatedButton buttonname="See More"/>
      </S.ButtonWrapper>

    </S.Container>
  );
}


export default TechnologyCard;
