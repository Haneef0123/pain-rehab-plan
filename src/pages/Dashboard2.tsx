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

export default function Dashboard2() {
  const [currentWeek] = useState(1);
  const [currentDay] = useState(1);
  const [completedDays] = useState(0);

  const currentPlan = REHABILITATION_PLAN.find(
    (plan) => plan.week === currentWeek
  );
  const progressPercentage = Math.round((completedDays / 56) * 100); // 56 days = 8 weeks

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
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

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
          <CardDescription>
            Your journey through the 8-week rehabilitation program
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-500">
                {progressPercentage}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="grid grid-cols-3 gap-4 text-center">
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
                  {completedDays}
                </p>
                <p className="text-sm text-gray-500">Days Completed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Week Plan */}
      {currentPlan && (
        <Card>
          <CardHeader>
            <CardTitle>{currentPlan.title}</CardTitle>
            <CardDescription>{currentPlan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">🌅 Morning Routine</h4>
                <p className="text-sm text-gray-600">
                  {currentPlan.routines.morning.estimatedDuration} minutes
                </p>
                <p className="text-sm text-gray-500">
                  {currentPlan.routines.morning.exercises.length} exercises
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">💻 Desk Breaks</h4>
                <p className="text-sm text-gray-600">
                  {currentPlan.routines.deskBreak.estimatedDuration} minutes
                </p>
                <p className="text-sm text-gray-500">
                  {currentPlan.routines.deskBreak.exercises.length} exercises
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">🌙 Evening Routine</h4>
                <p className="text-sm text-gray-600">
                  {currentPlan.routines.evening.estimatedDuration} minutes
                </p>
                <p className="text-sm text-gray-500">
                  {currentPlan.routines.evening.exercises.length} exercises
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Safety Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Safety Checklist</CardTitle>
          <CardDescription>
            Complete this checklist before starting your exercises
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {DAILY_SAFETY_CHECKLIST.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-700">{item.question}</label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
