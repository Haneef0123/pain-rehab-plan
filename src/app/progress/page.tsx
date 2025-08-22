"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

interface WeeklyData {
  week: number;
  completedDays: number;
  totalExercises: number;
  completedExercises: number;
  averagePainLevel: number;
  notes: string[];
}

export default function ProgressPage() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    // Load progress data from localStorage
    const savedWeek = localStorage.getItem("current-week");
    if (savedWeek) {
      setCurrentWeek(parseInt(savedWeek, 10));
    }

    // Calculate overall progress
    const progress = ((parseInt(savedWeek || "1", 10) - 1) / 8) * 100;
    setTotalProgress(progress);

    // Load weekly data (mock data for now)
    const mockWeeklyData: WeeklyData[] = Array.from({ length: 8 }, (_, i) => ({
      week: i + 1,
      completedDays:
        i < currentWeek - 1
          ? 7
          : i === currentWeek - 1
          ? Math.floor(Math.random() * 7)
          : 0,
      totalExercises: 21, // 3 routines × 7 days
      completedExercises:
        i < currentWeek - 1
          ? 21
          : i === currentWeek - 1
          ? Math.floor(Math.random() * 21)
          : 0,
      averagePainLevel: Math.max(1, 8 - i), // Decreasing pain over time
      notes: [`Week ${i + 1} progress notes`],
    }));
    setWeeklyData(mockWeeklyData);
  }, [currentWeek]);

  const exportData = () => {
    const dataToExport = {
      currentWeek,
      totalProgress,
      weeklyData,
      exportDate: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `rehab-progress-${
      new Date().toISOString().split("T")[0]
    }.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const resetProgress = () => {
    if (
      confirm(
        "Are you sure you want to reset all progress? This cannot be undone."
      )
    ) {
      localStorage.clear();
      setCurrentWeek(1);
      setTotalProgress(0);
      window.location.reload();
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Progress Tracking
          </h1>
          <p className="text-lg text-gray-600">
            Monitor your rehabilitation journey
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={exportData} variant="outline">
            📊 Export Data
          </Button>
          <Button
            onClick={resetProgress}
            variant="outline"
            className="text-red-600 border-red-200"
          >
            🔄 Reset Progress
          </Button>
        </div>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Program Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  Week {currentWeek} of 8 Completed
                </span>
                <span className="text-sm text-gray-500">
                  {Math.round(totalProgress)}%
                </span>
              </div>
              <Progress value={totalProgress} className="h-4" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">
                  {currentWeek}
                </p>
                <p className="text-sm text-gray-500">Current Week</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">
                  {weeklyData.reduce(
                    (acc, week) => acc + week.completedDays,
                    0
                  )}
                </p>
                <p className="text-sm text-gray-500">Days Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">
                  {weeklyData.reduce(
                    (acc, week) => acc + week.completedExercises,
                    0
                  )}
                </p>
                <p className="text-sm text-gray-500">Exercises Done</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">
                  {weeklyData.length > 0
                    ? Math.round(
                        weeklyData.reduce(
                          (acc, week) => acc + week.averagePainLevel,
                          0
                        ) /
                          weeklyData.filter((w) => w.completedDays > 0)
                            .length || 0
                      )
                    : 0}
                </p>
                <p className="text-sm text-gray-500">Avg Pain Level</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Progress Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.map((week) => {
              const completionRate =
                (week.completedExercises / week.totalExercises) * 100;
              const isCurrentWeek = week.week === currentWeek;
              const isCompleted = week.week < currentWeek;

              return (
                <div
                  key={week.week}
                  className={`p-4 rounded-lg border ${
                    isCurrentWeek
                      ? "border-blue-200 bg-blue-50"
                      : isCompleted
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">
                        Week {week.week}
                        {isCurrentWeek && (
                          <span className="ml-2 text-blue-600">(Current)</span>
                        )}
                        {isCompleted && (
                          <span className="ml-2 text-green-600">
                            ✓ Completed
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {week.completedDays} of 7 days completed
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        {Math.round(completionRate)}%
                      </p>
                      <p className="text-sm text-gray-500">
                        Exercise Completion
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Progress value={completionRate} className="h-2" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Exercises:</span>
                      <span className="ml-1">
                        {week.completedExercises}/{week.totalExercises}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Days:</span>
                      <span className="ml-1">{week.completedDays}/7</span>
                    </div>
                    <div>
                      <span className="font-medium">Avg Pain:</span>
                      <span className="ml-1">{week.averagePainLevel}/10</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Pain Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Pain Level Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                Track your pain levels over the 8-week program
              </p>
            </div>

            <div className="grid grid-cols-8 gap-2">
              {weeklyData.map((week) => (
                <div key={week.week} className="text-center">
                  <div className="mb-2">
                    <div
                      className="w-full bg-gray-200 rounded"
                      style={{ height: "100px" }}
                    >
                      <div
                        className={`rounded transition-all duration-300 ${
                          week.averagePainLevel <= 3
                            ? "bg-green-500"
                            : week.averagePainLevel <= 6
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{
                          height: `${(week.averagePainLevel / 10) * 100}%`,
                          marginTop: `${
                            100 - (week.averagePainLevel / 10) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-sm font-medium">Week {week.week}</p>
                  <p className="text-xs text-gray-500">
                    {week.averagePainLevel}/10
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>
                Green: Low Pain (1-3) • Yellow: Moderate Pain (4-6) • Red: High
                Pain (7-10)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/">
              <Button variant="outline" className="w-full">
                📊 Dashboard
              </Button>
            </Link>
            <Link href="/week">
              <Button variant="outline" className="w-full">
                📅 Current Week
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                const today = new Date().toDateString();
                const lastEntry = localStorage.getItem(`pain-log-${today}`);
                const painLevel = prompt(
                  "Rate your current pain level (0-10):",
                  lastEntry || ""
                );
                if (painLevel && !isNaN(Number(painLevel))) {
                  localStorage.setItem(`pain-log-${today}`, painLevel);
                  alert("Pain level recorded!");
                }
              }}
            >
              📝 Log Pain
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                const notes = prompt("Add notes about today:");
                if (notes) {
                  const today = new Date().toDateString();
                  localStorage.setItem(`notes-${today}`, notes);
                  alert("Notes saved!");
                }
              }}
            >
              💭 Add Notes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
