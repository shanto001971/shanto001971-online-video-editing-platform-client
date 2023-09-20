import React from "react";
import Timeline from "../Timeline/Timeline";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>MingleMotion Express | About</title>
      </Helmet>
      <Timeline />
    </div>
  );
};

export default About;
