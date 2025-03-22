import React, { useContext, useState } from 'react';
import { CarbonContext } from '/Users/nasrahassan/carbonTracker/carbon-tracker/src/carbonContext.js';

export default function GoalSetter() {
  const { state, dispatch } = useContext(CarbonContext);
  const [goalInput, setGoalInput] = useState(state.goal);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_GOAL', payload: parseFloat(goalInput) });
  };

  const progress = Math.min((state.totalCarbon / state.goal) * 100, 100);

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">🎯 Carbon Goal</h2>
      <form onSubmit={handleSubmit} className="form-box">
<input
    type="number"
    value={goalInput}
    onChange={(e) => setGoalInput(e.target.value)}
  />
  <button type="submit">Set Goal</button>
</form>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Progress: {state.totalCarbon.toFixed(1)} / {state.goal} kg CO₂
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
