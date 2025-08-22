import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Ergonomics() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          💺 Ergonomic Essentials for Desk Work
        </h1>
        <p className="text-lg text-gray-600">
          Optimize your workspace to prevent injury and support your recovery
        </p>
      </div>

      {/* Desk Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🖥️ Monitor and Desk Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Monitor Position</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Height:</strong> Top third of screen at eye level
                </li>
                <li>
                  • <strong>Distance:</strong> 20-24 inches (arm&apos;s length)
                </li>
                <li>
                  • <strong>Angle:</strong> Slight downward gaze (10-20°)
                </li>
                <li>
                  • <strong>Tilt:</strong> Screen tilted back 10-20°
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Keyboard & Mouse</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Height:</strong> At elbow level
                </li>
                <li>
                  • <strong>Position:</strong> Straight in front of you
                </li>
                <li>
                  • <strong>Wrists:</strong> Straight and neutral
                </li>
                <li>
                  • <strong>Mouse:</strong> Close to keyboard, same level
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chair Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🪑 Chair and Posture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Chair Adjustments</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Height:</strong> Feet flat on floor, knees at 90°
                </li>
                <li>
                  • <strong>Back support:</strong> Supports natural lumbar curve
                </li>
                <li>
                  • <strong>Armrests:</strong> Support forearms at 90° elbow
                  angle
                </li>
                <li>
                  • <strong>Seat depth:</strong> 2-4 inches between knee and
                  seat
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Sitting Posture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Back:</strong> Against backrest, natural curves
                </li>
                <li>
                  • <strong>Shoulders:</strong> Relaxed, not hunched
                </li>
                <li>
                  • <strong>Head:</strong> Balanced over shoulders
                </li>
                <li>
                  • <strong>Thighs:</strong> Parallel to floor
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Movement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚶 Movement and Breaks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                The 20-20-20 Rule
              </h3>
              <p className="text-blue-700">
                Every 20 minutes, look at something 20 feet away for at least 20
                seconds
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">
                  Every 30 Minutes
                </h4>
                <p className="text-green-700 text-sm">Stand and stretch</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800">Every Hour</h4>
                <p className="text-yellow-700 text-sm">Walk for 2-3 minutes</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800">Every 2 Hours</h4>
                <p className="text-purple-700 text-sm">
                  Complete desk break routine
                </p>
              </div>
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
            <Link to="/red-flags">
              <Button
                variant="outline"
                className="bg-red-50 border-red-200 text-red-700"
              >
                🚨 Warning Signs
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
