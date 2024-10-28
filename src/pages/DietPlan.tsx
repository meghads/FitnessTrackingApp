import React from 'react';
import { Info } from 'lucide-react';
import CompletionCheckbox from '../components/CompletionCheckbox';

export default function DietPlan() {
  const meals = [
    {
      type: 'Breakfast',
      time: '8:00 AM',
      suggestions: [
        {
          id: 'breakfast-oatmeal',
          name: 'Oatmeal Bowl',
          description: 'Steel-cut oats with berries and honey',
          calories: 350,
          protein: '12g',
          carbs: '45g',
          fats: '8g',
        },
        {
          id: 'breakfast-yogurt',
          name: 'Greek Yogurt Parfait',
          description: 'Greek yogurt with granola and mixed fruits',
          calories: 300,
          protein: '15g',
          carbs: '35g',
          fats: '10g',
        },
      ],
    },
    {
      type: 'Lunch',
      time: '1:00 PM',
      suggestions: [
        {
          id: 'lunch-salad',
          name: 'Grilled Chicken Salad',
          description: 'Mixed greens with grilled chicken and avocado',
          calories: 450,
          protein: '35g',
          carbs: '20g',
          fats: '28g',
        },
      ],
    },
    {
      type: 'Dinner',
      time: '7:00 PM',
      suggestions: [
        {
          id: 'dinner-salmon',
          name: 'Baked Salmon',
          description: 'Baked salmon with quinoa and roasted vegetables',
          calories: 550,
          protein: '40g',
          carbs: '45g',
          fats: '25g',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Your Personalized Diet Plan
        </h1>
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p>
            This meal plan is tailored to your goals and preferences. Feel free to
            swap meals within the same category if needed.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {meals.map((meal) => (
          <div key={meal.type} className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {meal.type}
                </h2>
                <span className="text-sm text-gray-500">{meal.time}</span>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {meal.suggestions.map((suggestion) => (
                <div key={suggestion.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium text-gray-900">
                          {suggestion.name}
                        </h3>
                        <CompletionCheckbox 
                          id={suggestion.id} 
                          label={`Mark ${suggestion.name} as completed`} 
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        {suggestion.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500">Calories</p>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {suggestion.calories}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500">Protein</p>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {suggestion.protein}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500">Carbs</p>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {suggestion.carbs}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-500">Fats</p>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {suggestion.fats}
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