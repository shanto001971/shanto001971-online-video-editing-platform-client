import { Helmet } from "react-helmet-async";
import CustomShapeBarChart from "../CustomShapeBarChart/CustomShapeBarChart";

const AdminChart = () => {
  const data = [
    { name: "Category 1", users: 11, videos: 0, images: 0 },
    { name: "Category 2", users: 11, videos: 10, images: 50 },
    // Add more data points here if needed
  ];

  return (
    <>
      <Helmet>
        <title>MingleMotion Express | Admin Chart</title>
      </Helmet>
      <div className="w-full">
        <h2 className="text-2xl">Admin Chart</h2>
        <CustomShapeBarChart data={data} />
      </div>
    </>
  );
};

export default AdminChart;
