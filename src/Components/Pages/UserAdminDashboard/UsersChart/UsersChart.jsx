import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
 
const UsersChart = () => {
    const data = {
        labels: [
            "September 15", 
            "September 16", 
            "September 17", 
            "September 18", 
            "September 19", 
        ],
        datasets: [
            {
                data: [9, 7.8, 6, 8, 7, 5, 6],
                backgroundColor: 'transparent',
                borderColor: '#f26c6d',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: 0.3
            }
        ]
    }

    const options = {
        Plugins: {
            legend: false
        },
        scales: {
            x:{
                grid: {
                    display: false
                }
            },
            y:{
                min: 2, 
                max: 10,
                ticks: {
                    stepSize:2
                }
            }
        }
    }
    return (
        <div className='w-full h-full px-8'>
            <h2 className='text-2xl text-center py-10 font-bold'>User Chart</h2>
            <div style={{width: "800px", height: "500px"}}>
            <Line data={data} options={options}></Line>
            </div>
        </div>
    );
};

export default UsersChart;