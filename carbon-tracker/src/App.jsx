import React from 'react';
import CarbonProvider from '/Users/nasrahassan/carbonTracker/carbon-tracker/src/carbonCenter.jsx';

import Header from './components/Header';
import ActivityLogger from './components/ActivityLogger';
import ActivityList from './components/ActivityList';
import GoalSetter from './components/GoalSetter';
import SummaryChart from './components/SummaryChart';
import Achievements from './components/Achievements'; 
import './App.css'

export default function App() {
  return (
    <CarbonProvider>
  <div className="min-h-screen text-gray-800 py-10 px-4">
  <div className="max-w-3xl mx-auto space-y-8">
    <Header />
    <div className="grid md:grid-cols-2 gap-6">
      <ActivityLogger />
      <GoalSetter />
    </div>
    <ActivityList />
    <SummaryChart />
    <Achievements />
  </div>
</div>
    </CarbonProvider>
  );
}
