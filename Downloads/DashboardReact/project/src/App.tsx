import React from 'react';
import {
  BarChart3,
  DollarSign,
  Users,
  CreditCard,
  TrendingUp,
  Activity,
  PieChart,
} from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { FinancialChart } from './components/FinancialChart';

const mockChartData = [
  { date: 'Jan', revenue: 45000, expenses: 38000 },
  { date: 'Feb', revenue: 52000, expenses: 42000 },
  { date: 'Mar', revenue: 61000, expenses: 45000 },
  { date: 'Apr', revenue: 58000, expenses: 48000 },
  { date: 'May', revenue: 63000, expenses: 51000 },
  { date: 'Jun', revenue: 72000, expenses: 53000 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Financial Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Revenue"
            value="$72,000"
            icon={<DollarSign className="h-5 w-5" />}
            trend={8.2}
          />
          <DashboardCard
            title="Active Users"
            value="2,453"
            icon={<Users className="h-5 w-5" />}
            trend={12.5}
          />
          <DashboardCard
            title="Expenses"
            value="$53,000"
            icon={<CreditCard className="h-5 w-5" />}
            trend={-2.4}
          />
          <DashboardCard
            title="Profit Margin"
            value="26.4%"
            icon={<TrendingUp className="h-5 w-5" />}
            trend={5.7}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <FinancialChart
            data={mockChartData}
            dataKey="revenue"
            title="Revenue Trend"
          />
          <FinancialChart
            data={mockChartData}
            dataKey="expenses"
            title="Expense Analysis"
          />
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Key Performance Indicators</h3>
              <Activity className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {[
                { label: 'Current Ratio', value: '2.5', target: '> 2.0' },
                { label: 'Quick Ratio', value: '1.8', target: '> 1.0' },
                { label: 'Debt to Equity', value: '0.4', target: '< 0.5' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-gray-600">{item.label}</span>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">{item.value}</span>
                    <span className="text-sm text-gray-400">Target: {item.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Revenue Breakdown</h3>
              <PieChart className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {[
                { category: 'Product Sales', amount: '$42,000', percentage: '58%' },
                { category: 'Services', amount: '$21,000', percentage: '29%' },
                { category: 'Subscriptions', amount: '$9,000', percentage: '13%' },
              ].map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                  <span className="text-gray-600">{item.category}</span>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">{item.amount}</span>
                    <span className="text-sm text-gray-400">{item.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;