import { Helmet } from "react-helmet-async";
import DesktopVideoEdit from "../DesktopVideoEdit/DesktopVideoEdit";

const DesktopVideo = () => {
  return (
    <div>
      <Helmet>
        <title>MingleMotion Express | Desktop Video Edit</title>
      </Helmet>
      <DesktopVideoEdit></DesktopVideoEdit>
    </div>
  );
};

export default DesktopVideo;
