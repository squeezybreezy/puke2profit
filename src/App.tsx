import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardOverview } from './pages/DashboardOverview';
import { ItemReviewQueue } from './pages/ItemReviewQueue';
import { ActiveListings } from './pages/ActiveListings';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { AlertsCenter } from './pages/AlertsCenter';
import { mockApi } from './services/mockApi';
import { DashboardProvider } from './contexts/DashboardContext';

type Page = 'dashboard' | 'queue' | 'listings' | 'analytics' | 'settings' | 'alerts';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Initialize mock API and start real-time updates
    mockApi.init();
    return () => mockApi.cleanup();
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'queue':
        return <ItemReviewQueue />;
      case 'listings':
        return <ActiveListings />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      case 'alerts':
        return <AlertsCenter />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardProvider>
      <div className={`${darkMode ? 'dark' : ''} h-screen flex bg-gray-50 dark:bg-gray-900`}>
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main className="flex-1 overflow-auto p-6">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}

export default App;