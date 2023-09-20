import React from "react";
import { Editor } from "../../../../Editor";
import { Helmet } from "react-helmet-async";

const VideoEditePage = () => {
  return (
    <div>
      <Helmet>
        <title>MingleMotion Express | Video Edit Page</title>
      </Helmet>
      <Editor />
    </div>
  );
};

export default VideoEditePage;
