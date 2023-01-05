import React from "react";
import { useQuery } from "@apollo/client";
import { mainQuery } from "./queries";
import { Redirect, Route, Switch } from "react-router-dom";
import { ServiceDetails } from "./containers/servicecomponent";
// import { UiUxDesign, AppMaintainance, WebDevelopment, MobileDevelopment, AppDevelopment, EComerceDevelopment, TestingServices, DevOpsDevelopment } from "./containers/servicepages/index"
import FullpageWrapper from "./containers/swiper/pageswiper";
// import { LinearProgress } from "./components/common";
import { BlogsPage } from "./containers/blogsPage";
import { BlogDetails } from "./containers/blogDetails";
import Services from "./components/interoneUIPage/UiServices/UiServices";
import DetailedView from "./containers/technologies/TechnologyDetails/TechnologyDetails";
import IndustriesFullPage from "./containers/industries/industriesCardFullpage/IndustriesFullpage";
import NotFound from "./containers/PageNotFound/notFound";
import * as S from "./containers/swiper/navbar.styles";
// import IndustriesFullPage from "./containers/industries/industriesCardFullpage/IndustriesFullpage";
// import Uiheader from "./components/interoneUIPage/Uiheader";

function App() {
  const { loading, data, error } = useQuery(mainQuery);

  return (
    <div className="relative h-screen ">
      {error ? (
        <Route path="/not-found" component={NotFound} />
      ) : loading ? (
        <S.Greetings>
          <S.Greetgif
            src="https://images.ctfassets.net/7q3wfja5yi7p/aMlhuIamv3y5ZrojdFOdp/d03ba6306ede85ae6922f9fb37c16d46/Your_para.gif?h=250"
            alt=""
          />
        </S.Greetings>
      ) : (
        <>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <FullpageWrapper data={data} />}
            />
            <Route exact path="/service/:id" component={ServiceDetails} />
            <Route exact path="/blogs" component={BlogsPage} />
            <Route exact path="/blogs/:slugUrl" component={BlogDetails} />
            <Route exact path="/service/:id/:header" component={Services} />
            <Route exact path="/technology/:heading" component={DetailedView} />
            <Route
              exact
              path="/industries/industries"
              component={IndustriesFullPage}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
