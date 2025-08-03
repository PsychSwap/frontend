"use client";

import { useSearchParams } from "next/navigation";
import { mbtiToArchetype } from "../../data/personalityMap";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Clock,
  Zap,
  Target,
  Coins,
  BarChart3,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

export default function QuizResultsPage() {
  const searchParams = useSearchParams();
  const mbti = searchParams.get("mbti")?.toUpperCase();
  const [result, setResult] = useState<
    (typeof mbtiToArchetype)[keyof typeof mbtiToArchetype] | null
  >(null);

  useEffect(() => {
    if (mbti && mbtiToArchetype[mbti]) {
      setResult(mbtiToArchetype[mbti]);
    }
  }, [mbti]);

  if (!mbti || !result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center text-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Oops! Invalid or missing MBTI type.
          </h1>
          <p className="text-gray-600 mb-6">
            It looks like there was an issue with your quiz results. Let's get
            you back on track!
          </p>
          <Link href="/quiz/start">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Take the Quiz
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getRiskLevelColor = (riskLevel: string) => {
    if (riskLevel.toLowerCase().includes("high"))
      return "bg-red-100 text-red-800 border-red-200";
    if (riskLevel.toLowerCase().includes("medium"))
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-green-100 text-green-800 border-green-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <Badge
              variant="secondary"
              className="mb-4 text-sm font-medium px-4 py-2"
            >
              {mbti} Personality Type
            </Badge>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 scale-110"></div>
            <div className="relative bg-white rounded-full p-4 shadow-xl">
              <Image
                src={result.imagePath || "/placeholder.svg"}
                width={300}
                height={300}
                alt={result.name}
                className="rounded-full"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {result.name}
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {result.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Risk Level</h3>
              </div>
              <Badge
                className={`${getRiskLevelColor(result.riskLevel)} border`}
              >
                {result.riskLevel}
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Novelty Appetite
                </h3>
              </div>
              <p className="text-gray-700 font-medium">
                {result.noveltyAppetite}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Holding Time</h3>
              </div>
              <p className="text-gray-700 font-medium">{result.holdingTime}</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Token Pairs */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Coins className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Favorite Token Pairs
                </h2>
              </div>
              <div className="space-y-3">
                {result.tokenPairs.map((pair, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800">{pair}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strategy */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Strategy
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {result.strategy}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/swap" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Start Swapping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/quiz/start" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 bg-transparent cursor-pointer"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Retake Quiz
            </Button>
          </Link>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Your personality type helps guide your trading decisions. Remember
            to always do your own research!
          </p>
        </div>
      </div>
    </div>
  );
}
