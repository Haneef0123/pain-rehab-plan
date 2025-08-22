// Local storage utilities for personal app (no authentication)
export const getStoredUser = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  }
  return null;
};

export const setStoredUser = (userData: object) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(userData));
  }
};

export const clearStoredUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

// Default user data for personal app
export const getDefaultUser = () => ({
  id: "personal-user",
  name: "Personal User",
  email: "user@personal.app",
  currentWeek: 1,
  completedWeeks: [],
  preferences: {
    notifications: true,
    theme: "light",
  },
});
