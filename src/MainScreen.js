import React, { useState } from 'react';
import ActivityScreen from './ActivityScreen';

function MainScreen() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="p-4">
      {selectedActivity ? (
        <ActivityScreen activity={selectedActivity} />
      ) : (
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">AGGIE</h1>
          <p className="text-lg text-gray-700 mb-8">How can I assist you today?</p>
          <button
            className="m-2 p-3 bg-blue-500 text-white rounded-lg transition-all hover:bg-blue-600"
            onClick={() => handleActivitySelect('numeracy')}
          >
            Numeracy
          </button>
          <button
            className="m-2 p-3 bg-blue-500 text-white rounded-lg transition-all hover:bg-blue-600"
            onClick={() => handleActivitySelect('literacy')}
          >
            Literacy
          </button>
          <button
            className="m-2 p-3 bg-blue-500 text-white rounded-lg transition-all hover:bg-blue-600"
            onClick={() => handleActivitySelect('topic')}
          >
            Topic
          </button>
        </div>
      )}
    </div>
  );
}

export default MainScreen;
