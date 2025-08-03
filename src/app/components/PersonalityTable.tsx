"use client";

import { personalityMapping, PersonalityProfile } from "../personality-mapping";
import { useState } from "react";

interface PersonalityTableProps {
  onPersonalitySelect?: (personality: PersonalityProfile) => void;
}

export default function PersonalityTable({
  onPersonalitySelect,
}: PersonalityTableProps) {
  const [selectedRisk, setSelectedRisk] = useState<string>("all");
  const [selectedAppetite, setSelectedAppetite] = useState<string>("all");
  const [selectedHoldingTime, setSelectedHoldingTime] = useState<string>("all");

  const filteredPersonalities = personalityMapping.filter((personality) => {
    const riskMatch =
      selectedRisk === "all" || personality.riskLevel === selectedRisk;
    const appetiteMatch =
      selectedAppetite === "all" ||
      personality.noveltyAppetite === selectedAppetite;
    const holdingMatch =
      selectedHoldingTime === "all" ||
      personality.holdingTime === selectedHoldingTime;
    return riskMatch && appetiteMatch && holdingMatch;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAppetiteColor = (appetite: string) => {
    return appetite === "blue-chip"
      ? "bg-blue-100 text-blue-800"
      : "bg-purple-100 text-purple-800";
  };

  const getHoldingTimeColor = (time: string) => {
    return time === "long-term"
      ? "bg-indigo-100 text-indigo-800"
      : "bg-orange-100 text-orange-800";
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Personality Trading Profiles
      </h2>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select
          value={selectedRisk}
          onChange={(e) => setSelectedRisk(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Risk Levels</option>
          <option value="low">Low Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="high">High Risk</option>
        </select>

        <select
          value={selectedAppetite}
          onChange={(e) => setSelectedAppetite(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Appetites</option>
          <option value="blue-chip">Blue-Chip</option>
          <option value="experimental">Experimental</option>
        </select>

        <select
          value={selectedHoldingTime}
          onChange={(e) => setSelectedHoldingTime(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Holding Times</option>
          <option value="long-term">Long-Term</option>
          <option value="short-term">Short-Term</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Personality
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Appetite
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Holding Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Token Pairs
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Strategy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Explanation
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPersonalities.map((personality, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onPersonalitySelect?.(personality)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {personality.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(
                      personality.riskLevel
                    )}`}
                  >
                    {personality.riskLevel}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getAppetiteColor(
                      personality.noveltyAppetite
                    )}`}
                  >
                    {personality.noveltyAppetite}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getHoldingTimeColor(
                      personality.holdingTime
                    )}`}
                  >
                    {personality.holdingTime}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {personality.tokenPairs.map((pair, i) => (
                      <div
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded mr-1 mb-1 inline-block"
                      >
                        {pair}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-medium">
                    {personality.strategy}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600 max-w-xs">
                    {personality.explanation}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredPersonalities.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No personalities match the selected filters.
        </div>
      )}
    </div>
  );
}
