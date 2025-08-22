"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  REHABILITATION_PLAN,
  DAILY_SAFETY_CHECKLIST,
} from "@/data/rehabilitationPlan";

export default function DashboardPage() {
  const [currentWeek] = useState(1);
  const [currentDay] = useState(1);
  const [completedDays] = useState(0);

  const currentPlan = REHABILITATION_PLAN.find(
    (plan) => plan.week === currentWeek
  );
  const progressPercentage = Math.round((completedDays / 56) * 100); // 56 days = 8 weeks

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Pain Management Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Week {currentWeek} • Day {currentDay}
              </span>
              <Button variant="outline" size="sm">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Overall Progress</CardTitle>
              <CardDescription>
                Your journey through the 8-week program
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completed</span>
                  <span>{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-gray-500">
                  {completedDays} of 56 days completed
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Week</CardTitle>
              <CardDescription>{currentPlan?.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                Week {currentWeek}
              </div>
              <p className="text-sm text-gray-600 mt-2">{currentPlan?.goal}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Today&apos;s Status</CardTitle>
              <CardDescription>Day {currentDay} activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Safety Check</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Pending
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Morning Routine</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    Not Started
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Evening Routine</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    Not Started
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Safety Checklist */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🛡️ Daily Safety Checklist
            </CardTitle>
            <CardDescription>
              Complete this checklist before starting your exercises today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {DAILY_SAFETY_CHECKLIST.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={item.id}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={item.id} className="text-sm text-gray-700">
                    {item.question}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button className="w-full sm:w-auto">
                Complete Safety Check
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Today's Routines */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌅 Morning Routine
              </CardTitle>
              <CardDescription>
                {currentPlan?.routines.morning.estimatedDuration} minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {currentPlan?.routines.morning.exercises.length} exercises to
                complete
              </p>
              <Button className="w-full" disabled>
                Complete Safety Check First
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💻 Desk Breaks
              </CardTitle>
              <CardDescription>
                Every 30-45 minutes throughout the day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {currentPlan?.routines.deskBreak.exercises.length} quick
                exercises
              </p>
              <Button variant="outline" className="w-full" disabled>
                Complete Safety Check First
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌙 Evening Routine
              </CardTitle>
              <CardDescription>
                {currentPlan?.routines.evening.estimatedDuration} minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {currentPlan?.routines.evening.exercises.length} exercises to
                complete
              </p>
              <Button variant="outline" className="w-full" disabled>
                Complete Safety Check First
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                View Exercise Library
              </Button>
              <Button variant="outline" size="sm">
                Ergonomic Guidelines
              </Button>
              <Button variant="outline" size="sm">
                Progress Reports
              </Button>
              <Button variant="outline" size="sm">
                Red Flag Information
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
