import React, { useReducer, useEffect } from 'react';
import { CarbonContext } from '/Users/nasrahassan/carbonTracker/carbon-tracker/src/carbonContext.js';

const initialState = {
  activities: [],
  totalCarbon: 0,
  goal: 100,
  achievements: [],
};

function carbonReducer(state, action) {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      { const newActivities = [...state.activities, action.payload];
      const newTotal = newActivities.reduce((sum, a) => sum + a.carbon, 0);
      return {
        ...state,
        activities: newActivities,
        totalCarbon: newTotal,
        achievements: getAchievements(newTotal),
      }; }
    case 'SET_GOAL':
      return { ...state, goal: action.payload };
    default:
      return state;
  }
}

function getAchievements(total) {
  const milestones = [
    { label: '🌱 First Activity', threshold: 1 },
    { label: '🚴 50 kg CO₂ saved', threshold: 50 },
    { label: '🌍 100 kg CO₂ saved', threshold: 100 },
  ];
  return milestones.filter(m => total >= m.threshold).map(m => m.label);
}

export default function CarbonProvider({ children }) {
  const [state, dispatch] = useReducer(carbonReducer, initialState, () => {
    const stored = localStorage.getItem('carbonData');
    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('carbonData', JSON.stringify(state));
  }, [state]);

  return (
    <CarbonContext.Provider value={{ state, dispatch }}>
      {children}
    </CarbonContext.Provider>
  );
}
