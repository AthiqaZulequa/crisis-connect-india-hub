
import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Crisis Connect</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive disaster management platform for India.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/alerts" className="text-muted-foreground hover:text-foreground">
                  Disaster Alerts
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-foreground">
                  Resource Finder
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-muted-foreground hover:text-foreground">
                  AI Insights
                </Link>
              </li>
              <li>
                <Link to="/weather" className="text-muted-foreground hover:text-foreground">
                  Weather Updates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-muted-foreground hover:text-foreground">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Crisis Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
