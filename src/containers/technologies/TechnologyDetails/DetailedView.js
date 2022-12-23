import React from "react";
import { TechonolyDetailStyles as S } from "../../../styles/Technology";
// import { Content } from "../../../utils/Servicedata";
export default function TechnologyDetails(props) {
  const { data } = props;
  return (
    <>
      <S.MainHeader>
        <p> The React Native App Development Expert</p>
        <div style={{ fontSize: "1.5rem", color: "white", fontWeight: "400" }}>
          React Native App Development Company offering one-stop solutions for
          any kind mobile app development using React Native. Our developers are
          experts with extensive field experience in building high quality React
          Native apps{" "}
        </div>
      </S.MainHeader>

      <S.Heading>
        <p>BENIFITS</p>
      </S.Heading>
      <S.SubHeader>
        {data?.technologiesCollection?.items?.map((item) => {
          return item.benifits.map((benifit) => (
            <S.Content>
              <S.HeaderText>
                <p>{benifit.heading}</p>
              </S.HeaderText>
              <S.SubContent>
                <p>{benifit.content}</p>
              </S.SubContent>
            </S.Content>
          ));
        })}
      </S.SubHeader>
    </>
  );
}
