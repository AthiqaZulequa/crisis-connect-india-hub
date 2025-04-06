
import React from 'react';
import { Brain, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export interface DisasterPrediction {
  disasterType: string;
  probability: number;
  area: string;
  riskFactors: string[];
}

interface SentimentData {
  positive: number;
  neutral: number;
  negative: number;
}

interface AIInsightsCardProps {
  predictions: DisasterPrediction[];
  sentiment: SentimentData;
}

export function AIInsightsCard({ predictions, sentiment }: AIInsightsCardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">
              Disaster Probability
            </CardTitle>
            <Brain className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          {predictions.map((prediction, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between mb-1">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{prediction.disasterType}</span>
                </div>
                <span className="text-sm font-medium">
                  {Math.round(prediction.probability * 100)}%
                </span>
              </div>
              <Progress value={prediction.probability * 100} className="h-2" />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>{prediction.area}</span>
              </div>
              <div className="mt-2">
                <div className="text-xs font-medium">Risk Factors:</div>
                <ul className="text-xs text-muted-foreground list-disc pl-5 mt-1">
                  {prediction.riskFactors.map((factor, idx) => (
                    <li key={idx}>{factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">
              Social Media Sentiment
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Positive</span>
                <span className="text-sm font-medium">{sentiment.positive}%</span>
              </div>
              <Progress value={sentiment.positive} className="h-2 bg-muted" 
                        indicatorClassName="bg-crisis-green" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Neutral</span>
                <span className="text-sm font-medium">{sentiment.neutral}%</span>
              </div>
              <Progress value={sentiment.neutral} className="h-2 bg-muted" 
                        indicatorClassName="bg-crisis-blue" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Negative</span>
                <span className="text-sm font-medium">{sentiment.negative}%</span>
              </div>
              <Progress value={sentiment.negative} className="h-2 bg-muted"
                        indicatorClassName="bg-crisis-red" />
            </div>
          </div>
          
          <div className="mt-6 p-3 bg-muted rounded-md">
            <h4 className="text-sm font-medium mb-2">Recent Topics:</h4>
            <div className="flex flex-wrap gap-2">
              {['#FloodRelief', '#StaySafe', '#EmergencyResponse', '#CommunitySupport', '#RescueEfforts'].map((topic) => (
                <div key={topic} className="bg-background text-xs px-2 py-1 rounded">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
