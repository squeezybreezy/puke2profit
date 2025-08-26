import React, { createContext, useContext, useState, useEffect } from 'react';

interface DashboardData {
  stats: {
    itemsProcessed: number;
    successRate: number;
    avgProcessingTime: string;
    revenue: string;
  };
  queue: any[];
  alerts: any[];
  listings: any[];
}

interface DashboardContextType {
  data: DashboardData;
  isLoading: boolean;
  error: string | null;
  refreshData: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DashboardData>({
    stats: {
      itemsProcessed: 247,
      successRate: 94.2,
      avgProcessingTime: '3.4min',
      revenue: '$2,847'
    },
    queue: [],
    alerts: [],
    listings: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update with mock data
      setData(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          itemsProcessed: prev.stats.itemsProcessed + Math.floor(Math.random() * 5),
        }
      }));
      
      setError(null);
    } catch (err) {
      setError('Failed to refresh data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          itemsProcessed: prev.stats.itemsProcessed + Math.floor(Math.random() * 2),
        }
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardContext.Provider value={{ data, isLoading, error, refreshData }}>
      {children}
    </DashboardContext.Provider>
  );
};