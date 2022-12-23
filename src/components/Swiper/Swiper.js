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
// import _ from "lodash";

import * as S from "./Swiper.style";
import ReviewCards from "../../containers/customers/ReviewCards";
// import { ReviewCard } from "../../containers/customers/customers.styles";
SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

const SwiperComponent = ({data}) => {
  // const { data } = useQuery(customerContent);

  // const [imagedata, setImageData] = useState(images);
  // const randomIntFromInterval = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };
  // const [intervelName, setIntervalName] = useState("");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const rndInt = randomIntFromInterval(0, 11);
  //     let _imageData = _.findIndex(imagedata, { show: true });

  //     if (_imageData !== -1) {
  //       imagedata[_imageData].show = false;
  //       setImageData(imagedata);
  //     } else {
  //       imagedata[rndInt].show = true;
  //       setImageData(imagedata);
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  
  return (
    <S.Container>
      {/* <S.SwiperContainer
        {...props}
        pagination={{ clickable: true }}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      > */}
      {/* {data?.customersCollection?.items?.map((item) => (
          // <SwiperSlide>
            <div>
              <ReviewCards
                content={item?.content}
                image={item?.image?.url}
                tittle={item?.image?.tittle}
              />
            </div>
          // </SwiperSlide>
        ))} */}
      {/* {console.log("inter", imagedata)} */}
      {/* {imagedata.map((item, index) => {
        // console.log("randd", item);
        return (
          <ReviewCards
            img={item.img}
            pic={item.pic}
            index={index}
            rndInt={item.show ? "rotate" : ""}
          />
        );
      })} */}

      {/* </S.SwiperContainer> */}
      <ReviewCards data={data}/>
    </S.Container>
  );
};
export default SwiperComponent;
