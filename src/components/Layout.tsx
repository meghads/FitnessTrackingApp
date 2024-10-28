import React from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  Utensils, 
  Dumbbell, 
  LineChart,
  LogOut,
  User
} from 'lucide-react';

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Diet Plan', href: '/diet', icon: Utensils },
    { name: 'Exercise Plan', href: '/exercise', icon: Dumbbell },
    { name: 'Progress', href: '/progress', icon: LineChart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-4 text-sm font-medium border-b-2 ${
                      location.pathname === item.href
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center">
              <div className="flex items-center">
                <button
                  className="p-2 rounded-full text-gray-400 hover:text-gray-500"
                >
                  <User className="w-6 h-6" />
                </button>
                <button
                  onClick={logout}
                  className="ml-4 p-2 rounded-full text-gray-400 hover:text-gray-500"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}