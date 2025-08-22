"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
                  • <strong>Wrists:</strong> Neutral position, not bent
                </li>
                <li>
                  • <strong>Mouse:</strong> Same height as keyboard
                </li>
                <li>
                  • <strong>Support:</strong> Consider wrist rests
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
            🪑 Chair Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Seat Settings</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Height:</strong> Hips 2-3 inches higher than knees
                </li>
                <li>
                  • <strong>Depth:</strong> 2-3 inches between seat edge and
                  back of knees
                </li>
                <li>
                  • <strong>Support:</strong> Full contact with seat pan
                </li>
                <li>
                  • <strong>Feet:</strong> Flat on floor or footrest
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Back Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Angle:</strong> 100° to 110° recline
                </li>
                <li>
                  • <strong>Lumbar:</strong> Roll placed at L4-L5 level
                </li>
                <li>
                  • <strong>Contact:</strong> Lower back touches chair back
                </li>
                <li>
                  • <strong>Shoulders:</strong> Relaxed, not hunched
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Movement Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚶 Movement and Break Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Every 30 Minutes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Stand and stretch for 30 seconds</li>
                <li>• 5 standing back extensions</li>
                <li>• Neck retractions (chin tucks)</li>
                <li>• Shoulder blade squeezes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Every Hour</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Walk around for 2-3 minutes</li>
                <li>• Hip flexor stretches</li>
                <li>• Spinal movements</li>
                <li>• Eye rest (look away from screen)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Every 2 Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Take a 5-10 minute break</li>
                <li>• Change positions</li>
                <li>• Hydrate</li>
                <li>• Do full body stretches</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sleep Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🛏️ Sleep and Recovery Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Optimal Sleep Position</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Position:</strong> Side-lying preferred
                </li>
                <li>
                  • <strong>Pillow:</strong> Cervical contour pillow
                </li>
                <li>
                  • <strong>Between Knees:</strong> Pillow for hip alignment
                </li>
                <li>
                  • <strong>Avoid:</strong> Stomach sleeping
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Sleep Environment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Temperature:</strong> Cool room (65-68°F)
                </li>
                <li>
                  • <strong>Darkness:</strong> Minimize light exposure
                </li>
                <li>
                  • <strong>Quiet:</strong> Reduce noise distractions
                </li>
                <li>
                  • <strong>Mattress:</strong> Medium-firm support
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Checklist */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">
            Daily Ergonomic Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-green-800 mb-2">
                Morning Setup:
              </h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>□ Adjust chair height and lumbar support</li>
                <li>□ Position monitor at correct height</li>
                <li>□ Check keyboard and mouse placement</li>
                <li>□ Ensure feet are flat on floor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-800 mb-2">
                Throughout the Day:
              </h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>□ Take regular movement breaks</li>
                <li>□ Maintain good posture awareness</li>
                <li>□ Adjust position when fatigued</li>
                <li>□ Stay hydrated</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-green-200">
            <Link href="/">
              <Button variant="outline" className="bg-white">
                ← Back to Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
