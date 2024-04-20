import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import {categories, expenses} from "../../App";
import {parseCur} from "../../App";
import {getContrastYIQ} from "../tags/Tags";




const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index, name
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill={getContrastYIQ(categories[name])} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


export default function PieChartComponent() {
    const full_data = expenses.map(({amount: value, category: name}) => ({value: parseCur(value), name})) || null;
    console.log("full_data:", full_data);
    const data = Object.values(full_data.reduce((total_value, item) => {
        const groupKey = item.name;
        if (!total_value[groupKey]) {
            total_value[groupKey] = { name: groupKey, value: 0 };
        }
        total_value[groupKey].value += item.value;
        return total_value;
    }, {}));
    console.log("data:", data);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35vh' }}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={categories[entry.name]} />
                        ))
                    }
                </Pie>
            </PieChart>
        </div>

    );
}