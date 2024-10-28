import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CompletionContextType {
  completedItems: Record<string, boolean>;
  toggleCompletion: (id: string) => void;
}

const CompletionContext = createContext<CompletionContextType | null>(null);

export function CompletionProvider({ children }: { children: ReactNode }) {
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleCompletion = (id: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <CompletionContext.Provider value={{ completedItems, toggleCompletion }}>
      {children}
    </CompletionContext.Provider>
  );
}

export function useCompletion() {
  const context = useContext(CompletionContext);
  if (!context) {
    throw new Error('useCompletion must be used within a CompletionProvider');
  }
  return context;
}