export interface Question {
  id: number;
  trait: 'riskTolerance' | 'timePreference' | 'noveltySeeking' | 'cognitiveStyle';
  question: string;
  options: string[];
  type: 'likert' | 'multipleChoice';
  weight: number; // How much this question contributes to the trait score
}

export interface LikertQuestion {
  id: number;
  trait: 'riskTolerance' | 'timePreference' | 'noveltySeeking' | 'cognitiveStyle';
  question: string;
  scale: string[];
  weight: number;
}

// Likert Scale Questions (5-point scale)
export const likertQuestions: LikertQuestion[] = [
  {
    id: 1,
    trait: 'riskTolerance',
    question: "I'm comfortable investing in tokens that could lose 50% of their value overnight",
    scale: [
      "Strongly Disagree",
      "Disagree", 
      "Neutral",
      "Agree",
      "Strongly Agree"
    ],
    weight: 1.2
  },
  {
    id: 2,
    trait: 'timePreference',
    question: "I prefer to hold investments for at least 6 months before considering selling",
    scale: [
      "Strongly Disagree",
      "Disagree",
      "Neutral", 
      "Agree",
      "Strongly Agree"
    ],
    weight: 1.0
  },
  {
    id: 3,
    trait: 'noveltySeeking',
    question: "I'm excited to try new DeFi protocols before they're widely adopted",
    scale: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree", 
      "Strongly Agree"
    ],
    weight: 1.1
  },
  {
    id: 4,
    trait: 'cognitiveStyle',
    question: "I rely heavily on data and charts when making trading decisions",
    scale: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree"
    ],
    weight: 1.0
  },
  {
    id: 5,
    trait: 'riskTolerance',
    question: "I would allocate more than 20% of my portfolio to a single high-risk token",
    scale: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree"
    ],
    weight: 1.3
  },
  {
    id: 6,
    trait: 'timePreference',
    question: "I check my portfolio multiple times per day",
    scale: [
      "Strongly Disagree",
      "Disagree", 
      "Neutral",
      "Agree",
      "Strongly Agree"
    ],
    weight: 0.9
  },
  {
    id: 7,
    trait: 'noveltySeeking',
    question: "I'm drawn to tokens with unique or experimental use cases",
    scale: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree"
    ],
    weight: 1.1
  },
  {
    id: 8,
    trait: 'cognitiveStyle',
    question: "I trust my intuition more than technical analysis",
    scale: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree"
    ],
    weight: 0.8
  }
];

// Multiple Choice Questions
export const multipleChoiceQuestions: Question[] = [
  {
    id: 9,
    trait: 'riskTolerance',
    question: "When I see a token price drop 20%, my first thought is...",
    options: [
      "This is a buying opportunity",
      "I should wait to see if it drops more", 
      "I need to research why this happened",
      "I should cut my losses and sell",
      "I'm not sure, I need more information"
    ],
    type: 'multipleChoice',
    weight: 1.2
  },
  {
    id: 10,
    trait: 'timePreference',
    question: "I prefer trading strategies that...",
    options: [
      "Generate quick profits within days",
      "Show results within weeks to months",
      "Build wealth over years",
      "Provide steady income streams",
      "Adapt to market conditions"
    ],
    type: 'multipleChoice',
    weight: 1.0
  },
  {
    id: 11,
    trait: 'noveltySeeking',
    question: "I'm more excited by...",
    options: [
      "Established protocols with proven track records",
      "New DeFi protocols with innovative features",
      "Meme coins and viral tokens",
      "Traditional financial instruments",
      "A mix of established and experimental projects"
    ],
    type: 'multipleChoice',
    weight: 1.1
  },
  {
    id: 12,
    trait: 'cognitiveStyle',
    question: "Before making a trading decision, I typically...",
    options: [
      "Analyze charts and technical indicators thoroughly",
      "Follow my gut feeling and market sentiment",
      "Research the project's fundamentals",
      "Ask for advice from experienced traders",
      "Use a combination of analysis and intuition"
    ],
    type: 'multipleChoice',
    weight: 1.0
  },
  {
    id: 13,
    trait: 'riskTolerance',
    question: "If I had $10,000 to invest in crypto, I would...",
    options: [
      "Put it all in Bitcoin and Ethereum",
      "Diversify across 5-10 established tokens",
      "Split between blue chips and some riskier plays",
      "Try to find the next 100x opportunity",
      "Keep most in stablecoins, experiment with small amounts"
    ],
    type: 'multipleChoice',
    weight: 1.3
  },
  {
    id: 14,
    trait: 'timePreference',
    question: "I check my portfolio...",
    options: [
      "Multiple times per day",
      "Once or twice daily",
      "A few times per week",
      "Weekly or monthly",
      "Only when I need to make decisions"
    ],
    type: 'multipleChoice',
    weight: 0.9
  },
  {
    id: 15,
    trait: 'noveltySeeking',
    question: "When I hear about a new token launch, I...",
    options: [
      "Immediately try to get in early",
      "Wait to see if it gains traction first",
      "Research the team and technology",
      "Ignore it until it's proven",
      "Consider it as part of a broader strategy"
    ],
    type: 'multipleChoice',
    weight: 1.1
  },
  {
    id: 16,
    trait: 'cognitiveStyle',
    question: "I believe successful trading comes from...",
    options: [
      "Deep technical analysis and data",
      "Understanding market psychology",
      "Following proven strategies and systems",
      "Intuition and experience",
      "A balanced approach using multiple methods"
    ],
    type: 'multipleChoice',
    weight: 1.0
  }
];

// Scenario-based questions for more realistic assessment
export const scenarioQuestions: Question[] = [
  {
    id: 17,
    trait: 'riskTolerance',
    question: "A friend tells you about a new token that could 10x but might also go to zero. You have $1,000 to spare. You would...",
    options: [
      "Invest the full $1,000 immediately",
      "Invest $500 and keep $500 for other opportunities",
      "Invest $200 to test the waters",
      "Research thoroughly before investing anything",
      "Pass on the opportunity entirely"
    ],
    type: 'multipleChoice',
    weight: 1.4
  },
  {
    id: 18,
    trait: 'timePreference',
    question: "You buy a token and it immediately drops 15%. Your plan is to...",
    options: [
      "Sell immediately to cut losses",
      "Hold for a few days to see if it recovers",
      "Hold for weeks or months",
      "Buy more to average down",
      "Set a stop-loss and let it play out"
    ],
    type: 'multipleChoice',
    weight: 1.1
  },
  {
    id: 19,
    trait: 'noveltySeeking',
    question: "You discover a new DeFi protocol that's only a few days old. You...",
    options: [
      "Ape in immediately with significant capital",
      "Wait for more information and community feedback",
      "Research the team and technology first",
      "Ignore it until it's been audited and proven",
      "Allocate a small amount to test it out"
    ],
    type: 'multipleChoice',
    weight: 1.2
  },
  {
    id: 20,
    trait: 'cognitiveStyle',
    question: "You're considering a major portfolio reallocation. You base your decision on...",
    options: [
      "Technical analysis and market data",
      "Market sentiment and social media buzz",
      "Fundamental analysis of projects",
      "Advice from trusted sources",
      "A combination of multiple factors"
    ],
    type: 'multipleChoice',
    weight: 1.0
  }
];

// Question sets for different quiz modes
export const quizModes = {
  comprehensive: [...likertQuestions, ...multipleChoiceQuestions, ...scenarioQuestions],
  quick: [
    likertQuestions[0], // Risk tolerance
    likertQuestions[1], // Time preference  
    likertQuestions[2], // Novelty seeking
    likertQuestions[3]  // Cognitive style
  ],
  degen: [
    scenarioQuestions[0], // High-risk scenario
    multipleChoiceQuestions[4], // $10k investment
    scenarioQuestions[2], // New protocol
    multipleChoiceQuestions[6]  // Portfolio checking frequency
  ]
};

// Scoring weights for different answer types
export const scoringWeights = {
  likert: {
    'Strongly Disagree': 1,
    'Disagree': 2,
    'Neutral': 3,
    'Agree': 4,
    'Strongly Agree': 5
  },
  multipleChoice: {
    // Risk tolerance: higher index = higher risk
    riskTolerance: [1, 2, 3, 4, 5],
    // Time preference: higher index = shorter time horizon
    timePreference: [5, 4, 3, 2, 1],
    // Novelty seeking: higher index = more novelty seeking
    noveltySeeking: [1, 3, 5, 2, 4],
    // Cognitive style: higher index = more analytical
    cognitiveStyle: [5, 2, 4, 1, 3]
  }
}; 