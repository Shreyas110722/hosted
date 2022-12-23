import React, { useEffect} from "react";
import Parallax from "parallax-js";

import * as S from "./technologies.styles";
// import TechnologyCard from "./technologyCard/technologyCard";
// import { AiOutlinePlus } from "react-icons/ai";
import { SideLine } from "../../assets/svgicon/svgIcons";
import { BackgroundAnimation } from "../../components/common";
import CustomTechnologies from "./customTechnologies/customTechnologies";
function Technologies({ data ,data1}) {

  // let technologies = [
  //   {
  //     id: 2,
  //     heading: data[1]?.heading,
  //     about: data[1]?.about,
  //     languages: [
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[1]?.language1?.url,
  //         name: data[1]?.language1?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[1]?.language2?.url,
  //         name: data[1]?.language2?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[1]?.language3?.url,
  //         name: data[1]?.language3?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[1]?.language4?.url,
  //         name: data[1]?.language4?.title,
  //       },
  //     ],
  //   },

  //   {
  //     id: 3,
  //     heading: data[2].heading,
  //     about: data[2].about,
  //     languages: [
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[2]?.language1?.url,
  //         name: data[2]?.language1?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[2]?.language2?.url,
  //         name: data[2]?.language1?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[2]?.language3?.url,
  //         name: data[2]?.language3?.title,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     heading: data[3].heading,
  //     about: data[3].about,
  //     languages: [
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[3]?.language1?.url,
  //         name: data[3]?.language1?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[3]?.language2?.url,
  //         name: data[3]?.language2?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[3]?.language3?.url,
  //         name: data[3]?.language3?.title,
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     heading: data[0]?.heading,
  //     about: data[0]?.about,
  //     languages: [
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[0]?.language1?.url,
  //         name: data[0]?.language1?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[0]?.language2?.url,
  //         name: data[0]?.language2?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[0]?.language3?.url,
  //         name: data[0]?.language3?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[0]?.language4?.url,
  //         name: data[0]?.language4?.title,
  //       },
  //       {
  //         id: Math.random() * 2 + 1,
  //         Icon: data[0]?.language5?.url,
  //         name: data[0]?.language5?.title,
  //       },
  //     ],
  //   },
  // ];
  // eslint-disable-next-line
  // let [list, setList] = useState(technologies);

  // const [head, setHead] = useState(list[3].heading);
  // const [about, setAbout] = useState(list[3].about);
  // const [languages, setLanguage] = useState(list[3].languages);
  // const [animate, setAnimate] = useState(false);
  useEffect(() => {
    var scene = document.getElementById("technologyHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate:(true, true)
    });
  }, []);
  // const handleClick = (e, items) => {
  //   e.preventDefault();

  //   setHead(items.heading);
  //   setAbout(items.about);
  //   setLanguage(items.languages);
  //   let newTechnologies = list.filter((item) => item.id !== items.id);

  //   setList([...newTechnologies, ...[items]]);
  //   setAnimate(true);

  //   setTimeout(() => {
  //     setAnimate(false);
  //   }, 1000);
  // };

  return (
    <S.Container>
      <BackgroundAnimation />
      <S.SideLine>
        <SideLine />
      </S.SideLine>

      <S.ContentWrapper>
         <S.HeaderWrapper>
          <S.MainHeading>
            <S.Head data-relative-input="true" id="technologyHead">
              <S.FirstHeadLayer data-depth="0.6">
                {data[0].__typename}
              </S.FirstHeadLayer>
            </S.Head>
            <S.SecHeadLayer strings={[data[0].__typename]}></S.SecHeadLayer>
          </S.MainHeading>
        </S.HeaderWrapper>
        {/* <S.TechnologyWrapper>
          <S.MainWrapper>
            <S.TechnologyCardWrapper animation={animate}>
              <TechnologyCard
                heading={head}
                about={about}
                language={languages}
                // onReturn={getProps}
              />
            </S.TechnologyCardWrapper>
            <S.TechnologyList>
              {list.map((items) => {
                return (
                  <S.Technology
                    key={items.id}
                    onClick={(e) => {
                      handleClick(e, items);
                      //
                    }}
                    onTouchEnd={(e) => handleClick(e, items)}
                  >
                    <S.Heading>{items.heading}</S.Heading>
                    <S.Icon>
                      <AiOutlinePlus />
                    </S.Icon>
                  </S.Technology>
                );
              })}
            </S.TechnologyList>
          </S.MainWrapper>
        </S.TechnologyWrapper> */}
        <CustomTechnologies data={data1}/>
      </S.ContentWrapper> 
    </S.Container>
  );
}

export default Technologies;
