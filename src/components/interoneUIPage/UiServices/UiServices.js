import React from "react";
import { UiServiceStyles as SS } from "../../../styles/UI page";
import { Navbar } from "../../common";
import RecentWork from "../UiRecentWork";

export default function Services() {
  // const params = useParams();

  // const { data } = useQuery(detailedServices, {
  //   variables: { params: params.id },
  // });

  return (
    <>
      <SS.Wrapper>
        <Navbar />
        <RecentWork />
      </SS.Wrapper>
    </>
  );
}
