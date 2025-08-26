import React from 'react';
import { TrendingUp, TrendingDown, Eye, Heart } from 'lucide-react';

export const PlatformComparison: React.FC = () => {
  const platforms = [
    {
      name: 'eBay',
      logo: '🛒',
      stats: {
        activeListings: 145,
        totalViews: 3420,
        watchers: 89,
        avgPrice: '$342',
        conversionRate: '12.4%',
        trend: 'up'
      },
      color: 'blue'
    },
    {
      name: 'Facebook Marketplace',
      logo: '📘',
      stats: {
        activeListings: 98,
        totalViews: 2150,
        watchers: 156,
        avgPrice: '$298',
        conversionRate: '18.7%',
        trend: 'up'
      },
      color: 'indigo'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Platform Performance
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Compare eBay vs Facebook Marketplace metrics
        </p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 gap-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{platform.logo}</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {platform.name}
                  </h4>
                </div>
                <div className="flex items-center space-x-1">
                  {platform.stats.trend === 'up' ? (
                    <TrendingUp className="text-green-500" size={16} />
                  ) : (
                    <TrendingDown className="text-red-500" size={16} />
                  )}
                  <span className={`text-sm font-medium ${
                    platform.stats.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {platform.stats.conversionRate}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.stats.activeListings}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Active Listings
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.stats.totalViews.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Total Views
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.stats.watchers}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Watchers/Saves
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.stats.avgPrice}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Avg Price
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