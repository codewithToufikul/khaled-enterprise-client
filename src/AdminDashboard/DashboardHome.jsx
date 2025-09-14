import React from 'react';
import { 
  Package, 
  FileText, 
  TrendingUp, 
  Users, 
  Calendar, 
  Globe,
  ArrowUpRight,
  Activity,
  Clock,
  CheckCircle
} from 'lucide-react';

const DashboardHome = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const stats = [
    {
      title: 'Total Products',
      value: '24',
      change: '+3',
      changeType: 'increase',
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Pending RFQs',
      value: '5',
      change: '+2',
      changeType: 'increase',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      title: 'Monthly Sales',
      value: '$45.2K',
      change: '+12%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Active Clients',
      value: '128',
      change: '+8',
      changeType: 'increase',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'New RFQ received',
      description: 'Black Tiger Shrimp - 2.5MT',
      time: '2 minutes ago',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      id: 2,
      action: 'Product updated',
      description: 'Atlantic Salmon specifications',
      time: '1 hour ago',
      icon: Package,
      color: 'text-green-600'
    },
    {
      id: 3,
      action: 'Client registered',
      description: 'New client from UAE',
      time: '3 hours ago',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      id: 4,
      action: 'Export completed',
      description: 'Shipment to Singapore',
      time: '1 day ago',
      icon: CheckCircle,
      color: 'text-teal-600'
    }
  ];

  const quickActions = [
    {
      title: 'Add New Product',
      description: 'Create a new product listing',
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      action: '/admin/products/new'
    },
    {
      title: 'View RFQs',
      description: 'Manage quotation requests',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      action: '/admin/rfqs'
    },
    {
      title: 'Export Data',
      description: 'Download reports and analytics',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      action: '#'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome to Dashboard! 👋
            </h1>
            <p className="text-teal-100 text-lg">
              Manage your seafood export business efficiently
            </p>
            <div className="flex items-center space-x-4 mt-4 text-teal-100">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{currentDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{currentTime}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-teal-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                <ArrowUpRight className="w-4 h-4" />
                <span>{stat.change}</span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="w-full p-4 bg-gradient-to-r hover:shadow-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-left group"
                  style={{
                    background: `linear-gradient(135deg, ${action.color.split(' ')[1]} 0%, ${action.color.split(' ')[3]} 100%)`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <action.icon className="w-5 h-5 " />
                    </div>
                    <div className="flex-1 ">
                      <div className="font-semibold">{action.title}</div>
                      <div className="text-sm opacity-90">{action.description}</div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Recent Activities</h3>
              <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">{activity.action}</div>
                    <div className="text-sm text-gray-600 mt-1">{activity.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 flex-shrink-0">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-6">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div>
              <div className="font-medium text-gray-900">Server Status</div>
              <div className="text-sm text-gray-600">All systems operational</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div>
              <div className="font-medium text-gray-900">Database</div>
              <div className="text-sm text-gray-600">Running smoothly</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
            <div>
              <div className="font-medium text-gray-900">API Services</div>
              <div className="text-sm text-gray-600">Fully functional</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;