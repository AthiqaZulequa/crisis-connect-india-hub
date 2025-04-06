
import React from 'react';
import { Cloud, CloudRain, Sun, Thermometer, Droplets, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export interface WeatherData {
  location: string;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  temperature: number;
  humidity: number;
  windSpeed: number;
  forecast: {
    day: string;
    condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
    highTemp: number;
    lowTemp: number;
  }[];
}

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-400" />;
      case 'stormy':
        return <CloudRain className="h-8 w-8 text-blue-600" />;
      default:
        return <Cloud className="h-8 w-8" />;
    }
  };

  const getWeatherIconSmall = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-5 w-5 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="h-5 w-5 text-blue-400" />;
      case 'stormy':
        return <CloudRain className="h-5 w-5 text-blue-600" />;
      default:
        return <Cloud className="h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-medium">{data.location}</h3>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {getWeatherIcon(data.condition)}
            <div className="ml-4">
              <div className="text-3xl font-semibold">{data.temperature}°C</div>
              <div className="text-sm text-muted-foreground capitalize">{data.condition}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Droplets className="h-4 w-4 mr-1 text-blue-400" />
              <span>Humidity: {data.humidity}%</span>
            </div>
            <div className="flex items-center text-sm">
              <Wind className="h-4 w-4 mr-1 text-blue-400" />
              <span>Wind: {data.windSpeed} km/h</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2 text-center">
          {data.forecast.map((day, index) => (
            <div key={index} className="py-2">
              <div className="text-xs text-muted-foreground mb-1">{day.day}</div>
              <div className="flex justify-center mb-1">
                {getWeatherIconSmall(day.condition)}
              </div>
              <div className="text-xs font-medium">{day.highTemp}°</div>
              <div className="text-xs text-muted-foreground">{day.lowTemp}°</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
