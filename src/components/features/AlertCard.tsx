
import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface AlertData {
  id: string;
  type: string;
  location: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  timestamp: number;
  recommendations?: string[];
}

interface AlertCardProps {
  alert: AlertData;
}

export function AlertCard({ alert }: AlertCardProps) {
  const severityColors = {
    high: 'bg-crisis-red text-white',
    medium: 'bg-crisis-orange text-white',
    low: 'bg-crisis-green text-white',
  };

  const timeAgo = (timestamp: number) => {
    const now = Date.now();
    const secondsAgo = Math.floor((now - timestamp) / 1000);
    
    if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
    if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} minutes ago`;
    if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} hours ago`;
    return `${Math.floor(secondsAgo / 86400)} days ago`;
  };

  return (
    <Card className={`border-l-4 ${alert.severity === 'high' ? 'animate-pulse-alert' : ''}`} 
          style={{ borderLeftColor: alert.severity === 'high' ? '#e53935' : 
                                  alert.severity === 'medium' ? '#fb8c00' : '#43a047' }}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className={`h-5 w-5 ${alert.severity === 'high' ? 'text-crisis-red' : 
                                                  alert.severity === 'medium' ? 'text-crisis-orange' : 
                                                  'text-crisis-green'}`} />
              <h3 className="font-semibold">{alert.type}</h3>
              <Badge className={severityColors[alert.severity]}>
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{alert.location}</p>
            <p className="text-sm">{alert.description}</p>
            
            {alert.recommendations && alert.recommendations.length > 0 && (
              <div className="mt-3">
                <h4 className="text-sm font-medium mb-1">Safety Recommendations:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  {alert.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-2 bg-secondary/30 flex justify-between items-center">
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          {timeAgo(alert.timestamp)}
        </div>
      </CardFooter>
    </Card>
  );
}
