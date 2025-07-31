'use client';

import { useState } from 'react';
import { PersonalityProfile, getPersonalityByName } from '../personality-mapping';
import Link from 'next/link';

// Mock quiz results - in real app, this would come from the quiz
const mockQuizResults = {
  personalityName: "The Strategic Synthesizer",
  riskAppetite: "balanced",
  timeHorizon: "swing holder", 
  cognitiveStyle: "analytical",
  confidence: 87, // How confident we are in this match
  traits: {
    riskTolerance: 65,
    timePreference: 72,
    analysisDepth: 88,
    noveltySeeking: 34
  }
};

export default function QuizResults() {
  const [selectedSwap, setSelectedSwap] = useState<string | null>(null);
  const [showOverride, setShowOverride] = useState(false);

  const personality = getPersonalityByName(mockQuizResults.personalityName);
  
  if (!personality) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PsychSwap</span>
          </div>
          <div className="text-sm text-gray-500">
            Assessment completed • {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Profile Analysis Complete
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {mockQuizResults.personalityName}
            </span>
          </h1>
          
          <div className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">
              Your analytical approach to risk and preference for balanced time horizons 
              suggests you thrive on strategic, well-researched opportunities.
            </p>
            <p>
              We've curated three swap strategies that align with your cognitive profile 
              and risk tolerance patterns.
            </p>
          </div>
        </div>

        {/* Confidence Indicator */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Profile Confidence</h3>
              <span className="text-2xl font-bold text-green-600">{mockQuizResults.confidence}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${mockQuizResults.confidence}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Based on {mockQuizResults.traits.analysisDepth}% analytical depth and {mockQuizResults.traits.riskTolerance}% risk tolerance
            </p>
          </div>
        </div>

        {/* Swap Suggestions */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Your Curated Swap Strategies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {personality.tokenPairs.map((pair, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
                  selectedSwap === pair ? 'border-purple-500 shadow-lg' : 'border-gray-200'
                }`}
                onClick={() => setSelectedSwap(pair)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{pair}</h3>
                      <p className="text-sm text-gray-500">{personality.strategy}</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedSwap === pair ? 'border-purple-500 bg-purple-500' : 'border-gray-300'
                  }`}>
                    {selectedSwap === pair && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {personality.riskLevel} risk
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {personality.holdingTime}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {personality.explanation}
                  </p>
                  
                  <div className="pt-4">
                    <button 
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                        selectedSwap === pair
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle swap execution via 1inch
                        console.log(`Executing swap for ${pair}`);
                      }}
                    >
                      {selectedSwap === pair ? 'Execute Swap' : 'Select Strategy'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Override Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Forge Your Own Path
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  While our analysis suggests these strategies align with your profile, 
                  you're always in control. Explore the full DeFi ecosystem on your own terms.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    onClick={() => setShowOverride(!showOverride)}
                  >
                    Explore All Tokens
                  </button>
                  
                  <Link 
                    href="/demo"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                  >
                    View All Personalities
                  </Link>
                </div>
                
                {showOverride && (
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800">
                      <strong>Note:</strong> Independent trading bypasses our risk assessment. 
                      Consider your profile insights when making decisions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Your Cognitive Profile
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Risk Tolerance Analysis</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Risk Tolerance</span>
                  <span className="text-sm font-medium">{mockQuizResults.traits.riskTolerance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${mockQuizResults.traits.riskTolerance}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Time Preference</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Holding Period</span>
                  <span className="text-sm font-medium">{mockQuizResults.traits.timePreference}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${mockQuizResults.traits.timePreference}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 