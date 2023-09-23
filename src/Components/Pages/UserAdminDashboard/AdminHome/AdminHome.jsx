import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { theme, changesThemeTextColor } = useTheme(); // for using light and dark themes

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      console.log(res);
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["admin-chart"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-chart");
      console.log(res);
      return res.data;
    },
  });

  // chart one
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  // chart two
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // chart one
  const data = [
    {
      name: "Revinue",
      uv: 500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Users",
      uv: 17,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Videos",
      uv: 300,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Images",
      uv: 200,
      pv: 3908,
      amt: 2000,
    },
  ];
  //  chart two
  const dataTwo = [
    { name: "Revinue", value: 400 },
    { name: "Users", value: 17 },
    { name: "Videos", value: 300 },
    { name: "Audios", value: 200 },
  ];

  // chart one
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //   chart two
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <Helmet>
        <title>MingleMotion Express | Admin Home</title>
      </Helmet>
      <div className="w-full h-full px-8">
        <div className={`text-2xl py-10 text-center ${changesThemeTextColor()}`}>
          Hello, {user.displayName}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="stat rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="stat-title text-white text-xl">Revenue</div>
              <div className="stat-value text-white">$439</div>
              <div className="stat-actions">
                <div className="stat-desc text-primary">↗︎ 40 (2%)</div>
              </div>
            </div>
          </div>
          <div>
            <div className="stat rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500">
              <div className="stat-title text-white text-xl">Users</div>
              <div className="stat-value text-white">{stats.users}</div>
              <div className="stat-actions">
                <div className="stat-desc text-secondary">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
          <div>
            <div className="stat rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
              <div className="stat-title text-white text-xl">Videos</div>
              <div className="stat-value text-white">{stats.videos}</div>
              <div className="stat-actions">
                <div className="stat-desc text-primary">↘︎ 40 (5%)</div>
              </div>
            </div>
          </div>
          <div>
            <div className="stat rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <div className="stat-title text-white text-xl">Images</div>
              <div className="stat-value text-white">{stats.images}</div>
              <div className="stat-actions">
                <div className="stat-desc text-warning">↘︎ 35 (4%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* charts */}
        <div className="grid grid-cols-2 gap-3 my-10">
          <div>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="uv"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          {/* chart two */}
          <div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={dataTwo}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataTwo.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
