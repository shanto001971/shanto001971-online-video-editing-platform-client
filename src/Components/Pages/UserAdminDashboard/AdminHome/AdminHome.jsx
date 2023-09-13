import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
    
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

    const {data: chartData = []} = useQuery({
        queryKey: ['admin-chart'],
        queryFn: async() => {
            const res = await axiosSecure('/admin-chart')
            console.log(res)
            return res.data;
        }
    })

    


    return (
        <div className="w-full h-full">
            <div className="text-2xl py-10 text-center">Hello, {user.displayName}</div>
            <div>
            <div className="flex bg-gradient-to-r from-cyan-500 to-blue-400 text-primary-content">
  
                <div className="stat flex-1">
                    <div className="stat-title text-white text-xl">Revinue</div>
                    <div className="stat-value">$439</div>
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
                {/* Charts will appear here============== */}
                </div>

                {/* Pie chart */}
                <div className="w-1/2">
                 {/* another chart will appear here============ */}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;