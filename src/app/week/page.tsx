"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { REHABILITATION_PLAN } from "@/data/rehabilitationPlan";
import { WeeklyPlan } from "@/types";
import Link from "next/link";

export default function WeekPage() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [weekData, setWeekData] = useState<WeeklyPlan | null>(null);

  useEffect(() => {
    const savedWeek = localStorage.getItem("current-week");
    if (savedWeek) {
      setCurrentWeek(parseInt(savedWeek, 10));
    }

    const week = REHABILITATION_PLAN.find((w) => w.week === currentWeek);
    setWeekData(week || null);
  }, [currentWeek]);

  const changeWeek = (newWeek: number) => {
    if (newWeek >= 1 && newWeek <= 8) {
      setCurrentWeek(newWeek);
      localStorage.setItem("current-week", newWeek.toString());
      const week = REHABILITATION_PLAN.find((w) => w.week === newWeek);
      setWeekData(week || null);
    }
  };

  if (!weekData) {
    return (
      <div className="max-w-4xl mx-auto">
        <p>Loading week data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Week Navigation */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Week {currentWeek} Overview
          </h1>
          <p className="text-lg text-gray-600">{weekData.title}</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => changeWeek(currentWeek - 1)}
            disabled={currentWeek <= 1}
            variant="outline"
          >
            ← Previous
          </Button>
          <Button
            onClick={() => changeWeek(currentWeek + 1)}
            disabled={currentWeek >= 8}
            variant="outline"
          >
            Next →
          </Button>
        </div>
      </div>

      {/* Week Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Jump to Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {Array.from({ length: 8 }, (_, i) => i + 1).map((weekNum) => (
              <Button
                key={weekNum}
                variant={weekNum === currentWeek ? "default" : "outline"}
                onClick={() => changeWeek(weekNum)}
                className="w-full"
              >
                {weekNum}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Week Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Week {currentWeek} Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Primary Goal</h3>
              <p className="text-gray-700">{weekData.goal}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-700">{weekData.description}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Success Criteria</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  • Complete{" "}
                  {Math.round(weekData.unlockCriteria.completionRate * 100)}% of
                  exercises
                </li>
                <li>
                  • Perform {weekData.unlockCriteria.painFreeExercises}{" "}
                  exercises pain-free
                </li>
                <li>• Maintain consistent daily routine</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Routines */}
      <div className="grid gap-6">
        {/* Morning Routine */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌅 Morning Routine
              <span className="text-sm font-normal text-gray-500">
                (~{weekData.routines.morning.estimatedDuration} minutes)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weekData.routines.morning.exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {exercise.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {exercise.description}
                    </p>
                    {exercise.duration && (
                      <p className="text-xs text-gray-500 mt-1">
                        Duration: {exercise.duration}
                      </p>
                    )}
                    {exercise.videoUrl && (
                      <a
                        href={exercise.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline mt-1 inline-block"
                      >
                        📹 Watch Video
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Desk Break Routine */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💻 Desk Break Routine
              <span className="text-sm font-normal text-gray-500">
                (Every hour • ~{weekData.routines.deskBreak.estimatedDuration}{" "}
                minutes)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weekData.routines.deskBreak.exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {exercise.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {exercise.description}
                    </p>
                    {exercise.duration && (
                      <p className="text-xs text-gray-500 mt-1">
                        Duration: {exercise.duration}
                      </p>
                    )}
                    {exercise.videoUrl && (
                      <a
                        href={exercise.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline mt-1 inline-block"
                      >
                        📹 Watch Video
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Evening Routine */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌙 Evening Routine
              <span className="text-sm font-normal text-gray-500">
                (~{weekData.routines.evening.estimatedDuration} minutes)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weekData.routines.evening.exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {exercise.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {exercise.description}
                    </p>
                    {exercise.duration && (
                      <p className="text-xs text-gray-500 mt-1">
                        Duration: {exercise.duration}
                      </p>
                    )}
                    {exercise.videoUrl && (
                      <a
                        href={exercise.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline mt-1 inline-block"
                      >
                        📹 Watch Video
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/">
              <Button variant="outline" className="w-full">
                🏠 Dashboard
              </Button>
            </Link>
            <Link href="/red-flags">
              <Button
                variant="outline"
                className="w-full bg-red-50 border-red-200 text-red-700"
              >
                🚨 Red Flags
              </Button>
            </Link>
            <Link href="/progress">
              <Button variant="outline" className="w-full">
                📊 Progress
              </Button>
            </Link>
            <Link href="/ergonomics">
              <Button variant="outline" className="w-full">
                💺 Ergonomics
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
