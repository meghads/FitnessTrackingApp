import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import DietPlan from './pages/DietPlan';
import ExercisePlan from './pages/ExercisePlan';
import Progress from './pages/Progress';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import { CompletionProvider } from './context/CompletionContext';

function App() {
  return (
    <AuthProvider>
      <CompletionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="diet" element={<DietPlan />} />
              <Route path="exercise" element={<ExercisePlan />} />
              <Route path="progress" element={<Progress />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CompletionProvider>
    </AuthProvider>
  );
}

export default App;