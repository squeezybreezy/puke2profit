import React from 'react';
import { TrendingUp, Brain, Clock, DollarSign } from 'lucide-react';

export const Analytics: React.FC = () => {
  const aiPerformanceData = [
    { ai: 'Claude', accuracy: 94, avgTime: '2.3s', cost: '$12.45', requests: 1247 },
    { ai: 'Gemini Pro', accuracy: 91, avgTime: '1.8s', cost: '$8.90', requests: 1189 },
    { ai: 'ChatGPT', accuracy: 96, avgTime: '3.1s', cost: '$15.60', requests: 1205 }
  ];

  const categoryPerformance = [
    { category: 'Electronics', items: 145, avgConfidence: 93, revenue: '$45,670' },
    { category: 'Computers', items: 89, avgConfidence: 89, revenue: '$67,890' },
    { category: 'Audio', items: 156, avgConfidence: 95, revenue: '$23,450' },
    { category: 'Gaming', items: 78, avgConfidence: 91, revenue: '$34,560' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            AI performance metrics and business insights
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* AI Performance Comparison */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <Brain className="mr-2" size={20} />
            AI Service Performance
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Compare accuracy, speed, and cost across AI services
          </p>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <th className="text-left py-3 text-sm font-medium text-gray-600 dark:text-gray-400">AI Service</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Accuracy</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Avg Time</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Cost</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Requests</th>
                </tr>
              </thead>
              <tbody>
                {aiPerformanceData.map((ai) => (
                  <tr key={ai.ai} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                    <td className="py-4">
                      <div className="font-medium text-gray-900 dark:text-white">{ai.ai}</div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{ai.accuracy}%</div>
                        <div className="ml-2 w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${ai.accuracy}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">{ai.avgTime}</span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">{ai.cost}</span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">{ai.requests.toLocaleString()}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <TrendingUp className="mr-2" size={20} />
              Category Performance
            </h3>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {categoryPerformance.map((category) => (
                <div key={category.category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{category.category}</h4>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {category.revenue}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Items: </span>
                      <span className="text-gray-900 dark:text-white font-medium">{category.items}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Confidence: </span>
                      <span className="text-gray-900 dark:text-white font-medium">{category.avgConfidence}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                    <div 
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${category.avgConfidence}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Processing Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Clock className="mr-2" size={20} />
              Processing Metrics
            </h3>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2.4min</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Processing Time</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">94.2%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1,247</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Items Today</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Photo Analysis</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">1.2min avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Price Calculation</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">0.8min avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Listing Creation</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">0.4min avg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <DollarSign className="mr-2" size={20} />
            Revenue Analytics
          </h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">$15,680</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">+12% vs last month</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$5,890</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Profit</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">37.5% margin</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$247</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg Sale Price</div>
              <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">+5% vs last month</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">4.2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Days to Sell</div>
              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">-0.8 days faster</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};