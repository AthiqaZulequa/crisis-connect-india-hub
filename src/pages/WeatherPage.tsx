
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { WeatherCard } from '@/components/features/WeatherCard';
import { mockWeatherData } from '@/services/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { toast } from 'sonner';

const WeatherPage = () => {
  const [location, setLocation] = React.useState('New Delhi, India');
  const [searchInput, setSearchInput] = React.useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setLocation(searchInput);
      toast.info(`Weather data updated for ${searchInput}`);
      setSearchInput('');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <PageHeader 
            title="Weather Updates" 
            description="Current weather conditions and forecasts for your area"
          />
          
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search location"
                  className="pl-10"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </form>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <WeatherCard data={mockWeatherData} />
            
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">Weather Safety Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">During Heavy Rainfall</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Stay indoors and away from windows</li>
                    <li>Avoid driving on flooded roads</li>
                    <li>Keep emergency supplies ready</li>
                    <li>Monitor local news for updates</li>
                  </ul>
                </div>
                <div className="bg-card p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">During Extreme Heat</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Stay hydrated and drink plenty of water</li>
                    <li>Avoid going out during peak sun hours</li>
                    <li>Wear light, loose-fitting clothing</li>
                    <li>Check on elderly neighbors and relatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WeatherPage;
