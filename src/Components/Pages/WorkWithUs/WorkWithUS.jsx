import React from "react";
import VedioPart from "./Components/VedioPart";
import AboutUs from "./Components/AboutUs";
import WorksPerk from "./Components/WorksPerk";
import MissionVission from "./Components/MissionVission";
import FAQs from "./Components/FAQs";
import Application from "./Components/Application";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const WorkWithUS = () => {
  const {
    theme,
    changesThemeTextColor
  } = useTheme();

  return (
    <div className={`${theme.mode === 'dark' ? 'text-gray-100' : 'text-black'}`}>
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
