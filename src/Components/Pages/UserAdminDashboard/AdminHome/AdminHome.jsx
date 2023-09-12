import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() => {
            const res = await axiosSecure('/admin-stats')
            console.log(res)
            return res.data;
        }
    })

  

    // for charts
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = [
        {
          name: 'Revinue',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Users',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Videos',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Images',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        
      ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      

    return (
        <div className="w-full h-full">
            <div className="text-2xl py-10 text-center">Hello, {user.displayName}</div>
            <div>
            <div className="flex bg-gradient-to-r from-cyan-500 to-blue-400 text-primary-content">
  
                <div className="stat flex-1">
                    <div className="stat-title text-white text-xl">Revinue</div>
                    <div className="stat-value">$400</div>
                    <div className="stat-actions">
                    <div className="stat-desc text-primary">↗︎ 40 (2%)</div>
                    </div>
                </div>
                
                <div className="stat flex-1">
                    <div className="stat-title text-white text-xl">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-actions">
                    <div className="stat-desc text-secondary">↘︎ 90 (14%)</div>
                    </div>
                </div>
                <div className="stat flex-1">
                    <div className="stat-title text-white text-xl">Videos</div>
                    <div className="stat-value">{stats.videos}</div>
                    <div className="stat-actions">
                    <div className="stat-desc text-primary">↘︎ 40 (5%)</div>
                    </div>
                </div>
                <div className="stat flex-1">
                    <div className="stat-title text-white text-xl">Images</div>
                    <div className="stat-value">{stats.images}</div>
                    <div className="stat-actions">
                    <div className="stat-desc text-warning">↘︎ 35 (4%)</div>
                    </div>
                </div>
                
                </div>
            </div>

            {/* charts */}
            <div className="flex  py-10">
                <div className="w-1/2">
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
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
                </div>


                <div className="w-1/2">
                    chart 2
                </div>
            </div>
        </div>
    );
};

export default AdminHome;