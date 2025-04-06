
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export interface Resource {
  id: string;
  name: string;
  type: 'shelter' | 'medical' | 'food';
  location: string;
  distance: number; // in kilometers
  coordinates: { x: number; y: number }; // Simplified for demo, normally would be lat/lng
  status: 'available' | 'busy' | 'closed';
}

const MOCK_RESOURCES: Resource[] = [
  {
    id: 'shelter-1',
    name: 'Community Shelter',
    type: 'shelter',
    location: 'Nehru Nagar, Delhi',
    distance: 2.1,
    coordinates: { x: 30, y: 50 },
    status: 'available'
  },
  {
    id: 'medical-1',
    name: 'Medical Aid Center',
    type: 'medical',
    location: 'Gandhi Road, Delhi',
    distance: 3.5,
    coordinates: { x: 80, y: 40 },
    status: 'available'
  },
  {
    id: 'food-1',
    name: 'Food Distribution Point',
    type: 'food',
    location: 'Subhash Market, Delhi',
    distance: 4.9,
    coordinates: { x: 60, y: 80 },
    status: 'available'
  },
  {
    id: 'shelter-2',
    name: 'School Shelter',
    type: 'shelter',
    location: 'Rajiv Chowk, Delhi',
    distance: 5.2,
    coordinates: { x: 40, y: 70 },
    status: 'busy'
  },
  {
    id: 'medical-2',
    name: 'Emergency Hospital',
    type: 'medical',
    location: 'Civic Center, Delhi',
    distance: 6.3,
    coordinates: { x: 90, y: 20 },
    status: 'busy'
  }
];

export function ResourceMap() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const filteredResources = MOCK_RESOURCES.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = activeTab === 'all' || resource.type === activeTab;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'available': return 'bg-crisis-green text-white';
      case 'busy': return 'bg-crisis-orange text-white';
      case 'closed': return 'bg-crisis-red text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const getMarkerClass = (type: string) => {
    switch(type) {
      case 'shelter': return 'shelter';
      case 'medical': return 'medical';
      case 'food': return 'food';
      default: return '';
    }
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Search for resources or locations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={() => setSearchQuery('')}>Reset</Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="shelter">Shelters</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="relative map-container bg-gray-100 border-b">
        {/* This is a simple map representation with resource markers */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800')] bg-cover bg-center opacity-50"></div>
        
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className={`resource-marker ${getMarkerClass(resource.type)}`}
            style={{
              top: `${resource.coordinates.y}%`,
              left: `${resource.coordinates.x}%`
            }}
            title={resource.name}
          />
        ))}
      </div>
      
      <div className="px-2 py-3 bg-accent/30">
        <p className="text-xs text-center text-muted-foreground mb-2">Map shows approximate locations. Tap markers for details.</p>
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-crisis-green mr-1"></div>
            <span className="text-xs">Shelters</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-crisis-red mr-1"></div>
            <span className="text-xs">Medical</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-crisis-orange mr-1"></div>
            <span className="text-xs">Food</span>
          </div>
        </div>
      </div>
      
      <div className="divide-y">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="p-4 hover:bg-accent/50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{resource.name}</h3>
                <p className="text-sm text-muted-foreground">{resource.location}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-muted-foreground">{resource.distance} km away</span>
                </div>
              </div>
              <Badge className={getStatusColor(resource.status)}>
                {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
              </Badge>
            </div>
            <div className="mt-2 flex justify-end">
              <Button size="sm" variant="outline">Directions</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
