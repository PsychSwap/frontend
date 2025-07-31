import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header - Minimal and Action-Oriented */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PsychSwap</span>
          </div>
          <Link 
            href="/quiz"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
          >
            Take the Quiz
          </Link>
        </div>
      </header>

      {/* Hero Section - Single Scroll, Clear CTA */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Swap like your
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> personality</span>
              <br />
              depends on it.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A DeFi experience that adapts to you. Discover your strategy.
            </p>
            
            <Link 
              href="/quiz"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* How It Works - 3 Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Take a quick personality test</h3>
              <p className="text-gray-600">Answer a few questions about your trading style</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get your DeFi type & strategy</h3>
              <p className="text-gray-600">Discover your trading personality and recommendations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Swap tokens via 1inch</h3>
              <p className="text-gray-600">Personalized for your vibe</p>
            </div>
          </div>

          {/* Personality Preview - Quick Glance */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Trading Personalities</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">CS</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Chill Strategist</h3>
                <p className="text-sm text-gray-600">Stable LP farming, low risk</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Altcoin Cowboy</h3>
                <p className="text-sm text-gray-600">Meme coins, high volatility</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">DD</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">DeFi Deacon</h3>
                <p className="text-sm text-gray-600">Protocol tokens, research-driven</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Link 
                href="/demo"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                View all 12 personalities →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Minimal */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">PS</span>
              </div>
              <span className="text-sm text-gray-600">PsychSwap</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/demo" className="hover:text-gray-700 transition-colors">Demo</Link>
              <Link href="/quiz" className="hover:text-gray-700 transition-colors">Quiz</Link>
              <a href="#" className="hover:text-gray-700 transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              © 2024 PsychSwap. DeFi with personality.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
