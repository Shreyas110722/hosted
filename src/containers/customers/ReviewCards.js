import React, { useEffect, useState, useRef } from "react";
import * as S from "./customers.styles";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function ReviewCards(props) {
  const { tittle } = props;

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    }, 3000);
  }, [props.data.frontImages.length, rand]);

  return (
    <>
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
                backgroundColor: "black",
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
                backgroundColor: "black",
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
    </>
  );
}
