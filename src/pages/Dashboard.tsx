import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SafetyChecklist from "@/components/forms/SafetyChecklist";
import ExerciseRoutine from "@/components/exercise/ExerciseRoutine";
import { REHABILITATION_PLAN } from "@/data/rehabilitationPlan";
import { WeeklyPlan } from "@/types";
import { Link } from "react-router-dom";

interface DayProgress {
  safetyCheck: boolean;
  morningRoutine: number;
  deskBreaks: number;
  eveningRoutine: number;
  painRating?: number;
  notes?: string;
}

export default function Dashboard() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);
  const [todayProgress, setTodayProgress] = useState<DayProgress>({
    safetyCheck: false,
    morningRoutine: 0,
    deskBreaks: 0,
    eveningRoutine: 0,
  });
  const [showSafetyCheck, setShowSafetyCheck] = useState(true);

  useEffect(() => {
    // Load progress from localStorage
    const savedWeek = localStorage.getItem("current-week");
    const savedDay = localStorage.getItem("current-day");
    const savedProgress = localStorage.getItem(
      `progress-week-${currentWeek}-day-${currentDay}`
    );

    if (savedWeek) setCurrentWeek(parseInt(savedWeek, 10));
    if (savedDay) setCurrentDay(parseInt(savedDay, 10));
    if (savedProgress) {
      setTodayProgress(JSON.parse(savedProgress));
    }

    // Check if safety checklist was completed today
    const today = new Date().toDateString();
    const lastSafetyCheck = localStorage.getItem("last-safety-check");
    if (lastSafetyCheck === today) {
      setShowSafetyCheck(false);
    }
  }, [currentWeek, currentDay]);

  const handleSafetyCheckComplete = (passed: boolean) => {
    if (passed) {
      const today = new Date().toDateString();
      localStorage.setItem("last-safety-check", today);
      setTodayProgress((prev) => ({ ...prev, safetyCheck: true }));
      setShowSafetyCheck(false);
    }
  };

  const currentWeekData = REHABILITATION_PLAN.find(
    (w: WeeklyPlan) => w.week === currentWeek
  );
  const overallProgress =
    ((currentWeek - 1) / 8) * 100 + (currentDay / 7) * (100 / 8);

  if (showSafetyCheck) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Daily Safety Check
          </h1>
          <p className="text-gray-600">
            Complete your safety checklist before starting today&apos;s
            exercises
          </p>
        </div>
        <SafetyChecklist onComplete={handleSafetyCheckComplete} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Day {currentDay} of Week {currentWeek}
          </h1>
          <p className="text-lg text-gray-600">{currentWeekData?.title}</p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowSafetyCheck(true)}
          className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
        >
          🔴 Safety Check
        </Button>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  Week {currentWeek} of 8
                </span>
                <span className="text-sm text-gray-500">
                  {Math.round(overallProgress)}%
                </span>
              </div>
              <Progress value={overallProgress} className="h-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {currentWeek}
                </p>
                <p className="text-sm text-gray-500">Current Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {currentDay}
                </p>
                <p className="text-sm text-gray-500">Day of Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">
                  {todayProgress.safetyCheck ? "✓" : "○"}
                </p>
                <p className="text-sm text-gray-500">Safety Check</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">
                  {Math.round(
                    (todayProgress.morningRoutine +
                      todayProgress.deskBreaks +
                      todayProgress.eveningRoutine) /
                      3
                  )}
                  %
                </p>
                <p className="text-sm text-gray-500">Today&apos;s Progress</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Routines */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌅 Morning Routine
              <span className="text-sm font-normal text-gray-500">
                (~{currentWeekData?.routines.morning.estimatedDuration} min)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentWeekData && (
              <ExerciseRoutine
                routine={currentWeekData.routines.morning}
                onComplete={(completedExercises: string[]) => {
                  const progress =
                    (completedExercises.length /
                      currentWeekData.routines.morning.exercises.length) *
                    100;
                  setTodayProgress((prev) => ({
                    ...prev,
                    morningRoutine: progress,
                  }));
                }}
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💻 Desk Break Routine
              <span className="text-sm font-normal text-gray-500">
                (Every hour • ~
                {currentWeekData?.routines.deskBreak.estimatedDuration} min)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentWeekData && (
              <ExerciseRoutine
                routine={currentWeekData.routines.deskBreak}
                onComplete={(completedExercises: string[]) => {
                  const progress =
                    (completedExercises.length /
                      currentWeekData.routines.deskBreak.exercises.length) *
                    100;
                  setTodayProgress((prev) => ({
                    ...prev,
                    deskBreaks: progress,
                  }));
                }}
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌙 Evening Routine
              <span className="text-sm font-normal text-gray-500">
                (~{currentWeekData?.routines.evening.estimatedDuration} min)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentWeekData && (
              <ExerciseRoutine
                routine={currentWeekData.routines.evening}
                onComplete={(completedExercises: string[]) => {
                  const progress =
                    (completedExercises.length /
                      currentWeekData.routines.evening.exercises.length) *
                    100;
                  setTodayProgress((prev) => ({
                    ...prev,
                    eveningRoutine: progress,
                  }));
                }}
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/red-flags">
              <Button
                variant="outline"
                className="w-full bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
              >
                🚨 Red Flags
              </Button>
            </Link>
            <Link to="/ergonomics">
              <Button variant="outline" className="w-full">
                💺 Ergonomics
              </Button>
            </Link>
            <Link to="/progress">
              <Button variant="outline" className="w-full">
                📊 View Progress
              </Button>
            </Link>
            <Link to="/travel">
              <Button variant="outline" className="w-full">
                🚗 Travel Module
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
