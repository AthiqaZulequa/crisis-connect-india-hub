
import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 text-center py-12">
          <div className="bg-muted p-3 rounded-full mb-2">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-md">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex gap-4">
            <Button variant="default" asChild>
              <a href="/">Return to Home</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/alerts">View Alerts</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
