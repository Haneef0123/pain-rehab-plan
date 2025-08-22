"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TravelModule() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          🚗 Travel Prevention Module
        </h1>
        <p className="text-lg text-gray-600">
          Prevent flare-ups during long drives, flights, and travel
        </p>
      </div>

      {/* Pre-Trip Preparation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎒 Pre-Trip Preparation (10 minutes)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Spinal Preparation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>McKenzie Extensions:</strong> 10 reps
                </li>
                <li>
                  • <strong>Hip Flexor Stretches:</strong> 30 seconds each side
                </li>
                <li>
                  • <strong>Neck Retractions:</strong> 10 reps
                </li>
                <li>
                  • <strong>Gentle Spinal Rotation:</strong> 5 each direction
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Equipment Check</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lumbar roll or cushion</li>
                <li>• Neck pillow (for flights)</li>
                <li>• Water bottle</li>
                <li>• Comfortable clothing</li>
                <li>• Supportive shoes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Driving Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚙 Driving Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Seat Setup</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Position:</strong> Close enough to reach pedals
                  comfortably
                </li>
                <li>
                  • <strong>Backrest:</strong> 100-110° recline
                </li>
                <li>
                  • <strong>Lumbar Support:</strong> Use built-in or add cushion
                </li>
                <li>
                  • <strong>Head Rest:</strong> Support back of head
                </li>
                <li>
                  • <strong>Mirrors:</strong> Adjust to minimize neck turning
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Every 45-60 Minutes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Stop and Exit:</strong> Get out of the car
                </li>
                <li>
                  • <strong>Walk:</strong> 2-3 minutes around the car
                </li>
                <li>
                  • <strong>Extensions:</strong> 5 standing back extensions
                </li>
                <li>
                  • <strong>Hip Reset:</strong> Hip flexor stretches
                </li>
                <li>
                  • <strong>Hydrate:</strong> Drink water
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flying Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ✈️ Flying Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Seat Selection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Aisle Seat:</strong> For easier movement
                </li>
                <li>
                  • <strong>Exit Row:</strong> Extra legroom if available
                </li>
                <li>
                  • <strong>Avoid:</strong> Window seats on long flights
                </li>
                <li>
                  • <strong>Upgrade:</strong> Consider premium economy
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">In-Flight Strategy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Every Hour:</strong> Stand and walk if possible
                </li>
                <li>
                  • <strong>Ankle Pumps:</strong> Every 15 minutes
                </li>
                <li>
                  • <strong>Seated Stretches:</strong> Gentle spinal movements
                </li>
                <li>
                  • <strong>Neck Support:</strong> Use pillow for sleeping
                </li>
                <li>
                  • <strong>Hydration:</strong> Water, avoid alcohol/caffeine
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* In-Transit Exercises */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🤸 In-Transit Exercises
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Seated Exercises</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Ankle Circles:</strong> 10 each direction
                </li>
                <li>
                  • <strong>Calf Raises:</strong> 15 reps
                </li>
                <li>
                  • <strong>Seated Spinal Twist:</strong> Gentle rotation
                </li>
                <li>
                  • <strong>Shoulder Rolls:</strong> 10 backward
                </li>
                <li>
                  • <strong>Neck Side Bends:</strong> 5 each side
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Standing Breaks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>McKenzie Extensions:</strong> 5 reps
                </li>
                <li>
                  • <strong>Standing Marches:</strong> 20 steps
                </li>
                <li>
                  • <strong>Calf Raises:</strong> 15 reps
                </li>
                <li>
                  • <strong>Side Bends:</strong> 5 each side
                </li>
                <li>
                  • <strong>Deep Breathing:</strong> 5 breaths
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Rest Stop Routine</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Walk:</strong> 5 minutes minimum
                </li>
                <li>
                  • <strong>Hip Flexor Stretch:</strong> 30 sec each
                </li>
                <li>
                  • <strong>Spinal Extensions:</strong> 10 reps
                </li>
                <li>
                  • <strong>Neck Stretches:</strong> All directions
                </li>
                <li>
                  • <strong>Hydrate and Refresh:</strong>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post-Trip Recovery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏠 Post-Trip Recovery (15 minutes)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Immediate Recovery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Walk:</strong> 10 minutes at comfortable pace
                </li>
                <li>
                  • <strong>Spinal Decompression:</strong> Lie on back, knees up
                </li>
                <li>
                  • <strong>Hip Flexor Stretches:</strong> Hold 60 seconds each
                </li>
                <li>
                  • <strong>Gentle Spinal Movements:</strong> Cat-cow stretches
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Next Day Protocol</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Resume normal exercise routine</li>
                <li>• Extra attention to morning routine</li>
                <li>• Monitor for any increased symptoms</li>
                <li>• Continue frequent movement breaks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Kit */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎒 Travel Emergency Kit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Physical Items</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Portable lumbar cushion</li>
                <li>• Inflatable neck pillow</li>
                <li>• Compression socks</li>
                <li>• Pain relief gel/patches</li>
                <li>• Emergency contact info</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Knowledge Kit</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Exercise routine reminders</li>
                <li>• Red flag symptoms list</li>
                <li>• Local urgent care locations</li>
                <li>• Healthcare provider contacts</li>
                <li>• Insurance information</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning Signs */}
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center gap-2">
            ⚠️ Travel Warning Signs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 mb-4">
            <strong>
              Stop travel and seek medical attention if you experience:
            </strong>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-red-700">
              <li>• Severe leg pain or numbness</li>
              <li>• Loss of bladder/bowel control</li>
              <li>• Progressive weakness</li>
              <li>• Severe headache with neck stiffness</li>
            </ul>
            <ul className="space-y-2 text-red-700">
              <li>• Chest pain or difficulty breathing</li>
              <li>• Severe swelling in legs</li>
              <li>• Signs of blood clot</li>
              <li>• Any concerning new symptoms</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">
            Quick Travel Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium text-blue-800 mb-2">Before Travel:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>□ Pre-trip exercises completed</li>
                <li>□ Travel kit packed</li>
                <li>□ Route with stops planned</li>
                <li>□ Comfortable clothes worn</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-2">During Travel:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>□ Regular stops every 45-60 min</li>
                <li>□ In-seat exercises performed</li>
                <li>□ Proper hydration maintained</li>
                <li>□ Good posture maintained</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-2">After Travel:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>□ Post-trip recovery routine</li>
                <li>□ Symptoms monitored</li>
                <li>□ Normal routine resumed</li>
                <li>□ Extra rest if needed</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-blue-200">
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
