'use client';

import { useState, useEffect } from 'react';

const tokens = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'DAI', name: 'Dai Stablecoin' },
  { symbol: 'PSY', name: 'PsychSwap Token' },
] as const;

const fakeRates = {
  'ETH-USDC': 3000,
  'USDC-ETH': 1 / 3000,
  'ETH-DAI': 2950,
  'DAI-ETH': 1 / 2950,
  'USDC-DAI': 1,
  'DAI-USDC': 1,
  'ETH-PSY': 10000,
  'PSY-ETH': 1 / 10000,
  'PSY-USDC': 0.3,
  'USDC-PSY': 3.33,
  'DAI-PSY': 0.32,
  'PSY-DAI': 3.125,
} as const;

type TokenSymbol = typeof tokens[number]['symbol'];
type RateKey = keyof typeof fakeRates;

export default function SwapPage() {
  const [fromToken, setFromToken] = useState<TokenSymbol>('ETH');
  const [toToken, setToToken] = useState<TokenSymbol>('USDC');
  const [amount, setAmount] = useState('');
  const [outputAmount, setOutputAmount] = useState('0');

  useEffect(() => {
    if (!amount || isNaN(Number(amount))) {
      setOutputAmount('0');
      return;
    }

    const rateKey = `${fromToken}-${toToken}` as RateKey;
    const rate = fakeRates[rateKey] ?? 0;

    setOutputAmount((Number(amount) * rate).toFixed(4));
  }, [fromToken, toToken, amount]);

  const handleSwap = () => {
    alert(`Swapped ${amount} ${fromToken} to ${outputAmount} ${toToken} 🎉`);
    setAmount('');
    setOutputAmount('0');
  };

  const otherTokens = tokens.filter(t => t.symbol !== fromToken);

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-8 text-center">🔄 PsychSwap</h1>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        {/* From Token */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <select
            value={fromToken}
            onChange={e => {
              const newToken = e.target.value as TokenSymbol;
              setFromToken(newToken);
              if (newToken === toToken) {
                setToToken(tokens.find(t => t.symbol !== newToken)?.symbol ?? 'USDC');
              }
            }}
            className="w-full border rounded-lg px-4 py-2"
          >
            {tokens.map(token => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol} – {token.name}
              </option>
            ))}
          </select>
        </div>

        {/* To Token */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <select
            value={toToken}
            onChange={e => setToToken(e.target.value as TokenSymbol)}
            className="w-full border rounded-lg px-4 py-2"
          >
            {otherTokens.map(token => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol} – {token.name}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
            placeholder={`Amount in ${fromToken}`}
          />
        </div>

        {/* Output */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">You’ll receive</label>
          <input
            type="text"
            readOnly
            value={`${outputAmount} ${toToken}`}
            className="w-full border bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
          />
        </div>

        {/* Swap Button */}
        <button
          disabled={!amount || parseFloat(outputAmount) === 0}
          onClick={handleSwap}
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition disabled:opacity-50"
        >
          Swap Now
        </button>
      </div>
    </div>
  );
}