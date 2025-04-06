
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { AlertCard } from '@/components/features/AlertCard';
import { mockAlerts } from '@/services/mockData';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const AlertsPage = () => {
  const [filterSeverity, setFilterSeverity] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  
  const filteredAlerts = mockAlerts
    .filter(alert => filterSeverity === "all" || alert.severity === filterSeverity)
    .filter(alert => 
      alert.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <PageHeader 
            title="Disaster Alerts" 
            description="Stay informed with real-time updates on emergencies and disasters"
          />
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search alerts by location or type"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-48">
              <Select 
                defaultValue="all"
                onValueChange={setFilterSeverity}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="high">High Severity</SelectItem>
                  <SelectItem value="medium">Medium Severity</SelectItem>
                  <SelectItem value="low">Low Severity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map(alert => <AlertCard key={alert.id} alert={alert} />)
            ) : (
              <div className="bg-muted rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No Alerts Found</h3>
                <p className="text-muted-foreground">
                  There are no alerts matching your current filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AlertsPage;
