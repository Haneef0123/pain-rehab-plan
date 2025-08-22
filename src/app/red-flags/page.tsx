"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RED_FLAGS } from "@/data/rehabilitationPlan";
import Link from "next/link";

export default function RedFlags() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4 flex items-center justify-center gap-2">
          🚨 Red Flags - Seek Immediate Medical Care
        </h1>
        <p className="text-lg text-gray-600">
          If you experience any of these symptoms, stop exercising immediately
          and consult a healthcare professional.
        </p>
      </div>

      <div className="grid gap-6">
        {RED_FLAGS.map((flag) => (
          <Card key={flag.id} className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                {flag.severity === "urgent" ? "🔴" : "🟡"} {flag.description}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 font-medium mb-4">{flag.action}</p>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="text-sm text-red-600">
                  <strong>Severity:</strong>{" "}
                  {flag.severity.charAt(0).toUpperCase() +
                    flag.severity.slice(1)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Important Reminders</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-blue-800 mb-2">
                Before Each Session:
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Complete daily safety checklist</li>
                <li>• Check pain levels</li>
                <li>• Assess overall wellbeing</li>
                <li>• Stop if anything feels wrong</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-2">
                During Exercises:
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Never push through sharp pain</li>
                <li>• Stop if numbness occurs</li>
                <li>• Breathe normally throughout</li>
                <li>• Stay within pain-free range</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-blue-200">
            <p className="text-sm text-blue-600 mb-4">
              Remember: This program is designed to be safe and progressive.
              Your safety is the top priority.
            </p>
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
