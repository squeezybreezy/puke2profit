import React, { useState } from 'react';
import { Search, Filter, Check, X, Edit, MoreHorizontal } from 'lucide-react';

const pendingItems = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
    product: 'iPhone 14 Pro Max',
    category: 'Electronics',
    aiAnalysis: {
      claude: { confidence: 94, price: '$899', condition: 'Excellent' },
      gemini: { confidence: 92, price: '$879', condition: 'Very Good' },
      chatgpt: { confidence: 96, price: '$920', condition: 'Excellent' }
    },
    consensus: {
      confidence: 94,
      suggestedPrice: '$899',
      condition: 'Excellent',
      category: 'Cell Phones & Smartphones'
    },
    timestamp: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300',
    product: 'MacBook Air M2',
    category: 'Computers',
    aiAnalysis: {
      claude: { confidence: 89, price: '$1299', condition: 'Good' },
      gemini: { confidence: 91, price: '$1350', condition: 'Very Good' },
      chatgpt: { confidence: 88, price: '$1280', condition: 'Good' }
    },
    consensus: {
      confidence: 89,
      suggestedPrice: '$1310',
      condition: 'Very Good',
      category: 'Laptops & Netbooks'
    },
    timestamp: '2024-01-15T10:25:00Z'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
    product: 'AirPods Pro 2nd Gen',
    category: 'Audio',
    aiAnalysis: {
      claude: { confidence: 97, price: '$199', condition: 'Excellent' },
      gemini: { confidence: 95, price: '$189', condition: 'Excellent' },
      chatgpt: { confidence: 98, price: '$205', condition: 'Like New' }
    },
    consensus: {
      confidence: 97,
      suggestedPrice: '$198',
      condition: 'Excellent',
      category: 'Headphones'
    },
    timestamp: '2024-01-15T10:20:00Z'
  }
];

export const ItemReviewQueue: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('confidence');

  const handleSelectItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === pendingItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(pendingItems.map(item => item.id));
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
    if (confidence >= 80) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
    return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Item Review Queue
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Review AI-analyzed items before listing
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Approve Selected ({selectedItems.length})
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Reject Selected
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search items..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <select 
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Items</option>
              <option value="high-confidence">High Confidence (90%+)</option>
              <option value="needs-review">Needs Review (&lt;80%)</option>
              <option value="electronics">Electronics</option>
              <option value="computers">Computers</option>
            </select>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="confidence">Sort by Confidence</option>
              <option value="price">Sort by Price</option>
              <option value="timestamp">Sort by Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {pendingItems.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.product}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                  className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConfidenceColor(item.consensus.confidence)}`}>
                  {item.consensus.confidence}% confidence
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.product}
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Suggested Price:</span>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {item.consensus.suggestedPrice}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Condition:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.consensus.condition}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Category:</span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {item.consensus.category}
                  </span>
                </div>
              </div>
              
              {/* AI Analysis Comparison */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  AI Analysis Comparison
                </h4>
                <div className="space-y-2">
                  {Object.entries(item.aiAnalysis).map(([ai, analysis]) => (
                    <div key={ai} className="flex items-center justify-between text-xs">
                      <span className="capitalize text-gray-600 dark:text-gray-400">{ai}:</span>
                      <div className="flex items-center space-x-2">
                        <span className={`px-1.5 py-0.5 rounded ${getConfidenceColor(analysis.confidence)}`}>
                          {analysis.confidence}%
                        </span>
                        <span className="text-gray-900 dark:text-white">{analysis.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Check size={16} />
                  <span>Approve</span>
                </button>
                <button className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Edit size={16} />
                </button>
                <button className="flex items-center justify-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};