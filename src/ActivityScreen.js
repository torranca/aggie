import React from 'react';

function ActivityScreen({ activity }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-blue-900 mb-4">Activity: {activity}</h2>
      <p className="text-lg text-gray-700">Here you can add activities or resources based on the selected activity.</p>
    </div>
  );
}

export default ActivityScreen;
