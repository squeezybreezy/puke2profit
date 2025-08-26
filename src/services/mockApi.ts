// Mock API service to simulate real-time data updates
class MockApiService {
  private intervals: NodeJS.Timeout[] = [];
  private subscribers: Map<string, Function[]> = new Map();

  init() {
    // Simulate real-time updates for various data streams
    this.startProcessingQueueUpdates();
    this.startActivityFeedUpdates();
    this.startStatsUpdates();
  }

  cleanup() {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
    this.subscribers.clear();
  }

  subscribe(event: string, callback: Function) {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event)!.push(callback);
  }

  unsubscribe(event: string, callback: Function) {
    const callbacks = this.subscribers.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  private emit(event: string, data: any) {
    const callbacks = this.subscribers.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }

  private startProcessingQueueUpdates() {
    const interval = setInterval(() => {
      // Simulate queue item status changes
      const queueUpdate = {
        itemId: Math.random().toString(36).substr(2, 9),
        status: ['processing', 'analyzing', 'complete', 'error'][Math.floor(Math.random() * 4)],
        confidence: Math.floor(Math.random() * 40) + 60, // 60-100%
        timestamp: new Date().toISOString()
      };
      
      this.emit('queueUpdate', queueUpdate);
    }, 5000);

    this.intervals.push(interval);
  }

  private startActivityFeedUpdates() {
    const interval = setInterval(() => {
      const activities = [
        'iPhone 15 Pro listed on eBay',
        'MacBook Air sold on Facebook',
        'Processing batch completed',
        'AirPods Pro price updated',
        'New photos received from iPhone'
      ];

      const activity = {
        id: Math.random().toString(36).substr(2, 9),
        title: activities[Math.floor(Math.random() * activities.length)],
        timestamp: new Date().toISOString(),
        type: ['success', 'sale', 'processing', 'update'][Math.floor(Math.random() * 4)]
      };

      this.emit('activityUpdate', activity);
    }, 8000);

    this.intervals.push(interval);
  }

  private startStatsUpdates() {
    const interval = setInterval(() => {
      const statsUpdate = {
        itemsProcessed: Math.floor(Math.random() * 5) + 1,
        revenue: Math.floor(Math.random() * 500) + 100,
        views: Math.floor(Math.random() * 50) + 10,
        timestamp: new Date().toISOString()
      };

      this.emit('statsUpdate', statsUpdate);
    }, 15000);

    this.intervals.push(interval);
  }

  // Mock API endpoints
  async getProcessingQueue() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          items: [
            {
              id: '1',
              product: 'iPhone 14 Pro',
              status: 'processing',
              confidence: 92,
              timeRemaining: '2 min'
            }
          ]
        });
      }, 500);
    });
  }

  async getActiveListings() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          listings: [
            {
              id: '1',
              title: 'iPhone 14 Pro Max',
              platforms: {
                ebay: { price: '$899', views: 156, status: 'active' },
                facebook: { price: '$879', views: 89, status: 'active' }
              }
            }
          ]
        });
      }, 500);
    });
  }

  async getAnalytics() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          aiPerformance: [
            { ai: 'Claude', accuracy: 94, avgTime: '2.3s', cost: '$12.45' },
            { ai: 'Gemini Pro', accuracy: 91, avgTime: '1.8s', cost: '$8.90' },
            { ai: 'ChatGPT', accuracy: 96, avgTime: '3.1s', cost: '$15.60' }
          ]
        });
      }, 500);
    });
  }

  // Webhook simulation
  simulateWebhook(type: string, data: any) {
    // Simulate n8n webhook calls
    console.log(`Webhook received: ${type}`, data);
    this.emit('webhook', { type, data, timestamp: new Date().toISOString() });
  }

  // eBay API simulation
  async createEbayListing(itemData: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) { // 90% success rate
          resolve({
            listingId: Math.random().toString(36).substr(2, 9),
            status: 'active',
            url: 'https://ebay.com/item/123456789'
          });
        } else {
          reject(new Error('eBay API error: Rate limit exceeded'));
        }
      }, 2000);
    });
  }

  // Facebook API simulation
  async createFacebookListing(itemData: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.05) { // 95% success rate
          resolve({
            listingId: Math.random().toString(36).substr(2, 9),
            status: 'active',
            url: 'https://facebook.com/marketplace/item/123456789'
          });
        } else {
          reject(new Error('Facebook API error: Authentication failed'));
        }
      }, 1500);
    });
  }
}

export const mockApi = new MockApiService();