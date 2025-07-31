'use client';

import PersonalityTable from '../components/PersonalityTable';
import { PersonalityProfile } from '../personality-mapping';
import { useState } from 'react';

export default function DemoPage() {
  const [selectedPersonality, setSelectedPersonality] = useState<PersonalityProfile | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            PsychSwap Personality Profiles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your DeFi trading personality and get personalized token pair suggestions 
            and strategies based on your risk tolerance and preferences.
          </p>
        </div>

        {selectedPersonality && (
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Selected Profile: {selectedPersonality.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Risk Level</h3>
                <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                  selectedPersonality.riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                  selectedPersonality.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {selectedPersonality.riskLevel}
                </span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-700">{selectedPersonality.strategy}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Token Pairs</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPersonality.tokenPairs.map((pair, i) => (
                    <span key={i} className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {pair}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Why This Fits You</h3>
              <p className="text-gray-700">{selectedPersonality.explanation}</p>
            </div>
            <button 
              onClick={() => setSelectedPersonality(null)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Clear Selection
            </button>
          </div>
        )}

        <PersonalityTable onPersonalitySelect={setSelectedPersonality} />
      </div>
    </div>
  );
} 