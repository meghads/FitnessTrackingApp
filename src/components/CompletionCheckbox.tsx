import React from 'react';
import { Check } from 'lucide-react';
import { useCompletion } from '../context/CompletionContext';

interface CompletionCheckboxProps {
  id: string;
  label?: string;
}

export default function CompletionCheckbox({ id, label }: CompletionCheckboxProps) {
  const { completedItems, toggleCompletion } = useCompletion();
  const isCompleted = completedItems[id] || false;

  return (
    <button
      onClick={() => toggleCompletion(id)}
      className={`p-1 rounded-full transition-colors ${
        isCompleted
          ? 'bg-green-100 text-green-600 hover:bg-green-200'
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
      }`}
      aria-label={label || 'Mark as completed'}
    >
      <Check className="w-4 h-4" />
    </button>
  );
}