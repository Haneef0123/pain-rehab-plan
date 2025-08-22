"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import type { RoutineSession, Exercise } from "@/types";

interface ExerciseRoutineProps {
  routine: RoutineSession;
  onComplete: (completedExercises: string[]) => void;
  disabled?: boolean;
}

export default function ExerciseRoutine({
  routine,
  onComplete,
  disabled = false,
}: ExerciseRoutineProps) {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const progress = (completedExercises.length / routine.exercises.length) * 100;
  const isComplete = completedExercises.length === routine.exercises.length;
  const currentExercise = routine.exercises[currentExerciseIndex];

  const handleExerciseComplete = (exerciseId: string) => {
    if (disabled) return;

    const newCompleted = completedExercises.includes(exerciseId)
      ? completedExercises.filter((id) => id !== exerciseId)
      : [...completedExercises, exerciseId];

    setCompletedExercises(newCompleted);
  };

  const handleNext = () => {
    if (currentExerciseIndex < routine.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleFinishRoutine = () => {
    onComplete(completedExercises);
  };

  const formatDuration = (exercise: Exercise): string => {
    const parts = [];
    if (exercise.duration) parts.push(exercise.duration);
    if (exercise.sets && exercise.reps)
      parts.push(`${exercise.sets} sets of ${exercise.reps}`);
    if (exercise.holdTime) parts.push(`Hold ${exercise.holdTime}`);
    return parts.join(" • ");
  };

  if (!isStarted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {routine.category === "morning" && "🌅"}
            {routine.category === "deskBreak" && "💻"}
            {routine.category === "evening" && "🌙"}
            {routine.name}
          </CardTitle>
          <CardDescription>
            {routine.exercises.length} exercises • Estimated{" "}
            {routine.estimatedDuration} minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-medium">Exercises:</span>{" "}
                {routine.exercises.length}
              </div>
              <div>
                <span className="font-medium">Duration:</span>{" "}
                {routine.estimatedDuration} minutes
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Exercise List:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {routine.exercises.map((exercise, index) => (
                  <li key={exercise.id} className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    {exercise.name}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={handleStart}
              disabled={disabled}
              className="w-full"
            >
              Start {routine.name}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{routine.name}</span>
              <span>
                {completedExercises.length} of {routine.exercises.length}{" "}
                completed
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Current Exercise */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">
                Exercise {currentExerciseIndex + 1}: {currentExercise.name}
              </CardTitle>
              <CardDescription>
                {formatDuration(currentExercise)}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`exercise-${currentExercise.id}`}
                checked={completedExercises.includes(currentExercise.id)}
                onCheckedChange={() =>
                  handleExerciseComplete(currentExercise.id)
                }
                disabled={disabled}
              />
              <label
                htmlFor={`exercise-${currentExercise.id}`}
                className="text-sm font-medium"
              >
                Completed
              </label>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">{currentExercise.description}</p>

            {currentExercise.videoUrl && (
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <a
                  href={currentExercise.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                >
                  🎥 Watch Video Demonstration
                </a>
              </div>
            )}

            <div>
              <h4 className="font-medium mb-2">Instructions:</h4>
              <ol className="space-y-2 text-sm">
                {currentExercise.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="flex-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Safety reminder */}
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ <strong>Remember:</strong> Stop immediately if you feel sharp
                pain, numbness, or weakness. Only complete exercises you can do
                pain-free.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentExerciseIndex === 0 || disabled}
          className="flex-1"
        >
          ← Previous Exercise
        </Button>

        {currentExerciseIndex < routine.exercises.length - 1 ? (
          <Button onClick={handleNext} disabled={disabled} className="flex-1">
            Next Exercise →
          </Button>
        ) : (
          <Button
            onClick={handleFinishRoutine}
            disabled={disabled}
            className="flex-1"
            variant={isComplete ? "default" : "outline"}
          >
            {isComplete ? "Complete Routine ✓" : "Finish Routine"}
          </Button>
        )}
      </div>

      {/* Exercise Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Exercises</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {routine.exercises.map((exercise, index) => (
              <div
                key={exercise.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index === currentExerciseIndex
                        ? "bg-blue-600 text-white"
                        : completedExercises.includes(exercise.id)
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {completedExercises.includes(exercise.id) ? "✓" : index + 1}
                  </span>
                  <span
                    className={`text-sm ${
                      index === currentExerciseIndex ? "font-medium" : ""
                    }`}
                  >
                    {exercise.name}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentExerciseIndex(index)}
                  disabled={disabled}
                >
                  {index === currentExerciseIndex ? "Current" : "Go to"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
