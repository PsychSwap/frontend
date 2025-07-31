export interface PersonalityProfile {
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  noveltyAppetite: 'blue-chip' | 'experimental';
  holdingTime: 'long-term' | 'short-term';
  tokenPairs: string[];
  strategy: string;
  explanation: string;
}

export const personalityMapping: PersonalityProfile[] = [
  {
    name: "The Chill Strategist",
    riskLevel: "low",
    noveltyAppetite: "blue-chip",
    holdingTime: "long-term",
    tokenPairs: ["ETH/stETH", "USDC/USDT", "WBTC/ETH"],
    strategy: "Stable LP Farming",
    explanation: "Prefers established protocols with predictable returns. Focuses on stable pairs and blue-chip assets for steady, low-risk income generation."
  },
  {
    name: "The Altcoin Cowboy",
    riskLevel: "high",
    noveltyAppetite: "experimental",
    holdingTime: "short-term",
    tokenPairs: ["PEPE/USDT", "SHIB/ETH", "DOGE/USDC"],
    strategy: "Meme Coin Momentum Trading",
    explanation: "Thrives on volatility and social media hype. Seeks quick profits from trending meme coins and viral tokens."
  },
  {
    name: "The Meme Monk",
    riskLevel: "medium",
    noveltyAppetite: "experimental",
    holdingTime: "long-term",
    tokenPairs: ["PEPE/ETH", "SHIB/ETH", "FLOKI/USDT"],
    strategy: "Meme Coin Accumulation",
    explanation: "Believes in the long-term potential of meme communities. Accumulates during dips and holds through cycles."
  },
  {
    name: "The DeFi Deacon",
    riskLevel: "medium",
    noveltyAppetite: "experimental",
    holdingTime: "long-term",
    tokenPairs: ["UNI/ETH", "AAVE/ETH", "COMP/USDC"],
    strategy: "Protocol Token Farming",
    explanation: "Deeply researches DeFi protocols and accumulates governance tokens. Believes in the future of decentralized finance."
  },
  {
    name: "The Stable Sergeant",
    riskLevel: "low",
    noveltyAppetite: "blue-chip",
    holdingTime: "long-term",
    tokenPairs: ["USDC/USDT", "DAI/USDC", "FRAX/USDC"],
    strategy: "Stablecoin Yield Farming",
    explanation: "Prioritizes capital preservation over high returns. Focuses on stablecoin pairs and conservative yield strategies."
  },
  {
    name: "The Yield Hunter",
    riskLevel: "medium",
    noveltyAppetite: "experimental",
    holdingTime: "medium-term",
    tokenPairs: ["CRV/ETH", "BAL/ETH", "SUSHI/ETH"],
    strategy: "Yield Farming Optimization",
    explanation: "Constantly seeks the highest APY opportunities across different protocols. Rotates between farming strategies."
  },
  {
    name: "The Bitcoin Believer",
    riskLevel: "medium",
    noveltyAppetite: "blue-chip",
    holdingTime: "long-term",
    tokenPairs: ["WBTC/ETH", "BTC/ETH", "WBTC/USDC"],
    strategy: "Bitcoin-Centric Trading",
    explanation: "Views Bitcoin as digital gold and builds strategies around BTC pairs. Prefers established, liquid markets."
  },
  {
    name: "The Innovation Investor",
    riskLevel: "high",
    noveltyAppetite: "experimental",
    holdingTime: "long-term",
    tokenPairs: ["ARB/ETH", "OP/ETH", "MATIC/ETH"],
    strategy: "Layer 2 Ecosystem Building",
    explanation: "Early adopter of new blockchain technologies. Invests in promising L2 solutions and ecosystem tokens."
  },
  {
    name: "The Swing Trader",
    riskLevel: "medium",
    noveltyAppetite: "blue-chip",
    holdingTime: "short-term",
    tokenPairs: ["ETH/USDC", "BTC/USDT", "SOL/ETH"],
    strategy: "Technical Analysis Trading",
    explanation: "Uses chart patterns and market cycles to time entries and exits. Focuses on liquid, established pairs."
  },
  {
    name: "The NFT Enthusiast",
    riskLevel: "high",
    noveltyAppetite: "experimental",
    holdingTime: "medium-term",
    tokenPairs: ["APE/ETH", "BAYC/ETH", "Doodles/ETH"],
    strategy: "NFT Token Trading",
    explanation: "Trades tokens associated with popular NFT collections. Capitalizes on NFT market sentiment and trends."
  },
  {
    name: "The Privacy Pioneer",
    riskLevel: "medium",
    noveltyAppetite: "experimental",
    holdingTime: "long-term",
    tokenPairs: ["ZEC/ETH", "XMR/ETH", "DASH/ETH"],
    strategy: "Privacy Coin Accumulation",
    explanation: "Values financial privacy and believes in the importance of anonymous transactions. Long-term holder of privacy-focused tokens."
  },
  {
    name: "The Gaming Guild Master",
    riskLevel: "high",
    noveltyAppetite: "experimental",
    holdingTime: "medium-term",
    tokenPairs: ["AXS/ETH", "SAND/ETH", "MANA/ETH"],
    strategy: "Gaming Token Trading",
    explanation: "Trades tokens from blockchain gaming projects. Capitalizes on gaming industry trends and metaverse development."
  }
];

// Helper function to get personality by name
export const getPersonalityByName = (name: string): PersonalityProfile | undefined => {
  return personalityMapping.find(personality => personality.name === name);
};

// Helper function to get personalities by risk level
export const getPersonalitiesByRiskLevel = (riskLevel: 'low' | 'medium' | 'high'): PersonalityProfile[] => {
  return personalityMapping.filter(personality => personality.riskLevel === riskLevel);
};

// Helper function to get personalities by novelty appetite
export const getPersonalitiesByNoveltyAppetite = (appetite: 'blue-chip' | 'experimental'): PersonalityProfile[] => {
  return personalityMapping.filter(personality => personality.noveltyAppetite === appetite);
};

// Helper function to get personalities by holding time
export const getPersonalitiesByHoldingTime = (holdingTime: 'long-term' | 'short-term'): PersonalityProfile[] => {
  return personalityMapping.filter(personality => personality.holdingTime === holdingTime);
}; 