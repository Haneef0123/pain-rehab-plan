"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DAILY_SAFETY_CHECKLIST, RED_FLAGS } from "@/data/rehabilitationPlan";
import type { SafetyCheckItem } from "@/types";

interface SafetyChecklistProps {
  onComplete: (passed: boolean, checkedItems: string[]) => void;
  disabled?: boolean;
}

export default function SafetyChecklist({
  onComplete,
  disabled = false,
}: SafetyChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [showRedFlagWarning, setShowRedFlagWarning] = useState(false);

  const handleCheckChange = (itemId: string, checked: boolean) => {
    if (disabled) return;

    const updatedItems = checked
      ? [...checkedItems, itemId]
      : checkedItems.filter((id) => id !== itemId);

    setCheckedItems(updatedItems);

    // Check if any red flag items are unchecked (meaning they have the symptom)
    const redFlagItems = DAILY_SAFETY_CHECKLIST.filter(
      (item) => item.isRedFlag
    );
    const uncheckedRedFlags = redFlagItems.filter(
      (item) => !updatedItems.includes(item.id)
    );

    setShowRedFlagWarning(uncheckedRedFlags.length > 0);
  };

  const handleComplete = () => {
    const allItemsChecked =
      checkedItems.length === DAILY_SAFETY_CHECKLIST.length;
    const hasRedFlags = showRedFlagWarning;

    if (hasRedFlags) {
      // Don't allow completion if red flags are present
      return;
    }

    onComplete(allItemsChecked && !hasRedFlags, checkedItems);
  };

  const isComplete = checkedItems.length === DAILY_SAFETY_CHECKLIST.length;
  const canProceed = isComplete && !showRedFlagWarning;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🛡️ Daily Safety Checklist
          </CardTitle>
          <CardDescription>
            Complete this checklist before starting your exercises. All items
            must be checked to proceed safely.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {DAILY_SAFETY_CHECKLIST.map((item: SafetyCheckItem) => (
              <div key={item.id} className="flex items-start space-x-3">
                <Checkbox
                  id={item.id}
                  checked={checkedItems.includes(item.id)}
                  onCheckedChange={(checked) =>
                    handleCheckChange(item.id, checked as boolean)
                  }
                  disabled={disabled}
                  className="mt-1"
                />
                <div className="flex-1">
                  <label
                    htmlFor={item.id}
                    className={`text-sm cursor-pointer ${
                      item.isRedFlag ? "font-medium" : ""
                    }`}
                  >
                    {item.question}
                  </label>
                  {item.isRedFlag && (
                    <p className="text-xs text-red-600 mt-1">
                      ⚠️ Critical safety item
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {showRedFlagWarning && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    ⚠️ Red Flag Symptoms Detected
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>
                      You have indicated symptoms that require immediate medical
                      attention. Please consult with a healthcare professional
                      before continuing with exercises.
                    </p>
                    <div className="mt-3">
                      <h4 className="font-medium">
                        When to seek immediate care:
                      </h4>
                      <ul className="mt-1 list-disc list-inside space-y-1">
                        {RED_FLAGS.map((flag) => (
                          <li key={flag.id} className="text-xs">
                            {flag.description} - {flag.action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleComplete}
              disabled={!canProceed || disabled}
              className="flex-1"
            >
              {showRedFlagWarning
                ? "Cannot Proceed - Seek Medical Care"
                : canProceed
                ? "Complete Safety Check & Continue"
                : "Complete All Items to Continue"}
            </Button>

            {showRedFlagWarning && (
              <Button
                variant="outline"
                onClick={() => window.open("tel:911", "_self")}
                className="flex-1 sm:flex-none"
              >
                📞 Emergency Services
              </Button>
            )}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Progress: {checkedItems.length} of {DAILY_SAFETY_CHECKLIST.length}{" "}
              items completed
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
