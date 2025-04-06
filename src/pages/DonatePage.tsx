
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DonationCard } from '@/components/features/DonationCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DonatePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <PageHeader 
            title="Donate" 
            description="Support disaster relief efforts with your contribution"
          />
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="donate">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="donate">Make a Donation</TabsTrigger>
                <TabsTrigger value="info">How Funds Are Used</TabsTrigger>
              </TabsList>
              
              <TabsContent value="donate" className="mt-0">
                <DonationCard />
              </TabsContent>
              
              <TabsContent value="info" className="mt-0">
                <div className="bg-card rounded-xl p-6 shadow-md">
                  <h2 className="text-xl font-bold mb-4">How Your Donations Help</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Emergency Relief</h3>
                      <p className="text-muted-foreground mb-2">
                        Your donations provide immediate assistance to disaster victims, including:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Emergency shelter and temporary housing</li>
                        <li>Food and clean drinking water</li>
                        <li>Medical supplies and first aid</li>
                        <li>Blankets, clothing, and personal hygiene items</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recovery Support</h3>
                      <p className="text-muted-foreground mb-2">
                        Beyond immediate relief, your donations help communities rebuild:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Reconstruction of damaged homes and infrastructure</li>
                        <li>Psychosocial support for trauma survivors</li>
                        <li>Restoring livelihoods and economic opportunities</li>
                        <li>Long-term community development initiatives</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Disaster Preparedness</h3>
                      <p className="text-muted-foreground mb-2">
                        A portion of donations funds prevention and preparedness:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Early warning systems in vulnerable communities</li>
                        <li>Training local emergency response teams</li>
                        <li>Education programs on disaster preparedness</li>
                        <li>Stockpiling emergency supplies in high-risk areas</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-accent rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Transparency Commitment</h3>
                    <p className="text-muted-foreground">
                      We are committed to transparency in how funds are utilized. Detailed reports on fund allocation are published quarterly and available to all donors upon request.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonatePage;
