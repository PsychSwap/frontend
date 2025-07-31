# PsychSwap Personality Mapping System

This system provides a comprehensive mapping between DeFi trading personalities and their corresponding token pairs, strategies, and explanations.

## Overview

The personality mapping system consists of 12 distinct trading personalities, each with:
- **Risk Level**: Low, Medium, or High
- **Novelty Appetite**: Blue-chip or Experimental
- **Holding Time**: Long-term or Short-term
- **Token Pairs**: 2-3 suggested trading pairs
- **Strategy**: Specific trading approach
- **Explanation**: Why this profile fits the personality

## Personality Profiles

### Low Risk Profiles
1. **The Chill Strategist** - Stable LP Farming with ETH/stETH, USDC/USDT
2. **The Stable Sergeant** - Stablecoin Yield Farming with USDC/USDT, DAI/USDC

### Medium Risk Profiles
3. **The Meme Monk** - Meme Coin Accumulation with PEPE/ETH, SHIB/ETH
4. **The DeFi Deacon** - Protocol Token Farming with UNI/ETH, AAVE/ETH
5. **The Yield Hunter** - Yield Farming Optimization with CRV/ETH, BAL/ETH
6. **The Bitcoin Believer** - Bitcoin-Centric Trading with WBTC/ETH, BTC/ETH
7. **The Swing Trader** - Technical Analysis Trading with ETH/USDC, BTC/USDT
8. **The Privacy Pioneer** - Privacy Coin Accumulation with ZEC/ETH, XMR/ETH

### High Risk Profiles
9. **The Altcoin Cowboy** - Meme Coin Momentum Trading with PEPE/USDT, SHIB/ETH
10. **The Innovation Investor** - Layer 2 Ecosystem Building with ARB/ETH, OP/ETH
11. **The NFT Enthusiast** - NFT Token Trading with APE/ETH, BAYC/ETH
12. **The Gaming Guild Master** - Gaming Token Trading with AXS/ETH, SAND/ETH

## Usage

### Basic Import
```typescript
import { personalityMapping, getPersonalityByName } from './personality-mapping';
```

### Get All Personalities
```typescript
const allPersonalities = personalityMapping;
```

### Get Specific Personality
```typescript
const cowboy = getPersonalityByName("The Altcoin Cowboy");
```

### Filter by Risk Level
```typescript
import { getPersonalitiesByRiskLevel } from './personality-mapping';

const highRiskProfiles = getPersonalitiesByRiskLevel('high');
const lowRiskProfiles = getPersonalitiesByRiskLevel('low');
```

### Filter by Novelty Appetite
```typescript
import { getPersonalitiesByNoveltyAppetite } from './personality-mapping';

const experimentalProfiles = getPersonalitiesByNoveltyAppetite('experimental');
const blueChipProfiles = getPersonalitiesByNoveltyAppetite('blue-chip');
```

### Filter by Holding Time
```typescript
import { getPersonalitiesByHoldingTime } from './personality-mapping';

const longTermProfiles = getPersonalitiesByHoldingTime('long-term');
const shortTermProfiles = getPersonalitiesByHoldingTime('short-term');
```

## React Component Usage

### Basic Table Display
```typescript
import PersonalityTable from './components/PersonalityTable';

function App() {
  return (
    <div>
      <PersonalityTable />
    </div>
  );
}
```

### With Selection Handler
```typescript
import PersonalityTable from './components/PersonalityTable';
import { PersonalityProfile } from './personality-mapping';

function App() {
  const handlePersonalitySelect = (personality: PersonalityProfile) => {
    console.log('Selected personality:', personality);
    // Handle the selection (e.g., navigate to trading interface)
  };

  return (
    <div>
      <PersonalityTable onPersonalitySelect={handlePersonalitySelect} />
    </div>
  );
}
```

## Demo Page

Visit `/demo` to see the personality mapping table in action with:
- Interactive filtering by risk level, appetite, and holding time
- Clickable rows to select personalities
- Detailed view of selected personality with token pairs and strategy
- Responsive design with Tailwind CSS styling

## Extending the System

### Adding New Personalities

1. Add a new entry to the `personalityMapping` array in `personality-mapping.ts`:

```typescript
{
  name: "The New Personality",
  riskLevel: "medium",
  noveltyAppetite: "experimental",
  holdingTime: "long-term",
  tokenPairs: ["NEW/ETH", "TOKEN/USDC"],
  strategy: "New Strategy Type",
  explanation: "Brief explanation of why this personality fits this profile."
}
```

### Adding New Filter Options

1. Extend the filter functions in `personality-mapping.ts`
2. Update the filter dropdowns in `PersonalityTable.tsx`
3. Add corresponding color schemes for new categories

### Customizing Token Pairs

Each personality includes 2-3 token pairs that represent:
- **Primary Pair**: The main trading pair for this personality
- **Secondary Pairs**: Alternative options that fit the same strategy
- **Risk-Adjusted Pairs**: Variations based on market conditions

## Integration with Trading Interface

To integrate with your trading interface:

1. **Onboarding Quiz**: Use the personality mapping to suggest profiles based on user responses
2. **Trading Dashboard**: Display recommended token pairs and strategies
3. **Risk Management**: Use risk levels to adjust position sizing
4. **Strategy Automation**: Implement automated trading based on personality preferences

## Data Structure

```typescript
interface PersonalityProfile {
  name: string;                    // Personality name
  riskLevel: 'low' | 'medium' | 'high';
  noveltyAppetite: 'blue-chip' | 'experimental';
  holdingTime: 'long-term' | 'short-term';
  tokenPairs: string[];           // Array of trading pairs
  strategy: string;               // Trading strategy name
  explanation: string;            // Why this fits the profile
}
```

## Styling

The component uses Tailwind CSS classes for styling:
- Risk levels: Green (low), Yellow (medium), Red (high)
- Appetite: Blue (blue-chip), Purple (experimental)
- Holding time: Indigo (long-term), Orange (short-term)

## Contributing

When adding new personalities or modifying existing ones:
1. Ensure token pairs are realistic and liquid
2. Provide clear, actionable explanations
3. Maintain balance across risk levels and strategies
4. Test with the demo page to ensure proper display 