
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Home, ShieldAlert, MapPin, Brain, Cloud, Heart, Users, LogIn, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 mt-4">
      <Link to="/" className="flex items-center py-2 text-lg font-semibold">
        <Home className="mr-2 h-5 w-5" />
        Home
      </Link>
      <Link to="/alerts" className="flex items-center py-2">
        <ShieldAlert className="mr-2 h-5 w-5" />
        Disaster Alerts
      </Link>
      <Link to="/report" className="flex items-center py-2">
        <Bell className="mr-2 h-5 w-5" />
        Report Incident
      </Link>
      <Link to="/resources" className="flex items-center py-2">
        <MapPin className="mr-2 h-5 w-5" />
        Resource Finder
      </Link>
      <Link to="/insights" className="flex items-center py-2">
        <Brain className="mr-2 h-5 w-5" />
        AI Insights
      </Link>
      <Link to="/weather" className="flex items-center py-2">
        <Cloud className="mr-2 h-5 w-5" />
        Weather
      </Link>
      <Link to="/donate" className="flex items-center py-2">
        <Heart className="mr-2 h-5 w-5" />
        Donate
      </Link>
      <Link to="/volunteer" className="flex items-center py-2">
        <Users className="mr-2 h-5 w-5" />
        Volunteer
      </Link>
      <div className="flex flex-col space-y-2 mt-4 pt-4 border-t">
        <Button variant="outline" asChild>
          <Link to="/login" className="flex items-center justify-center">
            <LogIn className="mr-2 h-5 w-5" />
            Login
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/settings" className="flex items-center justify-center">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  );
}
