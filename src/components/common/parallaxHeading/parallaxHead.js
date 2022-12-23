import React, { useEffect } from "react";
import * as S from "./parallaxHead.style";
import Parallax from "parallax-js";

function ParallaxHead({ strokeHead, head, id }) {
  useEffect(() => {
    var scene = document.getElementById("parall");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  }, [id]);
  return (
    <div>
      <S.Head data-relative-input="true" id="parall" className="w-full">
        <S.FirstHeadLayer data-depth="0.6">{strokeHead}</S.FirstHeadLayer>
      </S.Head>
      <S.SecHeadLayer>{head}</S.SecHeadLayer>
    </div>
  );
}

export default ParallaxHead;
