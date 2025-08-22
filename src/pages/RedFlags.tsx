import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function RedFlags() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4 flex items-center justify-center gap-2">
          🚨 Red Flag Warning Signs
        </h1>
        <p className="text-lg text-gray-600">
          Stop exercises immediately and seek medical attention if you
          experience any of these symptoms
        </p>
      </div>

      {/* Serious Warning Signs */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-800">
            🚨 STOP and Seek Immediate Medical Attention
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-red-100 border border-red-300 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">
                Call Emergency Services if you experience:
              </h3>
              <ul className="space-y-1 text-red-700">
                <li>• Sudden severe back pain with fever</li>
                <li>• Loss of bladder or bowel control</li>
                <li>• Numbness in groin/genital area</li>
                <li>• Progressive weakness in legs</li>
                <li>• Severe night pain that wakes you up</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Moderate Warning Signs */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-orange-800">
            ⚠️ Contact Your Healthcare Provider Within 24 Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="space-y-2 text-orange-700">
              <li>• Sharp, shooting pain down your leg</li>
              <li>• Numbness or tingling in arms or legs</li>
              <li>
                • Pain that significantly worsens during or after exercises
              </li>
              <li>• New onset of headaches with neck exercises</li>
              <li>• Dizziness or nausea during exercises</li>
              <li>• Muscle weakness that wasn&apos;t there before</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Normal vs Concerning */}
      <Card>
        <CardHeader>
          <CardTitle>Normal vs Concerning Symptoms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">
                ✅ Normal (OK to Continue)
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Mild muscle soreness 24-48 hours after exercise</li>
                <li>• Slight fatigue after exercising</li>
                <li>• Gentle stretching sensation during exercises</li>
                <li>• Gradual improvement in pain over days/weeks</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">
                ❌ Concerning (Stop Immediately)
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• Sharp, stabbing pain during exercise</li>
                <li>
                  • Pain that radiates away from the area you&apos;re treating
                </li>
                <li>
                  • Any neurological symptoms (numbness, tingling, weakness)
                </li>
                <li>• Pain that gets progressively worse</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-100 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-red-800">Emergency</h4>
              <p className="text-2xl font-bold text-red-600">911</p>
              <p className="text-sm text-red-700">Life-threatening symptoms</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-blue-800">Your Doctor</h4>
              <p className="text-lg font-medium text-blue-600">
                [Contact Info]
              </p>
              <p className="text-sm text-blue-700">Non-emergency concerns</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-green-800">
                Physical Therapist
              </h4>
              <p className="text-lg font-medium text-green-600">
                [Contact Info]
              </p>
              <p className="text-sm text-green-700">
                Exercise-related questions
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
            <Button
              variant="outline"
              className="bg-red-50 border-red-200 text-red-700"
            >
              Print Red Flags List
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
