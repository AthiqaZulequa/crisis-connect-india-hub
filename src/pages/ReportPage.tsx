
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { IncidentForm } from '@/components/features/IncidentForm';

const ReportPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <PageHeader 
            title="Report an Incident" 
            description="Help your community by reporting emergencies and incidents"
          />
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-md">
              <IncidentForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReportPage;
