import React from 'react'
import "./Chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({ title, data, dataKey, dataKey2,dataKey3, grid }) {


    return (
        <div className="chart">
        <div style={{justifyContent:"space-between", textAlign:"center"}}>
          <h3 className="chartTitle">{title}</h3>
        </div>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey} stroke="red" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey2} stroke="green" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey3} stroke="blue" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }

export default Chart