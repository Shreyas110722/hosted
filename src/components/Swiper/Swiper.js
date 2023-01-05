import React from "react";
// import { SwiperSlide } from "swiper/react";
// import { useQuery } from "@apollo/client";
// import { customerContent } from "../../queries";
// import { pic } from "../../utils/Servicedata";
// import { images, flipimages } from "../../utils/Servicedata";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import * as S from "./Swiper.style";
import ReviewCards from "../../containers/customers/ReviewCards";
SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

const SwiperComponent = ({ data }) => {
  return (
    <S.Container>
      <ReviewCards data={data} />
    </S.Container>
  );
};
export default SwiperComponent;
