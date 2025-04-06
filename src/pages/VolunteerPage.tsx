
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { VolunteerForm } from '@/components/features/VolunteerForm';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VolunteerPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <PageHeader 
            title="Volunteer" 
            description="Join our network of volunteers to help during disasters"
          />
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="signup">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signup">Sign Up to Volunteer</TabsTrigger>
                <TabsTrigger value="info">Volunteer Information</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signup" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <VolunteerForm />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="info" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold mb-4">Volunteer Opportunities</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Emergency Response Team</h3>
                        <p className="text-muted-foreground mb-2">
                          Join first responders who are quickly deployed to disaster areas.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Search and rescue operations</li>
                          <li>First aid and medical assistance</li>
                          <li>Setting up emergency shelters</li>
                          <li>Evacuation assistance</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Logistics and Supply Management</h3>
                        <p className="text-muted-foreground mb-2">
                          Help ensure efficient distribution of resources during emergencies.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Inventory management of relief supplies</li>
                          <li>Organizing transportation of goods</li>
                          <li>Setting up distribution centers</li>
                          <li>Coordinating delivery routes</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Community Outreach</h3>
                        <p className="text-muted-foreground mb-2">
                          Support vulnerable community members before, during, and after disasters.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Awareness campaigns on disaster preparedness</li>
                          <li>Check-ins with elderly and disabled individuals</li>
                          <li>Translation services for non-native speakers</li>
                          <li>Psychosocial support and counseling</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-accent rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Training Provided</h3>
                      <p className="text-muted-foreground">
                        All volunteers receive comprehensive training appropriate to their roles. Training includes basic disaster response, first aid, communication protocols, and specialized skills relevant to specific disaster types common in India.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VolunteerPage;
