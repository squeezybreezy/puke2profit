import React, { useState } from 'react';
import { 
  Square, 
  Play, 
  RefreshCw, 
  Upload, 
  Settings, 
  Zap,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export const QuickActions: React.FC = () => {
  const [automationRunning, setAutomationRunning] = useState(true);
  const [loading, setLoading] = useState<string | null>(null);

  const handleAction = async (actionType: string) => {
    setLoading(actionType);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (actionType === 'stop' || actionType === 'start') {
      setAutomationRunning(!automationRunning);
    }
    
    setLoading(null);
  };

  const actions = [
    {
      id: 'emergency-stop',
      label: automationRunning ? 'Emergency Stop' : 'Start Automation',
      icon: automationRunning ? Square : Play,
      color: automationRunning ? 'red' : 'green',
      action: automationRunning ? 'stop' : 'start'
    },
    {
      id: 'manual-process',
      label: 'Manual Process',
      icon: Zap,
      color: 'blue',
      action: 'process'
    },
    {
      id: 'refresh-data',
      label: 'Refresh Data',
      icon: RefreshCw,
      color: 'purple',
      action: 'refresh'
    },
    {
      id: 'upload-photos',
      label: 'Upload Photos',
      icon: Upload,
      color: 'emerald',
      action: 'upload'
    }
  ];

  const getColorClasses = (color: string) => {
    const classes = {
      red: 'bg-red-500 hover:bg-red-600 text-white',
      green: 'bg-green-500 hover:bg-green-600 text-white',
      blue: 'bg-blue-500 hover:bg-blue-600 text-white',
      purple: 'bg-purple-500 hover:bg-purple-600 text-white',
      emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white'
    };
    return classes[color as keyof typeof classes];
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Actions
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Control your automation workflow
          </p>
        </div>
        
        <div className="p-6 space-y-3">
          {actions.map((action) => {
            const Icon = action.icon;
            const isLoading = loading === action.action;
            
            return (
              <button
                key={action.id}
                onClick={() => handleAction(action.action)}
                disabled={isLoading}
                className={`
                  w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg
                  font-medium text-sm transition-colors disabled:opacity-50
                  ${getColorClasses(action.color)}
                `}
              >
                {isLoading ? (
                  <RefreshCw className="animate-spin" size={16} />
                ) : (
                  <Icon size={16} />
                )}
                <span>{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            System Status
          </h3>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-sm text-gray-700 dark:text-gray-300">n8n Workflow</span>
            </div>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Connected</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-sm text-gray-700 dark:text-gray-300">eBay API</span>
            </div>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-sm text-gray-700 dark:text-gray-300">Facebook API</span>
            </div>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="text-yellow-500" size={16} />
              <span className="text-sm text-gray-700 dark:text-gray-300">Claude API</span>
            </div>
            <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">Rate Limited</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-sm text-gray-700 dark:text-gray-300">Gemini Pro</span>
            </div>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};