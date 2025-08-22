import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export default function ProgressPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          📊 Progress Tracking
        </h1>
        <p className="text-lg text-gray-600">
          Monitor your rehabilitation journey and celebrate your achievements
        </p>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>8-Week Program Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Week 1 of 8</span>
              <span className="text-sm text-gray-500">12.5%</span>
            </div>
            <Progress value={12.5} className="h-3" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">1</p>
                <p className="text-sm text-gray-500">Current Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">3</p>
                <p className="text-sm text-gray-500">Days Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">15</p>
                <p className="text-sm text-gray-500">Exercises Done</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">85%</p>
                <p className="text-sm text-gray-500">Adherence Rate</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 8 }, (_, i) => i + 1).map((week) => (
              <div
                key={week}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      week === 1
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {week}
                  </span>
                  <div>
                    <p className="font-medium">Week {week}</p>
                    <p className="text-sm text-gray-500">
                      {week === 1
                        ? "Foundation & Mobility"
                        : week === 2
                        ? "Strengthening"
                        : week <= 4
                        ? "Progressive Loading"
                        : week <= 6
                        ? "Advanced Exercises"
                        : "Maintenance"}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {week === 1 ? "3/7 days" : "0/7 days"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {week === 1 ? "43% complete" : "Not started"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pain Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Pain Level Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">3/10</p>
              <p className="text-sm text-gray-500">
                Current Average Pain Level
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 text-sm">
                🎉 Great progress! Your pain level has decreased by 40% since
                starting the program.
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
          <div className="flex gap-4 flex-wrap">
            <Link to="/">
              <Button variant="outline">← Back to Dashboard</Button>
            </Link>
            <Button variant="outline">Export Progress Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
