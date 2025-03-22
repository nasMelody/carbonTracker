import React, { useContext } from 'react';
import { CarbonContext } from '/Users/nasrahassan/carbonTracker/carbon-tracker/src/carbonContext.js';


export default function ActivityList() {
    const { state } = useContext(CarbonContext);
    const { activities, totalCarbon } = state;
  
    if (activities.length === 0) return null;
  
    return (
      <div className="form-box">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4 uppercase tracking-wide">
          Logged Activities
        </h2>
  
        <ul className="space-y-3 mt-2">
          {activities.map((act) => (
            <li
              key={act.id}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
            >
              <span className="capitalize text-gray-700">{act.name}</span>
              <span className="text-green-700 font-semibold text-sm">
                {act.carbon} kg CO₂
              </span>
            </li>
          ))}
        </ul>
  
        <div className="mt-4 text-right text-sm text-gray-600 font-medium">
          Total: {totalCarbon.toFixed(1)} kg CO₂
        </div>
      </div>
    );
  }
