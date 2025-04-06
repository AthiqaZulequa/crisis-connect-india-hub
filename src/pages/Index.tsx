
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeatureCard } from '@/components/features/FeatureCard';
import { AlertCard } from '@/components/features/AlertCard';
import { WeatherCard } from '@/components/features/WeatherCard';
import { AIInsightsCard } from '@/components/features/AIInsightsCard';
import { mockAlerts, mockWeatherData, mockDisasterPredictions, mockSentimentData } from '@/services/mockData';
import { ShieldAlert, MapPin, Bell, Brain, Heart, Users, Zap } from 'lucide-react';

const Index = () => {
  // Only show the most recent high severity alert on homepage
  const highSeverityAlerts = mockAlerts.filter(alert => alert.severity === 'high');
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Crisis Connect
                </h1>
                <p className="text-xl mb-8 max-w-lg">
                  A comprehensive disaster management platform for India providing real-time alerts, 
                  resource tracking, and community support during emergencies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/report" className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-medium text-primary shadow transition-colors hover:bg-accent">
                    Report Incident
                  </a>
                  <a href="/resources" className="inline-flex items-center justify-center rounded-md border border-primary-foreground bg-transparent px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10">
                    Find Resources
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800" 
                    alt="Crisis Connect" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Alerts Section */}
        {highSeverityAlerts.length > 0 && (
          <section className="bg-accent">
            <div className="container py-4 md:py-6">
              <div className="flex items-center gap-2 text-sm text-destructive mb-2">
                <Zap className="h-4 w-4" />
                <span className="font-medium">HIGH SEVERITY ALERT</span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {highSeverityAlerts.slice(0, 1).map(alert => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Features Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Critical Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <FeatureCard 
                title="Disaster Alerts" 
                description="Get real-time alerts about disasters and emergencies in your area" 
                icon={<ShieldAlert className="h-6 w-6 text-crisis-red" />}
                to="/alerts"
                iconBgColor="bg-crisis-red/10"
              />
              <FeatureCard 
                title="Resource Finder" 
                description="Find nearby shelters, medical facilities, and food distribution centers" 
                icon={<MapPin className="h-6 w-6 text-crisis-green" />}
                to="/resources"
                iconBgColor="bg-crisis-green/10"
              />
              <FeatureCard 
                title="Incident Reporting" 
                description="Report incidents and emergencies to help others in your community" 
                icon={<Bell className="h-6 w-6 text-crisis-orange" />}
                to="/report"
                iconBgColor="bg-crisis-orange/10"
              />
              <FeatureCard 
                title="AI Insights" 
                description="View AI-driven predictions and analytics about potential disasters" 
                icon={<Brain className="h-6 w-6 text-crisis-purple" />}
                to="/insights"
                iconBgColor="bg-crisis-purple/10"
              />
              <FeatureCard 
                title="Donate" 
                description="Contribute to disaster relief efforts through secure donations" 
                icon={<Heart className="h-6 w-6 text-crisis-red" />}
                to="/donate"
                iconBgColor="bg-crisis-red/10"
              />
              <FeatureCard 
                title="Volunteer" 
                description="Sign up to volunteer your time and skills for disaster response" 
                icon={<Users className="h-6 w-6 text-crisis-blue" />}
                to="/volunteer"
                iconBgColor="bg-crisis-blue/10"
              />
            </div>
          </div>
        </section>
        
        {/* Information Dashboard */}
        <section className="py-12 bg-accent">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-crisis-blue/20 p-1.5 rounded mr-2 inline-flex">
                    <Brain className="h-5 w-5 text-crisis-blue" />
                  </span>
                  AI Insights
                </h2>
                <AIInsightsCard 
                  predictions={mockDisasterPredictions} 
                  sentiment={mockSentimentData} 
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-crisis-blue/20 p-1.5 rounded mr-2 inline-flex">
                    <ShieldAlert className="h-5 w-5 text-crisis-blue" />
                  </span>
                  Current Weather
                </h2>
                <WeatherCard data={mockWeatherData} />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
