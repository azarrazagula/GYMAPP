import React from "react";

const FeatureCard = ({ emoji, title, delay }) => (
  <div
    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center feature-card"
    style={{ animationDelay: delay }}
  >
    <div className="text-2xl mb-2">{emoji}</div>
    <p className="text-gray-400 text-xs">{title}</p>
  </div>
);

export default FeatureCard;
