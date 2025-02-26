import React from 'react';
import { cn } from '../lib/utils';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  className?: string;
}

export function DashboardCard({ title, value, icon, trend, className }: DashboardCardProps) {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-lg", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        {trend !== undefined && (
          <div className={cn(
            "text-sm font-medium",
            trend >= 0 ? "text-green-500" : "text-red-500"
          )}>
            {trend >= 0 ? "↑" : "↓"} {Math.abs(trend).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
}