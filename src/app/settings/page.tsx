"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface Settings {
  deskBreakInterval: number;
  notificationsEnabled: boolean;
  reminderSounds: boolean;
  darkMode: boolean;
  exportFormat: "json" | "csv";
  autoSave: boolean;
  weekStartDay: "monday" | "sunday";
  timezone: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    deskBreakInterval: 60,
    notificationsEnabled: false,
    reminderSounds: true,
    darkMode: false,
    exportFormat: "json",
    autoSave: true,
    weekStartDay: "monday",
    timezone: "UTC",
  });

  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("app-settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Load current progress
    const savedWeek = localStorage.getItem("current-week");
    const savedDay = localStorage.getItem("current-day");
    if (savedWeek) setCurrentWeek(parseInt(savedWeek, 10));
    if (savedDay) setCurrentDay(parseInt(savedDay, 10));

    // Detect timezone
    setSettings((prev) => ({
      ...prev,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }));
  }, []);

  const saveSettings = () => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      setSettings((prev) => ({
        ...prev,
        notificationsEnabled: permission === "granted",
      }));
    }
  };

  const updateWeek = (newWeek: number) => {
    if (newWeek >= 1 && newWeek <= 8) {
      setCurrentWeek(newWeek);
      localStorage.setItem("current-week", newWeek.toString());
    }
  };

  const updateDay = (newDay: number) => {
    if (newDay >= 1 && newDay <= 7) {
      setCurrentDay(newDay);
      localStorage.setItem("current-day", newDay.toString());
    }
  };

  const resetAllData = () => {
    if (
      confirm(
        "⚠️ This will permanently delete ALL your progress data. Are you absolutely sure?"
      )
    ) {
      if (
        confirm(
          "This action cannot be undone. Type YES in the next prompt to confirm."
        )
      ) {
        const confirmation = prompt(
          'Type "YES" to confirm complete data reset:'
        );
        if (confirmation === "YES") {
          localStorage.clear();
          setCurrentWeek(1);
          setCurrentDay(1);
          setSettings({
            deskBreakInterval: 60,
            notificationsEnabled: false,
            reminderSounds: true,
            darkMode: false,
            exportFormat: "json",
            autoSave: true,
            weekStartDay: "monday",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          });
          alert("All data has been reset. Please restart the app.");
          window.location.href = "/";
        }
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-lg text-gray-600">
          Customize your rehabilitation app experience
        </p>
      </div>

      {/* Progress Management */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Week
              </label>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  min="1"
                  max="8"
                  value={currentWeek}
                  onChange={(e) => updateWeek(parseInt(e.target.value, 10))}
                  className="w-20"
                />
                <span className="text-sm text-gray-500">of 8</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Day
              </label>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  min="1"
                  max="7"
                  value={currentDay}
                  onChange={(e) => updateDay(parseInt(e.target.value, 10))}
                  className="w-20"
                />
                <span className="text-sm text-gray-500">of 7</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-yellow-600 bg-yellow-50 p-3 rounded-md">
            ⚠️ Only adjust these if you need to correct your progress or restart
            from a specific point.
          </p>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications & Reminders</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="notifications"
              checked={settings.notificationsEnabled}
              onCheckedChange={() => requestNotificationPermission()}
            />
            <label
              htmlFor="notifications"
              className="text-sm font-medium text-gray-700"
            >
              Enable browser notifications
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="sounds"
              checked={settings.reminderSounds}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({
                  ...prev,
                  reminderSounds: checked as boolean,
                }))
              }
            />
            <label
              htmlFor="sounds"
              className="text-sm font-medium text-gray-700"
            >
              Play reminder sounds
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Desk Break Interval (minutes)
            </label>
            <Input
              type="number"
              min="15"
              max="120"
              value={settings.deskBreakInterval}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  deskBreakInterval: parseInt(e.target.value, 10),
                }))
              }
              className="w-24"
            />
            <p className="text-xs text-gray-500 mt-1">
              Recommended: 30-60 minutes for optimal spine health
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="autosave"
              checked={settings.autoSave}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({
                  ...prev,
                  autoSave: checked as boolean,
                }))
              }
            />
            <label
              htmlFor="autosave"
              className="text-sm font-medium text-gray-700"
            >
              Auto-save progress locally
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Export Format
            </label>
            <select
              value={settings.exportFormat}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  exportFormat: e.target.value as "json" | "csv",
                }))
              }
              className="w-32 p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="json">JSON</option>
              <option value="csv">CSV</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Week Start Day
            </label>
            <select
              value={settings.weekStartDay}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  weekStartDay: e.target.value as "monday" | "sunday",
                }))
              }
              className="w-32 p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="monday">Monday</option>
              <option value="sunday">Sunday</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* App Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>App Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="darkmode"
              checked={settings.darkMode}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({
                  ...prev,
                  darkMode: checked as boolean,
                }))
              }
            />
            <label
              htmlFor="darkmode"
              className="text-sm font-medium text-gray-700"
            >
              Dark mode (coming soon)
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <Input
              type="text"
              value={settings.timezone}
              readOnly
              className="w-64 bg-gray-50"
            />
            <p className="text-xs text-gray-500 mt-1">
              Automatically detected from your browser
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-800">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white p-4 rounded-md border border-red-200">
            <h3 className="font-medium text-red-800 mb-2">Reset All Data</h3>
            <p className="text-sm text-red-700 mb-4">
              This will permanently delete all your progress, settings, and
              notes. This action cannot be undone.
            </p>
            <Button
              onClick={resetAllData}
              variant="outline"
              className="border-red-300 text-red-700 hover:bg-red-100"
            >
              Reset All Data
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Settings */}
      <div className="flex justify-between items-center">
        <Link href="/">
          <Button variant="outline">← Back to Dashboard</Button>
        </Link>
        <Button
          onClick={saveSettings}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
}
