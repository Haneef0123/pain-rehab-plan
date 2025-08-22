import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Travel() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          🚗 Travel Exercise Module
        </h1>
        <p className="text-lg text-gray-600">
          Stay active and pain-free during long trips
        </p>
      </div>

      {/* Car Travel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚗 Car Travel Exercises
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                Every 60-90 Minutes: Stop and Stretch
              </h3>
              <p className="text-blue-700 text-sm">
                Take a 5-10 minute break to prevent stiffness and pain
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">
                  While Driving (at stops):
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Neck rotations (left and right)</li>
                  <li>• Shoulder blade squeezes</li>
                  <li>• Seated spinal twists</li>
                  <li>• Ankle pumps and circles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">During Stops:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Walk around the car (2-3 minutes)</li>
                  <li>• Standing back extensions</li>
                  <li>• Hip flexor stretches</li>
                  <li>• Calf stretches against car</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Air Travel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ✈️ Air Travel Exercises
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Every 30-45 Minutes: In-Seat Exercises
              </h3>
              <p className="text-green-700 text-sm">
                Prevent blood clots and maintain circulation during flights
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">In Your Seat:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ankle pumps (up and down)</li>
                  <li>• Foot circles</li>
                  <li>• Seated marching (lift knees)</li>
                  <li>• Neck side bends</li>
                  <li>• Shoulder rolls</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Aisle Walking:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Walk the aisle every hour</li>
                  <li>• Calf raises while standing</li>
                  <li>• Gentle back stretches in galley</li>
                  <li>• Deep breathing exercises</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hotel Room Exercises */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏨 Hotel Room Routine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">
                10-Minute Morning & Evening Routine
              </h3>
              <p className="text-purple-700 text-sm">
                Maintain your progress even away from home
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-3">Stretching (5 min):</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Cat-cow pose on bed</li>
                  <li>• Hip flexor stretch</li>
                  <li>• Hamstring stretch</li>
                  <li>• Neck stretches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Strengthening (3 min):</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Wall push-ups</li>
                  <li>• Glute bridges on bed</li>
                  <li>• Standing core activation</li>
                  <li>• Heel raises</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Relaxation (2 min):</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Deep breathing</li>
                  <li>• Progressive muscle relaxation</li>
                  <li>• Gentle spinal twists</li>
                  <li>• Mindful meditation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Travel Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Travel Tips for Back Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Packing Tips:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Use a wheeled suitcase</li>
                <li>• Pack light, distribute weight evenly</li>
                <li>• Bring a lumbar support pillow</li>
                <li>• Pack compression socks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Seating Tips:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Adjust seat to support lower back</li>
                <li>• Keep feet flat on floor</li>
                <li>• Use airplane footrest if available</li>
                <li>• Request aisle seat for easier movement</li>
              </ul>
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
            <Button variant="outline">Download Travel Guide</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
