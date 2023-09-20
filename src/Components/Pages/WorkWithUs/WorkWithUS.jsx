import React from "react";
import VedioPart from "./Components/VedioPart";
import AboutUs from "./Components/AboutUs";
import WorksPerk from "./Components/WorksPerk";
import MissionVission from "./Components/MissionVission";
import FAQs from "./Components/FAQs";
import Application from "./Components/Application";
import { Helmet } from "react-helmet-async";

const WorkWithUS = () => {
  return (
    <div>
      <Helmet>
        <title>MingleMotion Express | Work With Us</title>
      </Helmet>
      <VedioPart />
      <MissionVission />
      <AboutUs />
      <WorksPerk />
      <Application />
      <FAQs />
    </div>
  );
};

export default WorkWithUS;
