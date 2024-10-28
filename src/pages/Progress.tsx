import React from 'react';
import { 
  LineChart as LineChartIcon, 
  Trophy,
  Calendar,
  TrendingUp
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function Progress() {
  const weightData = [
    { date: '1/1', weight: 85 },
    { date: '1/8', weight: 84 },
    { date: '1/15', weight: 83.5 },
    { date: '1/22', weight: 82.8 },
    { date: '1/29', weight: 82 },
    { date: '2/5', weight: 81.5 },
    { date: '2/12', weight: 81 },
  ];

  const exerciseData = {
    completed: 75,
    missed: 25,
  };

  const COLORS = ['#3B82F6', '#E5E7EB'];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Your Progress
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-semibold">Weight Loss</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">-4 kg</p>
            <p className="text-sm text-gray-600">Last 6 weeks</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Trophy className="w-5 h-5" />
              <h3 className="font-semibold">Workout Streak</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">7 days</p>
            <p className="text-sm text-gray-600">Personal best!</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <Calendar className="w-5 h-5" />
              <h3 className="font-semibold">Program Completion</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">45%</p>
            <p className="text-sm text-gray-600">On track</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Weight Progress
            </h2>
            <LineChartIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Exercise Completion
            </h2>
            <Trophy className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Completed', value: exerciseData.completed },
                    { name: 'Missed', value: exerciseData.missed },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <span className="text-sm text-gray-600">Missed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}