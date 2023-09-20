import { Helmet } from "react-helmet-async";
import MobileVideoEdit from "../MoblileVideoEdit/MobileVideoEdit";

const MobileVideo = () => {
  return (
    <div>
      <Helmet>
        <title>MingleMotion Express | Mobile Video Edit</title>
      </Helmet>
      <MobileVideoEdit></MobileVideoEdit>
    </div>
  );
};

export default MobileVideo;
