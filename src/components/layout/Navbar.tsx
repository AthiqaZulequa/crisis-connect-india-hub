
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MobileNav } from './MobileNav';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Crisis Connect</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:space-x-4">
          <nav className="flex items-center space-x-4">
            <Link to="/alerts" className="text-sm font-medium transition-colors hover:text-primary">
              Alerts
            </Link>
            <Link to="/report" className="text-sm font-medium transition-colors hover:text-primary">
              Report Incident
            </Link>
            <Link to="/resources" className="text-sm font-medium transition-colors hover:text-primary">
              Find Resources
            </Link>
            <Link to="/insights" className="text-sm font-medium transition-colors hover:text-primary">
              AI Insights
            </Link>
            <Link to="/weather" className="text-sm font-medium transition-colors hover:text-primary">
              Weather
            </Link>
            <Link to="/donate" className="text-sm font-medium transition-colors hover:text-primary">
              Donate
            </Link>
            <Link to="/volunteer" className="text-sm font-medium transition-colors hover:text-primary">
              Volunteer
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-crisis-red animate-pulse-alert" />
            </Button>
            <Button variant="default" asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
        <div className="flex md:hidden flex-1 items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
