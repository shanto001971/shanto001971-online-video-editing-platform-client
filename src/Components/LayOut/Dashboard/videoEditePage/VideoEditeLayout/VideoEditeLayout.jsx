import React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const VideoEditeLayout = () => {
  return (
    <div>
      <Helmet>
        <title>MingleMotion Express | Video Edit Page</title>
      </Helmet>
      <Outlet />
    </div>
  );
};

export default VideoEditeLayout;
