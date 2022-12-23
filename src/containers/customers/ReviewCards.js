import React, { useEffect, useState, useRef } from "react";
import * as S from "./customers.styles";
// import { FaComments } from "react-icons/fa";
// import Tilt from "react-parallax-tilt";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function ReviewCards(props) {
  const { tittle } = props;
  // const { content, image, tittle } = props;

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("ooo", min + 1);
    // return min + 1;
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [rand, setRand] = useState(0);

  const ref = useRef();

  const flipRef = useRef(isFlipped);
  flipRef.current = isFlipped;

  const randomNumberRef = useRef(rand);
  randomNumberRef.current = rand;

  useEffect(() => {
    setInterval(() => {
      const rnInt = randomInteger(rand, props.data.frontImages.length - 1);
      setIsFlipped(!flipRef.current);
      setRand(rnInt);
    }, 1000);
  }, [rand,props.data.frontImages.length]);

  return (
    <>
      {/* <Tilt
        tiltAngleXInitial={2}
        tiltAngleYInitial={2}
        tiltMaxAngleX={5}
        tiltMaxAngleY={10}
      > */}
      {/* <S.ReviewCard> */}
      {/* <S.CardHeader> */}
      {/* {console.log("iiii",intervelName , props.index.toString())} */}
      {/* <S.LogoWrapper className={`rotatable_${props.index} ${props.rndInt}`}> */}
      <S.LogoWrapper>
        {props.data.frontImages.map((item, index) => (
          <Flippy
            key={index}
            isFlipped={rand === index && isFlipped}
            flipDirection="horizontal"
            ref={ref}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "black",
            }}
          >
            <FrontSide
              style={{
                backgroundColor: "#41669d",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "0",
                borderRadius: "5px",
              }}
            >
              <S.Logo
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={item.img}
                alt={tittle}
              />
            </FrontSide>
            <BackSide
              style={{
                backgroundColor: "#175852",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "0",
                borderRadius: "5px",
              }}
            >
              <S.FlipImage
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={props.data.backImages[index].pic}
                alt=""
              />
            </BackSide>
          </Flippy>
        ))}
      </S.LogoWrapper>
      {/* </S.LogoWrapper>*/}
      {/* </S.CardHeader> */}
      {/* <FaComments /> */}
      {/* <S.CardContent title={content}>{content}</S.CardContent> */}
      {/* </S.ReviewCard> */}
      {/* </Tilt> */}
    </>
  );
}
