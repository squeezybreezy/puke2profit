import React, { useState } from 'react';
import { Eye, Heart, MessageSquare, DollarSign, TrendingUp, Edit } from 'lucide-react';

const activeListings = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'iPhone 14 Pro Max 256GB Space Black',
    platforms: {
      ebay: {
        price: '$899',
        views: 156,
        watchers: 23,
        messages: 5,
        status: 'active',
        daysListed: 3
      },
      facebook: {
        price: '$879',
        views: 89,
        saves: 12,
        messages: 8,
        status: 'active',
        daysListed: 3
      }
    },
    category: 'Electronics',
    profit: '$350',
    profitMargin: '38%'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'MacBook Air M2 13-inch 256GB Silver',
    platforms: {
      ebay: {
        price: '$1299',
        views: 234,
        watchers: 45,
        messages: 12,
        status: 'active',
        daysListed: 5
      },
      facebook: {
        price: '$1250',
        views: 167,
        saves: 28,
        messages: 15,
        status: 'active',
        daysListed: 5
      }
    },
    category: 'Computers',
    profit: '$450',
    profitMargin: '35%'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'AirPods Pro 2nd Generation',
    platforms: {
      ebay: {
        price: '$199',
        views: 89,
        watchers: 15,
        messages: 3,
        status: 'sold',
        daysListed: 2
      },
      facebook: {
        price: '$189',
        views: 45,
        saves: 8,
        messages: 6,
        status: 'active',
        daysListed: 2
      }
    },
    category: 'Audio',
    profit: '$85',
    profitMargin: '43%'
  }
];

export const ActiveListings: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'ebay' | 'facebook'>('all');
  const [sortBy, setSortBy] = useState('views');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900';
      case 'sold':
        return 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900';
      case 'pending':
        return 'text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900';
      default:
        return 'text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-900';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Active Listings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor your live eBay and Facebook Marketplace listings
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Platforms</option>
            <option value="ebay">eBay Only</option>
            <option value="facebook">Facebook Only</option>
          </select>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="views">Sort by Views</option>
            <option value="profit">Sort by Profit</option>
            <option value="days">Sort by Days Listed</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Eye className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1,234</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$15,680</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Heart className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Watchers/Saves</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">342</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
              <TrendingUp className="text-emerald-600 dark:text-emerald-400" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Profit</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">37%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Current Listings
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          {activeListings.map((listing) => (
            <div key={listing.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {listing.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {listing.category} • Profit: {listing.profit} ({listing.profitMargin})
                    </p>
                    
                    {/* Platform Comparison */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* eBay */}
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">🛒</span>
                            <span className="font-medium text-gray-900 dark:text-white">eBay</span>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(listing.platforms.ebay.status)}`}>
                            {listing.platforms.ebay.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-3 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                              {listing.platforms.ebay.price}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Price</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {listing.platforms.ebay.views}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Views</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {listing.platforms.ebay.watchers}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Watchers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {listing.platforms.ebay.messages}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Messages</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Facebook */}
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">📘</span>
                            <span className="font-medium text-gray-900 dark:text-white">Facebook</span>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(listing.platforms.facebook.status)}`}>
                            {listing.platforms.facebook.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-3 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                              {listing.platforms.facebook.price}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Price</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {listing.platforms.facebook.views}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Views</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {listing.platforms.facebook.saves}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Saves</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {listing.platforms.facebook.messages}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Messages</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Edit size={20} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <MessageSquare size={20} />
                    </button>
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