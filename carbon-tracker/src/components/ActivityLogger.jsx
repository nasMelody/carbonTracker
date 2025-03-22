import React, { useState, useContext } from 'react';
import { CarbonContext } from '/Users/nasrahassan/carbonTracker/carbon-tracker/src/carbonContext.js';

export default function ActivityLogger() {
  const { dispatch } = useContext(CarbonContext);
  const [activity, setActivity] = useState('');
  const [carbon, setCarbon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity || !carbon) return;

    dispatch({
      type: 'ADD_ACTIVITY',
      payload: {
        id: Date.now(),
        name: activity,
        carbon: parseFloat(carbon),
      },
    });

    setActivity('');
    setCarbon('');
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">📝 Log Activity</h2>
      <form onSubmit={handleSubmit} className="form-box">
  <input
    type="text"
    placeholder="Activity (e.g., Biked to school)"
    value={activity}
    onChange={(e) => setActivity(e.target.value)}
  />
  <input
    type="number"
    step="0.1"
    placeholder="Carbon saved (kg)"
    value={carbon}
    onChange={(e) => setCarbon(e.target.value)}
  />
  <button type="submit">Add Activity</button>
</form>
    </div>
  );
}

