
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { ResourceMap } from '@/components/features/ResourceMap';

const ResourcesPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <PageHeader 
            title="Resource Finder" 
            description="Locate nearby shelters, medical facilities, and food distribution points"
          />
          
          <ResourceMap />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
