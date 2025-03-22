import React, { useContext } from 'react';
import { CarbonContext } from '/Users/nasrahassan/carbonTracker/carbon-tracker/src/carbonContext.js';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

export default function SummaryChart() {
  const { state } = useContext(CarbonContext);

  // Format activity data for the chart
  const data = state.activities.map((a) => ({
    name: a.name.length > 10 ? a.name.slice(0, 10) + '…' : a.name,
    carbon: a.carbon,
  }));

  if (data.length === 0) return null;

  return (
    <div className="bg-white rounded-xl p-4 shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">📊 Summary Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="carbon" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
