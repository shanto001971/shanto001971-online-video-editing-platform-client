import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Label } from 'recharts';

const CustomShapeBarChart = ({ data }) => {


    const renderCustomLabel = (props) => {
        const { x, y, width, value, dataKey } = props;
        return (
          <text x={x + width / 2} y={y - 10} textAnchor="middle" fill={props.fill}>
            {`${dataKey}: ${value}`}
          </text>
        );
      };


  return (
    <div className='w-full'>
        <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={700}
        height={400}
        data={data}
        
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8">
        <LabelList dataKey="users" position="top" fill="#8884d8" content={(props) => renderCustomLabel({ ...props, dataKey: 'users' })} />
          </Bar>
        <Bar dataKey="videos" fill="#82ca9d">
        <LabelList dataKey="videos" position="top" fill="#82ca9d" content={(props) => renderCustomLabel({ ...props, dataKey: 'videos' })} />
        </Bar>
        <Bar dataKey="images" fill="#ffc658">
        <LabelList dataKey="images" position="top" fill="#ffc658" content={(props) => renderCustomLabel({ ...props, dataKey: 'images' })} />
        </Bar>
        
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default CustomShapeBarChart;
