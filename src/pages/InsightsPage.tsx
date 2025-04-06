
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { AIInsightsCard } from '@/components/features/AIInsightsCard';
import { mockDisasterPredictions, mockSentimentData } from '@/services/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InsightsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <PageHeader 
            title="AI Insights" 
            description="Data-driven predictions and sentiment analysis about disasters"
          />
          
          <div className="mb-8">
            <AIInsightsCard 
              predictions={mockDisasterPredictions} 
              sentiment={mockSentimentData} 
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">How AI Helps in Disaster Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Early Warning Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI analyzes weather patterns, seismic activity, and historical data to predict potential disasters before they occur.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Resource Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using predictive analytics to determine where resources like medical supplies and food will be most needed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI scans social media to understand public sentiment during disasters, helping to address concerns and misinformation.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
            <p className="text-muted-foreground mb-6">
              Our AI insights are powered by data from multiple sources to ensure accuracy and reliability:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Weather data from Indian Meteorological Department</li>
              <li>Seismic data from National Centre for Seismology</li>
              <li>Historical disaster data from National Disaster Management Authority</li>
              <li>Social media feeds from Twitter, Facebook, and Instagram</li>
              <li>News reports from major Indian news outlets</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InsightsPage;
