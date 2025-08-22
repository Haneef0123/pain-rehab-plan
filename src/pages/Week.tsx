import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export default function Week() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          📅 Week Overview
        </h1>
        <p className="text-lg text-gray-600">
          Track your weekly progress and plan ahead
        </p>
      </div>

      {/* Current Week */}
      <Card>
        <CardHeader>
          <CardTitle>Week 1: Foundation & Mobility</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Week Progress</span>
              <span className="text-sm text-gray-500">43%</span>
            </div>
            <Progress value={43} className="h-3" />
            <div className="grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => (
                  <div
                    key={day}
                    className={`p-3 text-center rounded-lg border ${
                      index < 3
                        ? "bg-green-50 border-green-200"
                        : index === 3
                        ? "bg-blue-50 border-blue-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <p className="text-xs font-medium text-gray-600">{day}</p>
                    <p className="text-lg mt-1">
                      {index < 3 ? "✅" : index === 3 ? "🔄" : "⭕"}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`p-4 border rounded-lg ${
                  day <= 3
                    ? "bg-green-50 border-green-200"
                    : day === 4
                    ? "bg-blue-50 border-blue-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Day {day}</h4>
                  <span className="text-sm">
                    {day <= 3
                      ? "Completed ✅"
                      : day === 4
                      ? "In Progress 🔄"
                      : "Upcoming ⭕"}
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Morning (10 min)</p>
                    <p className="text-gray-600">
                      {day <= 3
                        ? "Completed"
                        : day === 4
                        ? "Pending"
                        : "Scheduled"}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Desk Breaks (5 min)</p>
                    <p className="text-gray-600">
                      {day <= 3
                        ? "Completed"
                        : day === 4
                        ? "Pending"
                        : "Scheduled"}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Evening (15 min)</p>
                    <p className="text-gray-600">
                      {day <= 3
                        ? "Completed"
                        : day === 4
                        ? "Pending"
                        : "Scheduled"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Week Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Week Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-600">✅</span>
              <span>Complete safety checklist daily</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-600">✅</span>
              <span>Establish morning routine habit</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600">🔄</span>
              <span>Take regular desk breaks</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">⭕</span>
              <span>Complete all evening routines</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">⭕</span>
              <span>Track pain levels daily</span>
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
          <div className="flex gap-4 flex-wrap">
            <Link to="/">
              <Button variant="outline">← Back to Dashboard</Button>
            </Link>
            <Button variant="outline">View Next Week</Button>
            <Button variant="outline">Export Week Summary</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
