import React from 'react';
import { 
  LayoutDashboard, 
  ImageIcon, 
  Package, 
  BarChart3, 
  Settings, 
  AlertTriangle,
  ChevronLeft,
  Store
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: any) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'queue', label: 'Review Queue', icon: ImageIcon },
  { id: 'listings', label: 'Active Listings', icon: Package },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  isOpen, 
  onToggle 
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 
        border-r border-gray-200 dark:border-gray-700 transform transition-transform 
        duration-300 ease-in-out lg:translate-x-0
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              AutoSeller
            </span>
          </div>
          <button 
            onClick={onToggle}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-500"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      if (window.innerWidth < 1024) onToggle();
                    }}
                    className={`
                      w-full flex items-center px-3 py-2 text-sm font-medium rounded-md
                      transition-colors duration-150 ease-in-out
                      ${isActive 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    <Icon size={20} className="mr-3" />
                    {item.label}
                    {item.id === 'alerts' && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                        3
                      </span>
                    )}
                    {item.id === 'queue' && (
                      <span className="ml-auto bg-yellow-500 text-white text-xs rounded-full px-2 py-1">
                        12
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <div>API Status: <span className="text-green-500">All Connected</span></div>
            <div>Last Sync: 2 minutes ago</div>
          </div>
        </div>
      </div>
    </>
  );
};