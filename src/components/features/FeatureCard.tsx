
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  iconBgColor?: string;
}

export function FeatureCard({ title, description, icon, to, iconBgColor = 'bg-primary/10' }: FeatureCardProps) {
  return (
    <Link to={to} className="block">
      <div className="feature-card h-full flex flex-col bg-card">
        <div className="flex items-start">
          <div className={`p-3 rounded-lg ${iconBgColor} mr-4`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-primary pt-2">
          <span>Access now</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
