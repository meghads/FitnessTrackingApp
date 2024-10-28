import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Droplets, 
  Trophy,
  TrendingUp
} from 'lucide-react';
import CompletionCheckbox from '../components/CompletionCheckbox';

export default function Dashboard() {
  const { user } = useAuth();

  const todaysPlan = {
    meals: [
      {
        id: 'breakfast-1',
        type: 'Breakfast',
        suggestion: 'Oatmeal with berries and nuts',
      },
      {
        id: 'lunch-1',
        type: 'Lunch',
        suggestion: 'Grilled chicken salad',
      },
      {
        id: 'dinner-1',
        type: 'Dinner',
        suggestion: 'Salmon with quinoa and vegetables',
      },
    ],
    exercises: [
      {
        id: 'cardio-1',
        name: 'Morning Cardio',
        duration: '30 mins',
      },
      {
        id: 'strength-1',
        name: 'Strength Training',
        duration: '45 mins',
      },
    ],
    waterIntake: {
      target: 8,
      current: 3,
    },
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600">
          Let's achieve your fitness goals together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Diet Plan Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Today's Meals
          </h2>
          <div className="space-y-4">
            {todaysPlan.meals.map((meal) => (
              <div
                key={meal.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-700">{meal.type}</p>
                  <p className="text-sm text-gray-500">{meal.suggestion}</p>
                </div>
                <CompletionCheckbox id={meal.id} label={`Mark ${meal.type} as completed`} />
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Plan Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Today's Workouts
          </h2>
          <div className="space-y-4">
            {todaysPlan.exercises.map((exercise) => (
              <div
                key={exercise.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-700">{exercise.name}</p>
                  <p className="text-sm text-gray-500">{exercise.duration}</p>
                </div>
                <CompletionCheckbox id={exercise.id} label={`Mark ${exercise.name} as completed`} />
              </div>
            ))}
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Water Intake
          </h2>
          <div className="flex items-center justify-between mb-4">
            <Droplets className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-gray-700">
              {todaysPlan.waterIntake.current} / {todaysPlan.waterIntake.target}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{
                width: `${(todaysPlan.waterIntake.current / todaysPlan.waterIntake.target) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Weekly Goal Progress
            </h3>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: '75%' }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            75% of weekly goals completed
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Streak
            </h3>
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800">7 days</p>
          <p className="text-sm text-gray-600">Keep it up!</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Next Milestone
            </h3>
            <Trophy className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-gray-700">2 more days to reach 30-day streak!</p>
        </div>
      </div>
    </div>
  );
}