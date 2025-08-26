import React from 'react';
import { CheckCircle, XCircle, Clock, DollarSign } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'success',
    title: 'iPhone 14 Pro listed on eBay',
    description: 'AI confidence: 96% • Price: $899',
    time: '2 minutes ago',
    icon: CheckCircle,
    color: 'green'
  },
  {
    id: 2,
    type: 'sale',
    title: 'MacBook Air sold on Facebook',
    description: 'Sold for $1,250 • Profit: $350',
    time: '15 minutes ago',
    icon: DollarSign,
    color: 'emerald'
  },
  {
    id: 3,
    type: 'processing',
    title: 'Analyzing new batch of photos',
    description: '8 items • Estimated completion: 12 minutes',
    time: '23 minutes ago',
    icon: Clock,
    color: 'blue'
  },
  {
    id: 4,
    type: 'error',
    title: 'Failed to process iPad image',
    description: 'Low image quality • Manual review required',
    time: '45 minutes ago',
    icon: XCircle,
    color: 'red'
  },
  {
    id: 5,
    type: 'success',
    title: 'AirPods Pro listed on both platforms',
    description: 'eBay: $199 • Facebook: $189',
    time: '1 hour ago',
    icon: CheckCircle,
    color: 'green'
  }
];

export const ActivityFeed: React.FC = () => {
  const getIconColor = (color: string) => {
    const colors = {
      green: 'text-green-500',
      red: 'text-red-500',
      blue: 'text-blue-500',
      emerald: 'text-emerald-500',
      yellow: 'text-yellow-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Latest 20 automation events
        </p>
      </div>
      
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span 
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600" 
                      aria-hidden="true" 
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-800 bg-gray-100 dark:bg-gray-700`}>
                        <activity.icon className={`h-4 w-4 ${getIconColor(activity.color)}`} />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {activity.description}
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};