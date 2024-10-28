import React from 'react';
import { Play, Info } from 'lucide-react';
import CompletionCheckbox from '../components/CompletionCheckbox';

export default function ExercisePlan() {
  const workouts = [
    {
      name: 'Morning Cardio',
      time: '7:00 AM',
      duration: '30 mins',
      exercises: [
        {
          id: 'cardio-treadmill',
          name: 'Treadmill Run',
          duration: '20 mins',
          intensity: 'Moderate',
          instructions: 'Maintain a steady pace at 60-70% max heart rate',
        },
        {
          id: 'cardio-cooldown',
          name: 'Cool Down Walk',
          duration: '10 mins',
          intensity: 'Light',
          instructions: 'Gradually reduce speed to normal walking pace',
        },
      ],
    },
    {
      name: 'Strength Training',
      time: '5:00 PM',
      duration: '45 mins',
      exercises: [
        {
          id: 'strength-pushups',
          name: 'Push-ups',
          sets: '3',
          reps: '12',
          intensity: 'Moderate',
          instructions: 'Keep core tight, lower chest to ground',
        },
        {
          id: 'strength-squats',
          name: 'Squats',
          sets: '3',
          reps: '15',
          intensity: 'Moderate',
          instructions: 'Keep feet shoulder-width apart, lower until thighs are parallel',
        },
        {
          id: 'strength-rows',
          name: 'Dumbbell Rows',
          sets: '3',
          reps: '12',
          intensity: 'Moderate',
          instructions: 'Keep back straight, pull dumbbell to hip',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Your Exercise Plan
        </h1>
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p>
            Remember to warm up before each session and stay hydrated throughout
            your workout.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {workouts.map((workout) => (
          <div key={workout.name} className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {workout.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {workout.time} • {workout.duration}
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Start Workout
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {workout.exercises.map((exercise) => (
                <div key={exercise.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium text-gray-900">
                          {exercise.name}
                        </h3>
                        <CompletionCheckbox 
                          id={exercise.id} 
                          label={`Mark ${exercise.name} as completed`} 
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        {exercise.instructions}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {'sets' in exercise ? (
                      <>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-500">Sets</p>
                          <p className="mt-1 text-lg font-semibold text-gray-900">
                            {exercise.sets}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-500">Reps</p>
                          <p className="mt-1 text-lg font-semibold text-gray-900">
                            {exercise.reps}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-500">
                          Duration
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          {exercise.duration}
                        </p>
                      </div>
                    )}
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500">
                        Intensity
                      </p>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {exercise.intensity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}