import React from 'react';
import { 
  Activity, 
  Clock, 
  CheckCircle, 
  XCircle, 
  DollarSign, 
  TrendingUp,
  Zap,
  Eye
} from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { ActivityFeed } from '../components/ActivityFeed';
import { ProcessingQueue } from '../components/ProcessingQueue';
import { QuickActions } from '../components/QuickActions';
import { PlatformComparison } from '../components/PlatformComparison';

export const DashboardOverview: React.FC = () => {
  const stats = [
    {
      title: 'Items Processed Today',
      value: '247',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Avg Processing Time',
      value: '3.4min',
      change: '-0.8min',
      changeType: 'positive' as const,
      icon: Clock,
      color: 'purple'
    },
    {
      title: 'Revenue Today',
      value: '$2,847',
      change: '+18%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'emerald'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
          <span>•</span>
          <span>Last updated: just now</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Processing Queue */}
        <div className="lg:col-span-2">
          <ProcessingQueue />
        </div>

        {/* Quick Actions */}
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Secondary Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Feed */}
        <div>
          <ActivityFeed />
        </div>

        {/* Platform Comparison */}
        <div>
          <PlatformComparison />
        </div>
      </div>
    </div>
  );
};