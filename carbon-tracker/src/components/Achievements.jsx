import React, { useContext, useEffect, useRef } from 'react';
import { CarbonContext } from '/Users/nasrahassan/carbonTracker/carbon-tracker/src/carbonContext.js';
import confetti from 'canvas-confetti';

export default function Achievements() {
  const { state } = useContext(CarbonContext);
  const { achievements } = state;

  const lastCount = useRef(achievements.length);

  useEffect(() => {
    if (achievements.length > lastCount.current) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      alert(`🎉 New achievement unlocked: ${achievements.at(-1)}!`);
    }
    lastCount.current = achievements.length;
  }, [achievements]);

  if (achievements.length === 0) return null;

  return (
    <div className="form-box">
      <h2 className="text-xl font-semibold text-center text-yellow-600 mb-2">
        🏆 Achievements
      </h2>
      <ul className="list-none text-center space-y-1">
        {achievements.map((ach, i) => (
          <li key={i} className="text-green-800 font-medium">
            {ach}
          </li>
        ))}
      </ul>
    </div>
  );
}
