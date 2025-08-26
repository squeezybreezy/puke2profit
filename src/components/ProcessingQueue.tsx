import React from 'react';
import { Clock, Loader, CheckCircle, AlertCircle } from 'lucide-react';

const queueItems = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'processing',
    product: 'iPhone 14 Pro',
    aiConfidence: 92,
    timeRemaining: '2 min'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'analyzing',
    product: 'MacBook Air',
    aiConfidence: 88,
    timeRemaining: '4 min'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'complete',
    product: 'AirPods Pro',
    aiConfidence: 96,
    timeRemaining: 'Done'
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'error',
    product: 'iPad Mini',
    aiConfidence: 45,
    timeRemaining: 'Failed'
  }
];

export const ProcessingQueue: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Loader className="animate-spin text-blue-500" size={16} />;
      case 'analyzing':
        return <Clock className="text-yellow-500" size={16} />;
      case 'complete':
        return <CheckCircle className="text-green-500" size={16} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={16} />;
      default:
        return <Clock className="text-gray-500" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900';
      case 'analyzing':
        return 'text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900';
      case 'complete':
        return 'text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900';
      case 'error':
        return 'text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900';
      default:
        return 'text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-900';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Processing Queue
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Items currently being analyzed by AI services
        </p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {queueItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <img 
                src={item.image} 
                alt={item.product}
                className="w-12 h-12 rounded-lg object-cover"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(item.status)}
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {item.product}
                  </h4>
                </div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    AI Confidence: {item.aiConfidence}%
                  </span>
                  <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                    <div 
                      className="bg-blue-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${item.aiConfidence}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {item.timeRemaining}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};