import React from "react";
import { useQuery } from "@apollo/client";
import { mainQuery } from "./queries";
import { Route } from "react-router-dom";
import { ServiceDetails } from "./containers/servicecomponent";
// import { UiUxDesign, AppMaintainance, WebDevelopment, MobileDevelopment, AppDevelopment, EComerceDevelopment, TestingServices, DevOpsDevelopment } from "./containers/servicepages/index"
import FullpageWrapper from "./containers/swiper/pageswiper";
// import { LinearProgress } from "./components/common";
import { BlogsPage } from "./containers/blogsPage";
import { BlogDetails } from "./containers/blogDetails";
// import { Loading } from "./assets/svgicon/svgIcons";
import Loader from "./assets/images/Layer 1interonel.png";
import Services from "./components/interoneUIPage/UiServices/UiServices";
import DetailedView from "./containers/technologies/TechnologyDetails/TechnologyDetails";
import IndustriesFullPage from "./containers/industries/industriesCardFullpage/IndustriesFullpage";
// import IndustriesFullPage from "./containers/industries/industriesCardFullpage/IndustriesFullpage";
// import Uiheader from "./components/interoneUIPage/Uiheader";

function App() {
  const { loading, data, error } = useQuery(mainQuery);


  return (
    <div className="relative h-screen ">
      {error ? (
        <h1 className="text-red-800 font-bold text-3xl w-full text-center">
          Error loading from Contentful
        </h1>
      ) : loading ? (
        <div className="  w-full h-full flex justify-center items-center  p-10">
          <img style={{ width: "20rem" }} src={Loader} alt=""></img>
        </div>
      ) : (
        <>
          <Route
            exact
            path="/"
            render={() => <FullpageWrapper data={data} />}
          />
          <Route exact path="/service/:id" component={ServiceDetails} />
          <Route exact path="/blogs" component={BlogsPage} />
          <Route exact path="/blogs/:slugUrl" component={BlogDetails} />
          <Route exact path = "/service/:id/:header" component={Services}/>
          <Route exact  path ="/technology/:heading" component={DetailedView}/>
          <Route exact path="/industries/industries" component={IndustriesFullPage} />

          {/* {data.map((item)=>{ */}
          {/* <Route exact path="/Uiheader" component={Uiheader} /> */}
          {/* ${item.heading}${item.description} */}
          {/* })} */}
        </>
      )}
    </div>
  );
}

export default App;
