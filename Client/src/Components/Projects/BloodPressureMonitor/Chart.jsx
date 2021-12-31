import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
    Legend
} from "recharts";
import { format, parseISO } from "date-fns";

export const Chart = ({ bpData }) => {

    return (
        <>
        
            {bpData.length ?
               
                <ResponsiveContainer  width="50%" height={500}>
    
                    <AreaChart margin={{ top: 50 }} data={bpData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#2451B7" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>

                        {/* <Area dataKey="value" stroke="#2451B7" fill="url(#color)" /> */}

                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(str) => {
                                const date = parseISO(str);
                                if (date.getDate()) {
                                    return format(date, "MMM, d");
                                }
                                return "";
                            }}
                        />

                        <YAxis
                            datakey="number"
                            axisLine={true}
                            tickLine={true}
                            ticks={[0, 50, 100, 150, 200, 250, 300]}
                        // tickCount={8}
                        // tickFormatter={(number) => `${number.toFixed(2)}`}
                        />
                        <Tooltip content={<CustomTooltip data={bpData} />} />


                        <CartesianGrid opacity={0.2} vertical={false} />
                        <Legend verticalAlign="top" height={36} />

                        <Area type="monotone" dataKey="systolic" stroke="#8184d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="diastolic" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        <Area type="monotone" dataKey="heartRate" stroke="#f00" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                      
                </ResponsiveContainer>
                    : <h3 style={{ margin: '0 auto' }}>Please submit reading to begin generating data plotting...</h3>}
             
        </>
    );
}



function CustomTooltip({ active, payload, label, data }) {

    if (active && payload && payload.length) {

        // console.log(data, payload[0].payload.id)

        return (

            <div style={{color:'white'}}>
                <p>Date: {payload[0].payload.date}</p>
                <p>Systolic: {payload[0].payload.systolic}</p>
                <p>Diastolic: {payload[0].payload.diastolic}</p>
                <p>Heart Rate: {payload[0].payload.heartRate}</p>
            </div>

        );
    }
    return null;
}