// Core types for the rehabilitation application

export interface User {
  id: string;
  email: string;
  name: string;
  occupation?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  occupation: string;
  backHistory?: string;
  neckHistory?: string;
  painHistory?: string;
  currentWeek: number;
  startDate: Date;
  completedDays: number[];
  preferences: UserPreferences;
}

export interface UserPreferences {
  deskBreakInterval: number; // minutes
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  timezone: string;
}

export interface SafetyCheckItem {
  id: string;
  question: string;
  isRedFlag: boolean;
  completed: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl?: string;
  duration?: string; // e.g., "30 seconds", "10 reps"
  sets?: number;
  reps?: string;
  holdTime?: string;
  instructions: string[];
  category: "morning" | "deskBreak" | "evening";
}

export interface RoutineSession {
  id: string;
  name: string;
  category: "morning" | "deskBreak" | "evening";
  estimatedDuration: number; // minutes
  exercises: Exercise[];
}

export interface DailyProgress {
  id: string;
  userId: string;
  date: Date;
  week: number;
  day: number;
  safetyCheckCompleted: boolean;
  safetyCheckPassed: boolean;
  morningRoutineCompleted: boolean;
  deskBreaksCompleted: number;
  eveningRoutineCompleted: boolean;
  exercisesCompleted: string[]; // exercise IDs
  painLevel?: number; // 1-10 scale
  notes?: string;
  redFlagsReported: string[];
}

export interface WeeklyPlan {
  week: number;
  title: string;
  goal: string;
  description: string;
  routines: {
    morning: RoutineSession;
    deskBreak: RoutineSession;
    evening: RoutineSession;
  };
  unlockCriteria: {
    completionRate: number; // 0.8 for 80%
    painFreeExercises: number; // minimum exercises completed without pain
  };
}

export interface ProgressStats {
  currentWeek: number;
  totalWeeks: number;
  completedDays: number;
  totalDays: number;
  averagePainLevel: number;
  exerciseAdherence: number; // percentage
  weeklyProgress: {
    week: number;
    completionRate: number;
    painTrend: "improving" | "stable" | "worsening";
  }[];
}

export interface RedFlag {
  id: string;
  description: string;
  severity: "warning" | "urgent";
  action: string;
}

export type NotificationFrequency = "never" | "daily" | "weekly";

export type PainLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type FunctionLevel = 1 | 2 | 3 | 4 | 5; // 1 = severe limitation, 5 = no limitation
