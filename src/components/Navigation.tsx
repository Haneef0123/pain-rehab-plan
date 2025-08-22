import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
  ComputerDesktopIcon,
  HeartIcon,
  MapIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Current Week", href: "/week", icon: CalendarIcon },
  { name: "Red Flags", href: "/red-flags", icon: ExclamationTriangleIcon },
  { name: "Ergonomics", href: "/ergonomics", icon: ComputerDesktopIcon },
  { name: "Nutrition", href: "/nutrition", icon: HeartIcon },
  { name: "Travel Module", href: "/travel", icon: MapIcon },
  { name: "Progress", href: "/progress", icon: ChartBarIcon },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
];

export function Navigation() {
  const location = useLocation();
  const [currentWeek, setCurrentWeek] = useState(1);

  useEffect(() => {
    // Get current week from localStorage
    const saved = localStorage.getItem("current-week");
    if (saved) {
      setCurrentWeek(parseInt(saved, 10));
    }
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900 mb-1">My Rehab Plan</h1>
        <p className="text-sm text-gray-600 mb-6">Week {currentWeek} of 8</p>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentWeek / 8) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {Math.round((currentWeek / 8) * 100)}% Complete
          </p>
        </div>

        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-xs font-medium text-red-800">Emergency</p>
          </div>
          <p className="text-xs text-red-700 mt-1">
            Stop if severe pain, numbness, or weakness occurs
          </p>
          <Link
            to="/red-flags"
            className="text-xs text-red-600 underline mt-1 block"
          >
            View Red Flags →
          </Link>
        </div>
      </div>
    </nav>
  );
}
