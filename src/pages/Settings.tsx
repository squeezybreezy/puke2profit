import React, { useState } from 'react';
import { 
  Save, 
  Brain, 
  DollarSign, 
  Bell, 
  Shield, 
  Zap,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    // AI Settings
    claudeEnabled: true,
    geminiEnabled: true,
    chatgptEnabled: true,
    confidenceThreshold: 85,
    
    // Pricing Settings
    pricingStrategy: 'market-based',
    profitMargin: 35,
    autoPrice: true,
    
    // Platform Settings
    ebayEnabled: true,
    facebookEnabled: true,
    crossPost: true,
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    lowStockAlerts: true,
    errorAlerts: true,
    
    // Automation
    autoApprove: false,
    batchProcessing: true,
    scheduledProcessing: true
  });

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handleSliderChange = (key: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`flex items-center justify-center w-12 h-6 rounded-full transition-colors ${
        enabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? 'translate-x-3' : '-translate-x-3'
        }`}
      />
    </button>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Configure your automation preferences
          </p>
        </div>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* AI Configuration */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <Brain className="mr-2" size={20} />
            AI Service Configuration
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Control which AI services to use for product analysis
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Claude</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Best for detailed analysis</p>
              </div>
              <Toggle 
                enabled={settings.claudeEnabled} 
                onChange={() => handleToggle('claudeEnabled')} 
              />
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Gemini Pro</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fastest processing</p>
              </div>
              <Toggle 
                enabled={settings.geminiEnabled} 
                onChange={() => handleToggle('geminiEnabled')} 
              />
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">ChatGPT</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Highest accuracy</p>
              </div>
              <Toggle 
                enabled={settings.chatgptEnabled} 
                onChange={() => handleToggle('chatgptEnabled')} 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confidence Threshold for Auto-Posting: {settings.confidenceThreshold}%
            </label>
            <input
              type="range"
              min="70"
              max="95"
              value={settings.confidenceThreshold}
              onChange={(e) => handleSliderChange('confidenceThreshold', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>70%</span>
              <span>95%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Strategy */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <DollarSign className="mr-2" size={20} />
            Pricing Strategy
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Configure automatic pricing algorithms
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pricing Strategy
            </label>
            <select 
              value={settings.pricingStrategy}
              onChange={(e) => setSettings(prev => ({ ...prev, pricingStrategy: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="conservative">Conservative (Lower prices, faster sales)</option>
              <option value="market-based">Market-Based (Competitive pricing)</option>
              <option value="aggressive">Aggressive (Higher prices, better margins)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Target Profit Margin: {settings.profitMargin}%
            </label>
            <input
              type="range"
              min="20"
              max="60"
              value={settings.profitMargin}
              onChange={(e) => handleSliderChange('profitMargin', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>20%</span>
              <span>60%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Automatic Pricing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Let AI set prices automatically</p>
            </div>
            <Toggle 
              enabled={settings.autoPrice} 
              onChange={() => handleToggle('autoPrice')} 
            />
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Zap className="mr-2" size={20} />
              Platform Settings
            </h3>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">eBay Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Auto-post to eBay</p>
              </div>
              <Toggle 
                enabled={settings.ebayEnabled} 
                onChange={() => handleToggle('ebayEnabled')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Facebook Marketplace</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Auto-post to Facebook</p>
              </div>
              <Toggle 
                enabled={settings.facebookEnabled} 
                onChange={() => handleToggle('facebookEnabled')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Cross-Platform Posting</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Post to both platforms</p>
              </div>
              <Toggle 
                enabled={settings.crossPost} 
                onChange={() => handleToggle('crossPost')} 
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Bell className="mr-2" size={20} />
              Notifications
            </h3>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Email Notifications</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily summaries and alerts</p>
              </div>
              <Toggle 
                enabled={settings.emailNotifications} 
                onChange={() => handleToggle('emailNotifications')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">SMS Notifications</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Critical alerts only</p>
              </div>
              <Toggle 
                enabled={settings.smsNotifications} 
                onChange={() => handleToggle('smsNotifications')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Low Stock Alerts</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">When inventory is low</p>
              </div>
              <Toggle 
                enabled={settings.lowStockAlerts} 
                onChange={() => handleToggle('lowStockAlerts')} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Automation Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <Shield className="mr-2" size={20} />
            Automation Controls
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Safety and automation preferences
          </p>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Auto-Approve High Confidence Items</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Automatically approve items above threshold</p>
            </div>
            <Toggle 
              enabled={settings.autoApprove} 
              onChange={() => handleToggle('autoApprove')} 
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Batch Processing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Process multiple items simultaneously</p>
            </div>
            <Toggle 
              enabled={settings.batchProcessing} 
              onChange={() => handleToggle('batchProcessing')} 
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Scheduled Processing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Process items during off-peak hours</p>
            </div>
            <Toggle 
              enabled={settings.scheduledProcessing} 
              onChange={() => handleToggle('scheduledProcessing')} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};