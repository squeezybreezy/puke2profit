import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Filter,
  MoreHorizontal
} from 'lucide-react';

const alerts = [
  {
    id: '1',
    type: 'error',
    title: 'Claude API Rate Limit Exceeded',
    description: 'API requests exceeded rate limit. Switching to backup AI service.',
    timestamp: '2024-01-15T10:45:00Z',
    status: 'active',
    priority: 'high',
    category: 'api'
  },
  {
    id: '2',
    type: 'warning',
    title: 'Low Confidence Item Detected',
    description: 'iPhone 15 Pro analysis returned only 65% confidence. Manual review required.',
    timestamp: '2024-01-15T10:30:00Z',
    status: 'active',
    priority: 'medium',
    category: 'processing'
  },
  {
    id: '3',
    type: 'success',
    title: 'Batch Processing Completed',
    description: '25 items successfully processed and listed across both platforms.',
    timestamp: '2024-01-15T10:15:00Z',
    status: 'resolved',
    priority: 'low',
    category: 'processing'
  },
  {
    id: '4',
    type: 'error',
    title: 'eBay Listing Failed',
    description: 'Failed to create listing for MacBook Air. API returned error 403.',
    timestamp: '2024-01-15T09:45:00Z',
    status: 'active',
    priority: 'high',
    category: 'listing'
  },
  {
    id: '5',
    type: 'info',
    title: 'Price Alert',
    description: 'iPhone 14 Pro market price dropped by 5%. Consider adjusting pricing.',
    timestamp: '2024-01-15T09:30:00Z',
    status: 'active',
    priority: 'low',
    category: 'pricing'
  }
];

export const AlertsCenter: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <XCircle className="text-red-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-500" size={20} />;
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'info':
        return <Clock className="text-blue-500" size={20} />;
      default:
        return <AlertTriangle className="text-gray-500" size={20} />;
    }
  };

  const getAlertColor = (type: string, priority: string) => {
    if (priority === 'high') {
      return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
    }
    if (priority === 'medium') {
      return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
    }
    switch (type) {
      case 'error':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'success':
        return 'border-l-green-500 bg-green-50 dark:bg-green-900/20';
      case 'info':
        return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default:
        return 'border-l-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      low: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    return colors[priority as keyof typeof colors];
  };

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diffMinutes = Math.floor((now.getTime() - alertTime.getTime()) / (1000 * 60));
    
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`;
    return `${Math.floor(diffMinutes / 1440)}d ago`;
  };

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'all') return true;
    if (filter === 'active') return alert.status === 'active';
    if (filter === 'resolved') return alert.status === 'resolved';
    return alert.type === filter;
  });

  const activeAlerts = alerts.filter(alert => alert.status === 'active');
  const highPriorityAlerts = alerts.filter(alert => alert.priority === 'high' && alert.status === 'active');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Alerts Center
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor system alerts and notifications
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          {selectedAlerts.length > 0 && (
            <>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Mark Resolved ({selectedAlerts.length})
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Dismiss Selected
              </button>
            </>
          )}
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
              <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{activeAlerts.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <XCircle className="text-orange-600 dark:text-orange-400" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">High Priority</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{highPriorityAlerts.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Resolved Today</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center space-x-4">
          <Filter size={20} className="text-gray-400" />
          <div className="flex space-x-2">
            {[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'error', label: 'Errors' },
              { value: 'warning', label: 'Warnings' },
              { value: 'resolved', label: 'Resolved' }
            ].map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  filter === filterOption.value
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Alerts ({filteredAlerts.length})
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-6 border-l-4 ${getAlertColor(alert.type, alert.priority)} ${
                alert.status === 'resolved' ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <input
                  type="checkbox"
                  checked={selectedAlerts.includes(alert.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedAlerts(prev => [...prev, alert.id]);
                    } else {
                      setSelectedAlerts(prev => prev.filter(id => id !== alert.id));
                    }
                  }}
                  className="mt-1 w-4 h-4 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500"
                />
                
                <div className="flex-shrink-0 pt-1">
                  {getAlertIcon(alert.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {alert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {alert.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(alert.priority)}`}>
                          {alert.priority} priority
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {alert.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {getTimeAgo(alert.timestamp)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {alert.status === 'active' && (
                        <button className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700">
                          Resolve
                        </button>
                      )}
                      <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};